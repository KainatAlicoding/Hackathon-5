// app/shop/[productid]/page.tsx
"use client";

import { useParams } from "next/navigation";

const ProductDetails = () => {
  const { productid } = useParams();

  // Example: Mock Product Data
  const product1 = {
    id: productid,
    name: "Mock Product Name",
    description:
      "This is a detailed description of the product. Replace this with real product details.",
    price: "$200",
    image: "/images (1).png",
  };

  const product2 = {
    id: productid,
    name: "Mock Product Name",
    description:
      "This is a detailed description of the product. Replace this with real product details.",
    price: "$200",
    image: "/image 1.png",
  };


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <img
            src={product1.image}
            alt={product1.name}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{product1.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{product1.description}</p>
          <p className="text-2xl font-semibold text-gray-800 mb-6">
            {product1.price}
          </p>
          <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
     
    
      <div className="container mx-auto">
      <div className="relative w-full max-w-[1440px] mx-auto">
        <img
          src="/Group 110.png" //  image path
          alt="Banner"
          className="w-full h-auto object-cover"
          style={{ maxHeight: "776px" }}
        />
      </div>
    </div>
    <div className="container mx-auto">
      <div className="relative w-full max-w-[1440px] mx-auto">
        <img
          src="/Group 19.png" //  image path
          alt="Banner"
          className="w-full h-auto object-cover"
          style={{ maxHeight: "776px" }}
        />
      </div>
    </div>
    {/* Footer */}
    <footer className="bg-white border-t border-gray-200 py-10">
        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold">Funiro.</h2>
            <p className="text-gray-500 mt-2">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-gray-500 font-medium mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-black hover:text-gray-700">Home</a></li>
              <li><a href="#" className="text-black hover:text-gray-700">Shop</a></li>
              <li><a href="#" className="text-black hover:text-gray-700">About</a></li>
              <li><a href="#" className="text-black hover:text-gray-700">Contact</a></li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-gray-500 font-medium mb-4">Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-black hover:text-gray-700">Payment Options</a></li>
              <li><a href="#" className="text-black hover:text-gray-700">Returns</a></li>
              <li><a href="#" className="text-black hover:text-gray-700">Privacy Policies</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-gray-500 font-medium mb-4">Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="border border-gray-300 rounded-l-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-6 py-4">
          <p className="text-center text-gray-500">
            &copy; 2023 Funiro. All rights reserved
          </p>
        </div>
      </footer>

    </div>
    

   
  );
};

export default ProductDetails;
