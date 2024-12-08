// app/shop/[productid]/page.tsx
"use client";

import { useParams } from "next/navigation";

const ProductDetails = () => {
  const { productid } = useParams();

  // Example: Mock Product Data
  const product = {
    id: productid,
    name: "Mock Product Name",
    description:
      "This is a detailed description of the product. Replace this with real product details.",
    price: "$200",
    image: "/images/chair.jpg",
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-gray-800 mb-6">
            {product.price}
          </p>
          <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>

      <div className="container mx-auto">
      <div className="relative w-full max-w-[1440px] mx-auto">
        <img
          src="/Group 110.png" // Replace with your actual image path
          alt="Banner"
          className="w-full h-auto object-cover"
          style={{ maxHeight: "776px" }}
        />
      </div>
    </div>

    </div>
    

    
  );
};

export default ProductDetails;
