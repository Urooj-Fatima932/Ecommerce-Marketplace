'use client'
 import Image from 'next/image';
 import React, {useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Replace with your icon library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const menProductData = [
    // Shoes
    {
      id: 1,
      productName: "Air Max Alpha",
      price: 120,
      category: "Men's Training Shoes",
      imageLink: "/images/air-max-alpha-men.jpg",
    },
    {
      id: 2,
      productName: "Flex Runner",
      price: 95,
      category: "Men's Running Shoes",
      imageLink: "/images/flex-runner-men.jpg",
    },
    {
      id: 3,
      productName: "Court Legacy",
      price: 80,
      category: "Men's Casual Shoes",
      imageLink: "/images/court-legacy-men.jpg",
    },
    // Outfits
    {
      id: 4,
      productName: "Dri-FIT Tee",
      price: 35,
      category: "Men's Training Top",
      imageLink: "/images/dri-fit-tee-men.jpg",
    },
    {
      id: 5,
      productName: "Sports Joggers",
      price: 60,
      category: "Men's Running Pants",
      imageLink: "/images/sports-joggers-men.jpg",
    },
    {
      id: 6,
      productName: "Full-Zip Hoodie",
      price: 75,
      category: "Men's Casual Hoodie",
      imageLink: "/images/full-zip-hoodie-men.jpg",
    },
  ];
function Carousel3() {
    const sliderRef = useRef<Slider | null>(null); // Reference for the slider
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1 // Scroll one slide at a time
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
            <div className='flex gap-9'>{/* Carousel 2 */}
          <div className="slider-container w-full">
            <div className="flex justify-end items-center">
              
              <ul className="flex gap-4 items-center justify-end p-2">
        <p className="text-lg font-medium">Shop Women&apos;s</p>
        <div className="p-1 rounded-full bg-[#f5f5f5] cursor-pointer active:bg-[#d0d0d0]" onClick={handlePrevious}>
          <ChevronLeft />
        </div>
        <div className="p-1 rounded-full bg-[#f5f5f5] cursor-pointer  active:bg-[#d0d0d0]"
        onClick={handleNext}>
          <ChevronRight />
        </div>
      </ul>

            </div>
            <Slider ref={sliderRef} {...settings}>
              {menProductData.map((product) => (
                <div key={product.id} className="p-4 flex flex-col  border-none outline-none">
                  <Image src={product.imageLink} alt={product.productName} width={441} height={441} />
                  <div className="text-lg font-semibold text-Cblack flex justify-between pt-3 px-2">
                    <p>{product.productName}</p>
                    <p>${product.price}</p>
                  </div>
                  <p className="text-sm text-tgray mx-2">{product.category}</p>
                </div>
              ))}
            </Slider>
          </div>
          
          </div>
        </div>
      </main>
    );
  }
  export default Carousel3;
  