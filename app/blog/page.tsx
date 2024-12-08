// app/shop/page.tsx
import Link from "next/link";

const Blog = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold flex items-center">
            <img
              src="/Meubel House_Logos-05.png"
              alt="logo"
              className="w-12 h-8 mr-2"
            />
            Furniro
          </h1>
          <ul className="flex space-x-8 list-none m-0 p-0">
            <li>
              <Link href="/" className="text-gray-700 hover:text-black">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-gray-700 hover:text-black">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-700 hover:text-black">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-700 hover:text-black">
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-black">
              <img src="/mdi_account-alert-outline.png" alt="profile" />
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              <img src="/akar-icons_search.png" alt="search" />
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              <img src="/akar-icons_heart.png" alt="wishlist" />
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              <img src="/ant-design_shopping-cart-outlined.png" alt="cart" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative">
        <img
          src="/Group 78 (2).png"
          alt="Shop Banner"
          className="w-full h-[300px] sm:h-[400px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl sm:text-5xl font-bold">
            
          </h2>
        </div>
      </div>

      {/* Fullscreen Section */}
      <div className="container mx-auto mt-8 px-4">
        <div className="relative w-full max-w-[1440px] mx-auto">
          <img
            src="/Group 185.png"
            alt="Large Banner"
            className="w-full h-auto object-cover"
            style={{ maxHeight: "2710px" }}
          />
        </div>
      </div>

      {/* Promotional Banner */}
      <div className="mt-12">
        <img
          src="/Frame 161.png"
          alt="Promotional Banner"
          className="w-full max-w-screen-xl h-[170px] sm:h-[200px] object-cover mx-auto"
          style={{ maxWidth: "1300px" }}
        />
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 mt-12">
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
    </div>
  );
};

export default Blog;
