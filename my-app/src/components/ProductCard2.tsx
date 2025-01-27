// ProductCard.tsx
'use client'
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  image: StaticImageData | string; // Support both StaticImageData and string for image
  name: string;                   // Product name
  price: string;                  // Product price
  category: string;               // Category like "Men's Shoes"
  className?:string
  color:number;
  href?:string;
}

const ProductCard2: React.FC<ProductCardProps> = ({ image, name, price,color, category,className,href = '#'}) => {
  return (
    <main>
    <Link href={href}>
      {/* Parent container */}
      <div className={`group w-[1/3] mx-auto overflow-hidden relative ${className}`}>
        {/* Image Section with hover effect */}
        <div className="relative">
          {/* Image */}
          <Image
            src={typeof image === 'string' ? image : image.src} // Handle both string and StaticImageData
            alt={name}
            width={420}
            height={420}
            className="object-cover w-full"
            layout="responsive"
          />
  
          {/* Dark overlay and "Shop" text */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 flex items-center justify-center">
            <span
              className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
            >
              Shop
            </span>
          </div>
        </div>
  
        {/* Text Section */}
        <div className="p-2 flex flex-col w-[348px] h-[140px] justify-evenly">
          <p className="font-[500] text-orange-600">Just In</p>
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-sm text-[#757575]">{category}</p>
          <p className="text-sm text-[#757575]">{color} Colours</p>
          <p className="text-sm text-[#757575]">{price}</p>
        </div>
      </div>
    </Link>
  </main>
  
  );
};

export default ProductCard2;
