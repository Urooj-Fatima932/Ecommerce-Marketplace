import { useState } from "react";

export default function CartPage() {
  const [loading, setLoading] = useState(false);

  const cartItems = [
    { name: "Running Shoes", price: 50, quantity: 1 },
    { name: "Workout T-shirt", price: 30, quantity: 2 },
  ]; // Example cart items

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems }),
      });

      const { url } = await res.json();
      window.location.href = url; // Redirect to Stripe checkout page
    } catch (error) {
      console.error("Error:", error);
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.map((item, index) => (
        <p key={index}>
          {item.name} - ${item.price} x {item.quantity}
        </p>
      ))}
       <button 
            className="text-sm bg-[#111111] text-white py-3 rounded-[30px] mb-6 hover:bg-gray-800"
            disabled={subtotal === 0} // Disable checkout if nothing is selected
          >
            Checkout
          </button>
    </div>
  );
} {loading ? "Processing..." : "Checkout"}
