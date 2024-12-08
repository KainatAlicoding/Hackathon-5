// app/shop/page.tsx
import Link from "next/link";

const Contact = () => {
  const products = [
    { id: "1", name: "Chair" },
    { id: "2", name: "Table" },
    { id: "3", name: "Sofa" },
  ];

  return (
    <div>
      
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold flex items-center">
  <img src="\Meubel House_Logos-05.png" alt="logo" className="w-12 h-8 mr-2" />
  Furniro
</h1>
<ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/shop">Shop</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
          <div className="flex items-center space-x-4">
                       <a href="#" className="text-gray-700 hover:text-black"><img src="\mdi_account-alert-outline.png" alt="cart" /></a>
            <a href="#" className="text-gray-700 hover:text-black"><img src="\akar-icons_search.png" alt="cart" /></a>
            <a href="#" className="text-gray-700 hover:text-black"><img src="\akar-icons_heart.png" alt="cart" /></a>
            <a href="#" className="text-gray-700 hover:text-black"><img src="\ant-design_shopping-cart-outlined.png" alt="cart" /></a>
          </div>
        </div>
      </header>
        {/* Hero Section */}
      <div className="relative">
        <img
          src="/Group 78 (1).png"
          alt="Shop Banner"
          className="w-full h-[300px] sm:h-[400px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl sm:text-5xl font-bold">
            
          </h2>
        </div>
      </div>
      
      <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-6">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">Get In Touch With Us</h1>
          <p className="text-gray-500 mt-2">
            For more information about our product & services, please feel free
            to drop us an email. Our staff will always be there to help you
            out. Do not hesitate!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info Section */}
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <div className="text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16.5 10.5L21 6m-6 0h.01M21 6c-1.098-.982-2.763-1.5-4.5-1.5S13.098 5.018 12 6m-3 0a9 9 0 018 4.5M9 6a9 9 0 018 4.5m-3 4.5l-6 6M12 6l-3 6 6 6"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Address</h4>
                <p className="text-gray-600">
                  236 5th SE Avenue, New York, NY 10000, United States
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10a4 4 0 008 0M7 10a4 4 0 108 0M5 14a7 7 0 0114 0m0 6v2a1 1 0 01-1 1H6a1 1 0 01-1-1v-2m0 0H4m16 0h-1"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600">Mobile: +(84) 546-6789</p>
                <p className="text-gray-600">Hotline: +(84) 456-6789</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 9c1.667-2.5 4.833-2.5 6.5 0M9 9c1.667-2.5 4.833-2.5 6.5 0M15 21h.01m-4.978-4.64a10.96 10.96 0 00-.022-.72M3 21a2 2 0 002 2h2a2 2 0 002-2H3z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Working Time</h4>
                <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
                <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-medium text-gray-700">
                Your name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block font-medium text-gray-700"
              >
                Subject (optional)
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Enter a subject"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Hi! I’d like to ask about..."
                rows={4}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
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
 
export default Contact;