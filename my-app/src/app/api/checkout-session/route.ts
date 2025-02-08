import { NextApiRequest } from "next";
import { NextApiResponse } from "next";
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-10-16", // You might want to keep the version up to date
});

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const { cartItems } = JSON.parse(req.body);

  // Create an empty array to store the line items
  const line_items = [];

  // Loop through each item in the cart
  for (const item of cartItems) {
    // Calculate unit_amount in the smallest currency unit (PKR -> paise)
    const unitAmountInPaise = item.price * 100; // Assuming item.price is in PKR

    // Push the item into line_items
    line_items.push({
      price_data: {
        currency: "pkr", // Use lowercase for currency
        product_data: {
          name: item.name,
          images: [item.image], // Ensure it's an array of image URLs
        },
        unit_amount: unitAmountInPaise, // Correct unit amount in smallest currency unit
      },
      quantity: item.quantity,
    });
  }

  try {
    // Create the Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      line_items, // Spread the line items into the request
      mode: "payment", // Set the mode to payment
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`, // You should have the proper environment variable for the base URL
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/failed`, // Similarly, the cancel URL
    });

    // Return the session URL in the response
    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("Error creating session:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
