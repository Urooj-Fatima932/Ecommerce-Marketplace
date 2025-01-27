'use client'
import ProductCard2 from "@/components/ProductCard2";
import Image from "next/image";
import Rectangle1 from "@/images/Rectangle (1).png"
import nikeProducts from "../functionality/data";
function Products(){
    return(
<main>
    <div className="w-[93%] mx-[auto] my-10 text-[#111111] flex gap-6">
<aside className="hidden w-[20%] border-r-2 border-r-[#f5f5f5] pr-4 md:block" >
    <div>
        <h1 className="font-semibold text-2xl">New  (500)</h1>
        <ul className="space-y-3 font-semibold mt-8 mb-8">
            <li>Shoes</li>
            <li>Tops & T-Shirts</li>
            <li>Hoodies & Sweatshirts</li>
            <li>Jackets</li>
            <li>Trousers & Tights</li>
            <li>Shorts</li>
            <li>Jumpsuits & Rompers</li>
            <li>Skirts & Dresses</li>
            <li>Socks</li>
            <li>Accessories</li>
        </ul>
    </div>
    <hr className="my-2"/>
    {/* Gender */}
<div><h1 className="font-semibold text-lg">Gender</h1>
<ul className="text-sm space-y-1 font-[500] my-3">
    <li><label className="flex items-center ">
                  <input type="checkbox" className="mr-2" /> Men
                </label></li>
    <li>
    <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Women
                </label>
    </li>
    <li>
    <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />Unisex
                </label>
    </li>
    </ul></div>
    <hr className="my-2"/>
    {/* kids section */}
    <div><h1 className="font-semibold text-lg">Kids</h1>
    <ul className="text-sm space-y-1 font-[500] my-3">
        <li><label className="flex items-center">
                  <input type="checkbox" className="mr-2" />Girls
                </label></li>
                <li><label className="flex items-center">
                  <input type="checkbox" className="mr-2" />Boys
                </label></li>
                </ul>
                </div>
{/* price section */}
<hr className="my-2"/>
        <div>
            <h1 className="font-semibold text-lg">Shop By Price</h1>
        <ul className="text-sm space-y-1 font-[500] my-3" >
        <li><label className="flex items-center">
                  <input type="checkbox" className="mr-2" />Under ₹ 2 500.00
                </label></li>
                <li><label className="flex items-center">
                  <input type="checkbox" className="mr-2" />₹ 2 501.00 - ₹ 7 500.00
                </label></li>
                </ul>
            </div>        
</aside>
<div className="grid w-[80%] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2  p-4">
      {nikeProducts.map((product) => (
        <ProductCard2
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          category={product.category}
          color={product.availableColors}
      
        
        />))}
    </div>
    </div>
</main>
    )


}
export default Products;