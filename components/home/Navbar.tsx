"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white left-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="hidden md:flex space-x-8 items-center">
            {/** Main Navigation Links */}
            <NavLink label="Vaping" links={vapingLinks} />
            <NavLink label="Kratom" links={kratomLinks} />
            <NavLink label="Cannabis" links={cannabisLinks} />
            <NavLink label="Cigar" links={cigarLinks} />
            <NavLink label="Glassware" links={glasswareLinks} />
            <NavLink label="Tobacco Products" links={tobaccoLinks} />
            <NavLink label="Smoking Accessories" links={smokingAccessoriesLinks} />
            <NavLink label="Hookah Supplies" links={hookahLinks} />
            <NavLink label="Incense" links={incenseLinks} />
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/** Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-purple-600">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            <NavLink label="Vaping" links={vapingLinks} mobile />
            <NavLink label="Kratom" links={kratomLinks} mobile />
            <NavLink label="Cannabis" links={cannabisLinks} mobile />
            <NavLink label="Cigar" links={cigarLinks} mobile />
            <NavLink label="Glassware" links={glasswareLinks} mobile />
            <NavLink label="Tobacco Products" links={tobaccoLinks} mobile />
            <NavLink label="Smoking Accessories" links={smokingAccessoriesLinks} mobile />
            <NavLink label="Hookah Supplies" links={hookahLinks} mobile />
            <NavLink label="Incense" links={incenseLinks} mobile />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

const NavLink: React.FC<{ label: string, links: string[], mobile?: boolean }> = ({ label, links, mobile }) => (
  <div className={`relative group ${mobile ? 'block' : 'inline-block'}`}>
    <Link href="#">
      <span className={`block ${mobile ? 'px-3 py-2' : 'px-4 py-2'} text-sm font-medium cursor-pointer`}>
        {label}
      </span>
    </Link>
    <div
      className={`absolute left-0 mt-2 py-2 w-48 bg-white text-black rounded-lg shadow-lg z-40 ${
        mobile ? 'block' : 'hidden group-hover:block'
      }`}
    >
      {links.map((link, idx) => (
        <Link href="#" key={idx}>
          <span className="block px-4 py-2 text-sm hover:bg-gray-100">{link}</span>
        </Link>
      ))}
    </div>
  </div>
);

const vapingLinks = ['E-cigarettes', 'E-liquid', 'Mods', 'Herb Vaporizers', 'Concentrate Vaporizers', 'Coils', 'Tanks'];
const kratomLinks = ['All', 'Capsule', 'Powder', 'Liquid'];
const cannabisLinks = ['All', 'THC Pre-roll', 'CBD Pre-roll', 'THC Flower', 'CBD Flower'];
const cigarLinks = ['Cigars'];
const glasswareLinks = ['Bongs', 'Pipe Tools'];
const tobaccoLinks = ['Cigarettes', 'Cigars', 'Pipe Tobacco', 'Chewing Tobacco'];
const smokingAccessoriesLinks = ['Rolling Papers', 'Rolling Machines', 'Filters', 'Grinders', 'Ashtrays', 'Torch', 'Lighters', 'Butane', 'Pipe Cleaners'];
const hookahLinks = ['Hookahs', 'Hookah Flavor', 'Hookah Bowls', 'Hookah Hoses', 'Hookah Tongs'];
const incenseLinks = ['Stick Incense', 'Cone Incense', 'Loose Incense', 'Coil Incense'];
