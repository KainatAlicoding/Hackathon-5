// app/shop/page.tsx
import { Image } from "lucide-react";
import Link from "next/link";

const Shop = () => {
  const products = [
    { id: "1", name: "Modern Chair", price: "$120", image: "/Images (1).png" },
    { id: "2", name: "Wooden Table", price: "$250", image: "/image 1.png" },
    { id: "3", name: "Luxury Sofa", price: "$450", image: "/images.png" },
    { id: "4", name: "Stylish Lamp", price: "$80", image: "/image 4.png" },
    { id: "5", name: "Modern Chair", price: "$120", image: "/Images (1).png" },
    { id: "6", name: "Wooden Table", price: "$250", image: "/image 1.png" },
    { id: "7", name: "Luxury Sofa", price: "$450", image: "/images.png" },
    { id: "8", name: "Stylish Lamp", price: "$80", image: "/image 4.png" },
  ];
  

  return (
    <>
      {/* Header */}
<header className="bg-white shadow-md">
  <div className="container mx-auto px-4 py-4 flex justify-between items-center">
    {/* Logo and Title */}
    <h1 className="text-xl font-bold flex items-center">
      <img
        src="\Meubel House_Logos-05.png"
        alt="logo"
        className="w-12 h-8 mr-2"
      />
      <span className="hidden sm:inline">Furniro</span>
    </h1>
    
    {/* Navigation Menu */}
    <ul
      className="hidden sm:flex space-x-6 text-gray-700 font-medium"
      style={{ listStyle: "none", margin: 0, padding: 0 }}
    >
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/shop">Shop</Link>
      </li>
      <li>
        <Link href="/blog">Blog</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>

    {/* Mobile Menu Button */}
    <button
      className="sm:hidden flex items-center px-2 py-1 border rounded text-gray-700"
      id="mobile-menu-btn"
    >
      <img src="\hamburguer.jpg" alt="menu" className="w-6 h-6" />
    </button>

    {/* Icons */}
    <div className="hidden sm:flex items-center space-x-4">
      <a href="#" className="text-gray-700 hover:text-black">
        <img src="\mdi_account-alert-outline.png" alt="account" />
      </a>
      <a href="#" className="text-gray-700 hover:text-black">
        <img src="\akar-icons_search.png" alt="search" />
      </a>
      <a href="#" className="text-gray-700 hover:text-black">
        <img src="\akar-icons_heart.png" alt="wishlist" />
      </a>
      <a href="#" className="text-gray-700 hover:text-black">
        <img src="\ant-design_shopping-cart-outlined.png" alt="cart" />
      </a>
    </div>
  </div>

  {/* Mobile Menu (hidden by default) */}
  <div
    id="mobile-menu"
    className="sm:hidden flex flex-col space-y-2 px-4 py-2 bg-gray-100"
    style={{ display: "none" }}
  >
    <Link href="/" className="text-gray-700 hover:text-black">Home</Link>
    <Link href="/shop" className="text-gray-700 hover:text-black">Shop</Link>
    <Link href="/blog" className="text-gray-700 hover:text-black">Blog</Link>
    <Link href="/contact" className="text-gray-700 hover:text-black">Contact</Link>
  </div> 


</header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Picture above the Shop title */}
        <div className="mb-8">
          <img
            src="/Group 78.png" // Replace with your actual image path
            alt="Shop Banner"
            className="w-full max-w-screen-xl h-[270px] object-cover mx-auto"
            style={{ maxWidth: "1440px" }}
          />
          <img src="Group 63.png" alt="" className="w-full" />
        </div>

        {/* Shop title */}
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Shop
        </h1>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition duration-300 p-4"
            >
              <Link href={`/shop/${product.id}`}>
                <img 
                  src={product.image } 
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                />
              </Link>
              <h2 className="text-lg font-semibold text-gray-700">
                {product.name}
              </h2>
              <p className="text-gray-500 text-sm mb-4">{product.price}</p>
              <Link href={`/shop/${product.id}`}>
                <button className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition duration-300">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Promotional Banner */}
<div className="mt-12">
  <img
    src="/Frame 161.png"
    alt="Promotional Banner"
    className="w-full max-w-screen-xl h-auto sm:h-[200px] object-cover mx-auto"
  />
</div>
        

      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold">Funiro.</h2>
            <p className="text-gray-500 mt-2">
              400 University Drive Suite 200 Coral Gables, <br />
              FL 33134 USA
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-gray-500 font-medium mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-black hover:text-gray-700">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-gray-700">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-gray-700">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-gray-700">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-gray-500 font-medium mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-black hover:text-gray-700">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-gray-700">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-gray-700">
                  Privacy Policies
                </a>
              </li>
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
    </>
  );
};

export default Shop;
