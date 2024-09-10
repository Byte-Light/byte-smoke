"use client"
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-gradient-to-r from-gray-100 to-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Main Navbar Links */}
          <div className="hidden md:flex space-x-8">
            <Dropdown title="Cigars" />
            <Dropdown title="Cigarettes" />
            <Dropdown title="Hand Rolling Tobacco" />
            <Dropdown title="Tobaccos" />
            <Dropdown title="Pipes" />
            <Dropdown title="Vapes" />
            <Dropdown title="Accessories" />
            <a href="#" className="text-gray-700 hover:text-indigo-500 transition duration-300">
              Rum
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-500 transition duration-300">
              New In
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none hover:text-indigo-500 transition duration-300"
            >
              <FaChevronDown size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 pt-2">
            <Dropdown title="Cigars" />
            <Dropdown title="Cigarettes" />
            <Dropdown title="Hand Rolling Tobacco" />
            <Dropdown title="Tobaccos" />
            <Dropdown title="Pipes" />
            <Dropdown title="Vapes" />
            <Dropdown title="Accessories" />
            <a href="#" className="text-gray-700 hover:text-indigo-500 transition duration-300">
              Rum
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-500 transition duration-300">
              New In
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

interface DropdownProps {
  title: string;
}

const Dropdown: React.FC<DropdownProps> = ({ title }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-1 text-gray-700 hover:text-indigo-500 transition duration-300"
      >
        <span>{title}</span>
        <FaChevronDown size={12} />
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-10 transition-transform transform scale-95 origin-top">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 transition duration-200"
          >
            Subcategory 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 transition duration-200"
          >
            Subcategory 2
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
