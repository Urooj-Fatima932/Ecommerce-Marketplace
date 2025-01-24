 'use client'
 import Image from 'next/image';
 import React, {useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Replace with your icon library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const productData = [
    {
      "id": "1",
      "productName": "Nike Air Max 90",
      "price": 120,
      "imageLink": "/images/shoe1.jpg",
      "category": "Running Shoes"
    },
    {
      "id": "2",
      "productName": "Nike Revolution 6",
      "price": 85,
      "imageLink": "/images/shoe2.jpg",
      "category": "Training Shoes"
    },
    {
      "id": "3",
      "productName": "Nike Pegasus Trail 3",
      "price": 130,
      "imageLink": "/images/shoe3.jpg",
      "category": "Trail Shoes"
    },
    {
      "id": "4",
      "productName": "Nike ZoomX Vaporfly",
      "price": 250,
      "imageLink": "/images/shoe4.jpg",
      "category": "Performance Shoes"
    },
    {
      "id": "5",
      "productName": "Nike SB Dunk Low",
      "price": 110,
      "imageLink": "/images/shoe5.jpg",
      "category": "Casual Shoes"
    },
    {
      "id": "6",
      "productName": "Nike Free RN 5.0",
      "price": 100,
      "imageLink": "/images/shoe06.jpg",
      "category": "Running Shoes"
    },
    {
      "id": "7",
      "productName": "Nike Court Vision",
      "price": 75,
      "imageLink": "/images/shoe07.jpg",
      "category": "Basketball Shoes"
    },
    {
      "id": "8",
      "productName": "Nike Metcon 7",
      "price": 150,
      "imageLink": "/images/shoe08.jpg",
      "category": "Training Shoes"
    },
    {
      "id": "9",
      "productName": "Nike Air Zoom Terra Kiger 7",
      "price": 140,
      "imageLink": "/images/shoe09.jpg",
      "category": "Trail Shoes"
    },
    {
      "id": "10",
      "productName": "Nike Blazer Mid '77",
      "price": 110,
      "imageLink": "/images/shoe10.jpg",
      "category": "Casual Shoes"
    },
    {
      "id": "11",
      "productName": "Nike React Infinity Run Flyknit",
      "price": 160,
      "imageLink": "/images/shoe11.jpg",
      "category": "Running Shoes"
    },
    {
      "id": "12",
      "productName": "Nike Phantom GT2 Academy",
      "price": 95,
      "imageLink": "/images/shoe12.jpg",
      "category": "Football Shoes"
    },
    {
      "id": "13",
      "productName": "Nike Mercurial Vapor 14",
      "price": 250,
      "imageLink": "/images/shoe13.jpg",
      "category": "Football Shoes"
    },
    {
      "id": "14",
      "productName": "Nike Tiempo Legend 9",
      "price": 200,
      "imageLink": "/images/shoe05.jpg",
      "category": "Football Shoes"
    },
    {
      "id": "15",
      "productName": "Nike Air Force 1",
      "price": 110,
      "imageLink": "/images/shoe04.jpg",
      "category": "Casual Shoes"
    },
    {
      "id": "16",
      "productName": "Nike Vapor Edge Pro 360",
      "price": 120,
      "imageLink": "/images/shoe03.jpg",
      "category": "Football Shoes"
    },
    {
      "id": "17",
      "productName": "Nike Zoom Freak 4",
      "price": 130,
      "imageLink": "/images/shoe02.jpg",
      "category": "Basketball Shoes"
    },
    {
      "id": "18",
      "productName": "Nike Kyrie Low 5",
      "price": 110,
      "imageLink": "/images/shoe01.jpg",
      "category": "Basketball Shoes"
    }
  ]

function Carousel() {
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
              <h3 className="font-semibold text-lg">Best Of Air Max</h3>
              <ul className="flex gap-4 items-center">
                <p className="font-bold">Shop</p>
                {/* Previous Icon */}
                <div
                  className="p-1 rounded-[50%] bg-[#f5f5f5] cursor-pointer  active:bg-[#d0d0d0]"
                  onClick={handlePrevious}
                >
                  <ChevronLeft />
                </div>
                {/* Next Icon */}
                <div
                  className="p-1 rounded-[50%] bg-[#f5f5f5] cursor-pointer  active:bg-[#d0d0d0]"
                  onClick={handleNext}
                >
                  <ChevronRight />
                </div>
              </ul>
            </div>
            <Slider ref={sliderRef} {...settings}>
              {productData.map((product) => (
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
      </main>
    );
  }
  export default Carousel;
  