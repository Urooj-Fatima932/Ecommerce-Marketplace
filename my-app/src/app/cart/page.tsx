
import Link from "next/link";
import CartItem from "@/components/CartItem";
import Carousel from "@/components/carousel";


function Cart() {
  return (
    <main className="px-4 sm:px-6 md:px-8">
      <div className="w-full mx-[3] md:w-[75%] md:mx-auto mt-8 flex flex-col lg:flex-row gap-5">
        {/* Left Section */}
        <div className="w-full lg:w-[70%] h-auto">
          
          <h1 className="font-[500] text-xl md:text-2xl my-4 md:my-6">Bag</h1>

          {/* Product Card 1 */}
          <CartItem/>
          {/* Product Card 2 */}
          <CartItem/>
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
           Checkout
          </button>
        </div>
      </div>

      {/* Favourites Section */}
      <div className="w-full md:w-[75%] mx-auto  my-12 md:mb-20">
        <h1 className="font-[500] text-xl md:text-2xl">Favourites</h1>
        <p className="text-[#111111] text-sm md:text-base">
          There are no items saved to your favourites
        </p>
      </div>

      {/* You Might Also Like */}
     <Carousel name="You Might Also Like"/>
    </main>
  );
}

export default Cart;
