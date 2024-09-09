"use client"
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-gray-100 border-b border-gray-200">
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
            <a href="#" className="text-gray-700 hover:text-indigo-600">
              Rum
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">
              New In
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none hover:text-indigo-600"
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
            <a href="#" className="text-gray-700 hover:text-indigo-600">
              Rum
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">
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
        className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600"
      >
        <span>{title}</span>
        <FaChevronDown size={12} />
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md py-2">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Subcategory 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Subcategory 2
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
