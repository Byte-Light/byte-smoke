import Link from 'next/link';
import React from 'react';
import { FaHeart, FaHeadset, FaSearch, FaShoppingBasket, FaClipboardList } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 bg-gradient-to-r from-blue-500 via-purple-600 to-gray-700 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex justify-between items-center space-x-6">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link href='/'><img src="/images/byte-logo.svg" alt="Byte Smoke" className="w-40 h-auto" /></Link>
          <span className="hidden md:inline-block text-sm text-gray-200 uppercase tracking-wide">
            Trusted Tobacconist
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex-grow max-w-lg hidden sm:flex items-center">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full py-2 pl-5 pr-14 text-sm border-2 border-transparent rounded-full shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-300 transition bg-white"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-500 text-white rounded-full p-2 shadow-lg hover:bg-indigo-600 transition">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Action Icons */}
        <div className="flex space-x-6 items-center">
          
          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-3 text-gray-300">
            <FaHeadset size={22} />
            <div className="leading-none">
              <p className="font-semibold text-white">We're Open</p>
              <p className="text-xs text-gray-300">0113 217 7723</p>
            </div>
          </div>

          {/* Wishlist */}
          <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition cursor-pointer">
            <FaHeart size={22} />
            <span className="hidden md:inline text-sm">Wishlist</span>
          </div>

          {/* Cigar Finder */}
          <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition cursor-pointer">
            <FaClipboardList size={22} />
            <span className="hidden md:inline text-sm">Cigar Finder</span>
          </div>

          {/* Basket */}
          <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition cursor-pointer">
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
            className="w-full py-2 pl-4 pr-14 text-sm border-2 border-transparent rounded-full shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-300 transition bg-white"
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
