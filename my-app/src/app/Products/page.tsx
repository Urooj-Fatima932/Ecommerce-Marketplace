'use client'
import ProductCard2 from "@/components/ProductCard2";
import Image from "next/image";
import {fetchAllProducts} from "@/lib/fetchAllProducts";
import nikeProducts from "../functionality/data";
import { useEffect, useState } from "react";
function Products(){
  interface Product {
      productName: string;
      image: string;
      inventory: string;
      price: number;
      category: string;
      status: string;
      _id: string
      colors: string;
    }
  
    const [wshoes, setWshoes] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
  
    useEffect(() => {
      const fetchData = async () => {
      try {
        const result = await fetchAllProducts();
        if (result && !result.error) {
          if (result && result.data) {
            setWshoes(result.data);
            console.log(result.data)
          } else {
            setError(result?.error || 'Unknown error');
          }
        } else {
          setError(result?.error || 'Unknown error');
        }
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
      }
      
      fetchData();
      console.log(wshoes)
    },[])
    return(
<main>
    <div className="w-[93%] mx-[auto] my-10 text-[#111111] flex gap-6">

<div className="grid w-[100%] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2  p-4">
      {wshoes.map((product) => (
        <ProductCard2
        status={product.status}
        alt={product.productName}
          key={product._id}
          image={product.image}
          name={product.productName}
          price={product.price}
          category={product.category}

         
          
    
        />))}
    </div>
    </div>
</main>
    )


}
export default Products;