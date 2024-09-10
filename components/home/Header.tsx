import React from 'react';
import { FaHeart, FaHeadset, FaSearch, FaShoppingBasket, FaClipboardList } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex justify-between items-center space-x-6">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/images/byte-logo.svg" alt="Byte Smoke" className="w-40 h-auto" />
          <span className="hidden md:inline-block text-sm text-gray-600 uppercase tracking-wide">
            Trusted Tobacconist
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex-grow max-w-lg hidden sm:flex items-center">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full py-2 pl-5 pr-14 text-sm border-2 border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-500 text-white rounded-full p-2 shadow-lg hover:bg-indigo-600 transition">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Action Icons */}
        <div className="flex space-x-6 items-center">
          
          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-3 text-gray-600">
            <FaHeadset size={22} />
            <div className="leading-none">
              <p className="font-semibold text-indigo-600">We're Open</p>
              <p className="text-xs text-gray-500">0113 217 7723</p>
            </div>
          </div>

          {/* Wishlist */}
          <div className="flex items-center space-x-2 text-gray-700 hover:text-indigo-500 transition cursor-pointer">
            <FaHeart size={22} />
            <span className="hidden md:inline text-sm">Wishlist</span>
          </div>

          {/* Cigar Finder */}
          <div className="flex items-center space-x-2 text-gray-700 hover:text-indigo-500 transition cursor-pointer">
            <FaClipboardList size={22} />
            <span className="hidden md:inline text-sm">Cigar Finder</span>
          </div>

          {/* Basket */}
          <div className="flex items-center space-x-2 text-gray-700 hover:text-indigo-500 transition cursor-pointer">
            <FaShoppingBasket size={22} />
            <span className="hidden md:inline text-sm">Basket £0.00</span>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="sm:hidden px-4 mt-4">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full py-2 pl-4 pr-14 text-sm border-2 border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-500 text-white rounded-full p-2 shadow-lg hover:bg-indigo-600 transition">
            <FaSearch />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
