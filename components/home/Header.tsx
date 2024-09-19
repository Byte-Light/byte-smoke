"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaHeart, FaHeadset, FaSearch, FaShoppingBasket, FaClipboardList, FaTimes } from 'react-icons/fa';
import SearchBar from '../SearchBar';
import SearchSpotlight from '../SearchSpotlight'; // Assuming this component renders products

const Header: React.FC = () => {
  const [searchResults, setSearchResults] = useState<any[]>([]); // State to hold search results

  const clearSearchResults = () => {
    setSearchResults([]); // Clear the search results when 'X' button is clicked
  };

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
          <SearchBar setSearchResults={setSearchResults} /> {/* Pass setSearchResults to SearchBar */}
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

        </div>
      </div>

      {/* Search Results Spotlight */}
      {searchResults.length > 0 && (
        <div className="mt-4 px-4 relative">
          {/* Close Button */}
          <button
            onClick={clearSearchResults}
            className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg transition-transform transform hover:scale-105"
            aria-label="Clear Search Results"
          >
            <FaTimes size={16} />
          </button>
          <SearchSpotlight productsProp={searchResults} /> {/* Display search results */}
        </div>
      )}
    </header>
  );
};

export default Header;
