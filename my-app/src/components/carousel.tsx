'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Replace with your icon library
import { client } from '@/sanity/lib/client'; // Import your client
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { fetchCorousel } from '@/lib/fetchCorousel';
import { useState,useEffect } from 'react';
import Link from 'next/link';
interface props{
  name:string
}
 function Carousel(name:props) {
   interface Product {
      productName: string;
      image: string;
      inventory: string;
      price: number;
      category: string;
      status: string;
      _id: string;
    }
  
    const [wshoes, setWshoes] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
  
    useEffect(() => {
      const fetchData = async () => {
      try {
        const result = await fetchCorousel();
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
   
  const sliderRef = useRef<Slider | null>(null); // Reference for the slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1, // Scroll one slide at a time
    responsive: [
      {
        breakpoint: 1024, // For large screens (1024px and above)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // For medium screens (768px and above)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // For small screens (480px and below)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handlePrevious = () => {
    sliderRef.current?.slickPrev(); // Navigate to the previous slide
  };

  const handleNext = () => {
    sliderRef.current?.slickNext(); // Navigate to the next slide
  };

  return (
    <main>
      <div className="w-[93%] mx-auto m-0 p-0">
        <div className="slider-container">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">{name.name}</h3>
            <ul className="flex gap-4 items-center">
              <p className="font-bold">Shop</p>
              {/* Previous Icon */}
              <div
                className="p-1 rounded-[50%] bg-[#f5f5f5] cursor-pointer active:bg-[#d0d0d0]"
                onClick={handlePrevious}
              >
                <ChevronLeft />
              </div>
              {/* Next Icon */}
              <div
                className="p-1 rounded-[50%] bg-[#f5f5f5] cursor-pointer active:bg-[#d0d0d0]"
                onClick={handleNext}
              >
                <ChevronRight />
              </div>
            </ul>
          </div>
          <Slider ref={sliderRef} {...settings}>
            {wshoes.map((product) => (
              <Link href={`Product_Details/${product._id}`} key={product._id}>
              <div
                
                className="p-4 flex flex-col border-none outline-none group relative"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.productName}
                    width={441}
                    height={441}
                    className="object-cover w-full h-auto transition-all group-hover:brightness-75"
                  />

                  {/* "Shop" Text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-white font-semibold text-lg translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                    >
                      Shop
                    </span>
                  </div>
                </div>

                {/* Product Details */}
                <div><p className='font-[500] text-orange-600 pt-2 px-1'>{product.status}</p></div>
                <div className="text-lg font-semibold text-Cblack flex justify-between pt-1 px-2">
                  <p>{product.productName}</p>
                  <p>Rs.{product.price}</p>
                </div>
                <p className="text-sm text-tgray mx-2">{product.category}</p>
              </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </main>
  );
}

export default Carousel;
