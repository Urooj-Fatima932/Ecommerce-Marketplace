// ProductCard.tsx
'use client'
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  image: StaticImageData | string; // Support both StaticImageData and string for image
  name: string;                   // Product name
  price: number;                  // Product price
  category: string;               // Category like "Men's Shoes"
  className?:string
  color?:string;
  href?:string;
  status:string;
  alt:string;
}

const ProductCard2: React.FC<ProductCardProps> = ({ image, name,alt, price,color, category,className,status,href = '#'}) => {
  return (
    <main>
    <Link href={href}>
              <div
               
                className="p-4 flex flex-col border-none outline-none group relative"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <Image
                    src={image}
                    alt={alt}
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
                <div><p className='font-[500] text-orange-600 pt-2 px-2'>{status}</p></div>
                <div className="text-lg font-semibold text-Cblack flex justify-between pt-1 px-2">
                  <p>{name}</p>
                  <p>Rs.{price}</p>
                </div>
                <p className="text-sm text-tgray mx-2">{category}</p>
              </div>
              </Link>
  </main>
  
  );
};

export default ProductCard2;
