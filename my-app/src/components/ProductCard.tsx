// ProductCard.tsx
'use client'
import Image, { StaticImageData } from 'next/image';

interface ProductCardProps {
  image: StaticImageData | string; // Support both StaticImageData and string for image
  name: string;                   // Product name
  price: string;                  // Product price
  category: string;               // Category like "Men's Shoes"
  className?:string
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price, category,className}) => {
  return (
    <div className={`w-[420] h-[480px]   items-start ${className}`}>
      {/* Image Section */}
      <div className="">
        <Image
          src={typeof image === 'string' ? image : image.src} // Handle both string and StaticImageData
          alt={name}
          width={300}
          height={200}
          className="object-cover w-[full]"
          layout= "responsive"
        />
      </div>

      {/* Text Section */}
      <div className="p-4">
 <div className= " w-[100%] flex justify-between">
        <h3 className='font-semibold'>{name}</h3> {/* Product Name */}
        <p className='font-semibold'>${price}</p> {/* Product Price */}
 </div>
        <p className='text-sm text-[#757575]'>{category}</p> {/* Product Category */}
      </div>
    </div>
  );
};

export default ProductCard;
