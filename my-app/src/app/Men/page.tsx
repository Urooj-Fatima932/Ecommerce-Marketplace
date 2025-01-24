
import Image from "next/image";
import Link from "next/link";
import { Heart, Trash2 } from "lucide-react";
import ProductCard from "@/components/ProductCard";


function Men() {
  return (
    <main className="px-4 sm:px-6 md:px-8">
      <div className="w-full md:w-[75%] mx-auto mt-8 flex flex-col lg:flex-row gap-5">
        {/* Left Section */}
        <div className="w-full lg:w-[70%] h-auto">
          <div className="bg-[#F7F7F7] p-3">
            <h3 className="font-[500] text-lg">Free Delivery</h3>
            <p className="text-sm md:text-base">
              Applies to orders of ₹ 14 000.00 or more.
              <Link href="#" className="underline ml-4">
                View details
              </Link>
            </p>
          </div>
          <h1 className="font-[500] text-xl md:text-2xl my-4 md:my-6">Bag</h1>

          {/* Product Card 1 */}
          <div className="flex flex-col sm:flex-row gap-5">
            <Image
              className="w-full sm:w-[150px] h-auto sm:h-[150px]"
              src="/images/shoe2.png"
              alt="outfit"
              width={200}
              height={300}
            />
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-sm md:text-base font-semibold text-[#111111]">
                  <h3>Nike Dri-FIT ADV TechKnit Ultra</h3>
                  <h3>MRP: ₹ 3 895.00</h3>
                </div>
                <p className="text-[#757575] text-sm">Men Short-Sleeve Running Top</p>
                <p className="text-[#757575] text-sm">Ashen Slate/Cobalt Bliss</p>
                <div className="flex justify-between w-full sm:w-[40%] text-[#757575]">
                  <p>Size L</p>
                  <p>Quantity 1</p>
                </div>
              </div>
              <div className="icons flex gap-4">
                <Heart className="text-[#111111]" />
                <Trash2 className="text-[#111111]" />
              </div>
            </div>
          </div>

          <hr className="border-gray-200 my-4 md:my-6 rounded" />

          {/* Product Card 2 */}
          <div className="flex flex-col sm:flex-row gap-5">
            <Image
              className="w-full sm:w-[150px] h-auto sm:h-[150px]"
              src="/images/shoe2.png"
              alt="outfit"
              width={200}
              height={300}
            />
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-sm md:text-base font-semibold text-[#111111]">
                  <h3>Nike Air Max 97 SE</h3>
                  <h3>MRP: ₹ 16 995.00</h3>
                </div>
                <p className="text-[#757575] text-sm">Men&apos Shoes</p>
                <p className="text-[#757575] text-sm">
                  Flat Pewter/Light Bone/Black/White
                </p>
                <div className="flex justify-between w-full sm:w-[40%] text-[#757575]">
                  <p>Size 8</p>
                  <p>Quantity 1</p>
                </div>
              </div>
              <div className="icons flex gap-4">
                <Heart className="text-[#111111]" />
                <Trash2 className="text-[#111111]" />
              </div>
            </div>
          </div>

          <hr className="border-gray-200 my-4 md:my-6 rounded" />
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[30%] flex flex-col gap-4">
          <h1 className="font-[500] text-xl md:text-2xl text-[#111111]">Summary</h1>
          <div className="flex justify-between text-sm md:text-base">
            <p>Subtotal</p>
            <p>₹ 20 890.00</p>
          </div>
          <div className="flex justify-between text-sm md:text-base">
            <p>Estimated Delivery & Handling</p>
            <p>Free</p>
          </div>
          <hr className="border-gray-200 rounded" />
          <div className="flex justify-between text-sm md:text-base">
            <p>Total</p>
            <p>₹ 20 890.00</p>
          </div>
          <hr className="border-gray-200 rounded" />
          <button className="text-sm bg-[#111111] text-white py-3 rounded-[30px] mb-6 hover:bg-gray-800">
            Member Checkout
          </button>
        </div>
      </div>

      {/* Favourites Section */}
      <div className="w-full md:w-[75%] mx-auto mb-12 md:mb-20">
        <h1 className="font-[500] text-xl md:text-2xl">Favourites</h1>
        <p className="text-[#111111] text-sm md:text-base">
          There are no items saved to your favourites
        </p>
      </div>

      {/* You Might Also Like */}
      <div className="w-full md:w-[93%] mx-auto">
        <h1 className="font-[500] text-xl md:text-2xl text-[#111111]">You Might Also Like</h1>
        <ProductCard
          image="/images/shoe1.png"
          name="Air Jordan 1 Mid SE Craft"
          price="MRP : ₹ 12 295.00"
          category="Men's Shoes"
          className="w-full sm:w-[431px] h-auto sm:h-[523px] my-3"
        />
      </div>
    </main>
  );
}

export default Men;
