"use client";

import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { searchProducts } from '@/utils/searchProducts'; // Make sure the path is correct

interface SearchBarProps {
  setSearchResults: (results: any[]) => void; // Ensure correct prop type for setting search results
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      const results = await searchProducts(searchTerm); // Fetch search results
      setSearchResults(results); // Update the state with search results
    }
  };

  return (
    <div className="relative w-full">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="w-full py-2 pl-5 pr-14 text-sm border-2 border-transparent rounded-full shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-300 transition bg-white"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-500 text-white rounded-full p-2 shadow-lg hover:bg-indigo-600 transition"
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
