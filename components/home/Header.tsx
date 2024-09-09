import React from 'react';
import { FaHeart, FaHeadset, FaSearch, FaShoppingBasket, FaClipboardList } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="w-full border-b border-gray-200 py-4 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center space-x-6 lg:space-x-10">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/logo.svg" alt="Byte Smoke" className="w-36 h-auto" />
          <span className="hidden md:inline-block text-xs text-gray-500 uppercase tracking-wide">
            The USA's Most Trusted Tobacconist
          </span>
        </div>

        {/* Search bar */}
        <div className="flex-grow max-w-lg mx-6 hidden sm:flex items-center">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="I'm looking for..."
              className="w-full py-2 pl-4 pr-14 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white rounded-full p-2 hover:bg-indigo-700 transition-colors">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Action Icons */}
        <div className="flex space-x-6 items-center">
          
          {/* Contact Information */}
          <div className="hidden lg:flex items-center space-x-3 text-gray-600">
            <FaHeadset size={20} />
            <div className="leading-tight">
              <p className="font-semibold text-green-500 text-sm">We're Open</p>
              <p className="text-xs text-gray-400">0113 217 7723</p>
            </div>
          </div>

          {/* Wishlist */}
          <div className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 cursor-pointer">
            <FaHeart size={22} />
            <span className="text-sm hidden md:inline">Wishlist</span>
          </div>

          {/* Cigar Finder */}
          <div className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 cursor-pointer">
            <FaClipboardList size={22} />
            <span className="text-sm hidden md:inline">Cigar Finder</span>
          </div>

          {/* Basket */}
          <div className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 cursor-pointer">
            <FaShoppingBasket size={22} />
            <span className="text-sm hidden md:inline">Basket £0.00</span>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="sm:hidden px-4 mt-4">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="I'm looking for..."
            className="w-full py-2 pl-4 pr-14 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white rounded-full p-2 hover:bg-indigo-700 transition-colors">
            <FaSearch />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
