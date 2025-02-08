"use client"; // Mark this as a client component

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import SelectSize from "./SelectSize";
import SelectColor from "./SelectColor";
import AddToCartButton from "./AddToCartButton";

interface Product {
  id: string;
  name: string;
  price: number;
  colors?: string[]; // Assuming colors are available
}

export default function ProductSelectionClient({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  // Define a default set of sizes for the product
  const sizes = ["S", "M", "L", "XL"]; // Example sizes

  const handleAddToCart = () => {
    if (selectedSize && selectedColor) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        selectedSize,
        selectedColor,
      });
    }
  };

  return (
    <div>
      <SelectSize sizes={sizes} onChange={setSelectedSize} />
      <SelectColor colors={product.colors ?? []} onChange={setSelectedColor} />
    </div>
  );
}
