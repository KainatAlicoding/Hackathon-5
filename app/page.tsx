"use client";

import Image from "next/image";
import Link from 'next/link';
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-white text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold flex items-center">
            <img src="\Meubel House_Logos-05.png" alt="logo" className="w-12 h-8 mr-2" />
            Furniro
          </h1>
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <ul className="flex space-x-6">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-700 hover:text-black"><img src="\mdi_account-alert-outline.png" alt="account" /></a>
              <a href="#" className="text-gray-700 hover:text-black"><img src="\akar-icons_search.png" alt="search" /></a>
              <a href="#" className="text-gray-700 hover:text-black"><img src="\akar-icons_heart.png" alt="wishlist" /></a>
              <a href="#" className="text-gray-700 hover:text-black"><img src="\ant-design_shopping-cart-outlined.png" alt="cart" /></a>
            </div>
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            <img src="/hamburguer.jpg" alt="Menu" className="w-6 h-6" />
          </button>

        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-md py-4 px-6">
            <ul className="space-y-4">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div className="relative bg-gray-50 min-h-screen">
      {/* Background Image */}
      <div className="relative">
        <img
          src="/pic.png" // Replace with your background image path
          alt="Background"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Overlay with Text */}
      <div className="absolute inset-0 flex items-center justify-end pr-8">
        <div className="bg-[#FAF4E6] rounded-lg shadow-lg p-8 md:p-12 max-w-lg text-left">
          <p className="text-sm text-gray-500 uppercase font-semibold">New Arrival</p>
          <h1 className="text-3xl font-bold text-gray-800 mt-2">
            Discover Our New Collection
          </h1>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="mt-6 px-6 py-3 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>

      {/* Browse the Range */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <Image
            src="/Group 115.png" // Replace with your image path
            alt="Browse The Range"
            width={1183}
            height={685}
            className="mx-auto max-w-full h-auto"
          />
        </div>
      </section>

      {/* Our Product */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-8">Our Products</h3>
          <div className="flex justify-center">
            <img
              src="/Our Products.png" // Replace with your actual image path
              alt="Our Products"
              className="max-w-full rounded-md shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4">50+ Beautiful Rooms Inspiration</h3>
            <p className="text-gray-600 mb-6">
              Our designer has created beautiful room prototypes that will inspire you.
            </p>
            <button className="bg-yellow-500 text-white py-3 px-6 rounded-md hover:bg-yellow-600">
              Explore More
            </button>
          </div>
          <div className="lg:w-1/2">
            <div className="w-full h-96 bg-white-300 flex items-center justify-center">
              <img src="image 4.png" alt="pic" sizes="w-500 h-300" />
            </div>
          </div>
        </div>
      </section>

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
    </main>
  );
}
