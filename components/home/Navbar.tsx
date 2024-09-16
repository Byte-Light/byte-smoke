"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="hidden md:flex space-x-8 items-center">
            {/* Main Navigation Links */}
            <NavLink label="Vaping" links={vapingLinks} />
            <NavLink label="Kratom" links={kratomLinks} />
            <NavLink label="Cannabis" links={cannabisLinks} />
            <NavLink label="Cigar" links={cigarLinks} />
            <NavLink label="Glassware" links={glasswareLinks} />
            <NavLink label="Tobacco" links={tobaccoLinks} />
            <NavLink label="Accessories" links={smokingAccessoriesLinks} />
            <NavLink label="Hookah" links={hookahLinks} />
            <NavLink label="Incense" links={incenseLinks} />
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-purple-600">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            <NavLink label="Vaping" links={vapingLinks} mobile />
            <NavLink label="Kratom" links={kratomLinks} mobile />
            <NavLink label="Cannabis" links={cannabisLinks} mobile />
            <NavLink label="Cigar" links={cigarLinks} mobile />
            <NavLink label="Glassware" links={glasswareLinks} mobile />
            <NavLink label="Tobacco" links={tobaccoLinks} mobile />
            <NavLink label="Accessories" links={smokingAccessoriesLinks} mobile />
            <NavLink label="Hookah" links={hookahLinks} mobile />
            <NavLink label="Incense" links={incenseLinks} mobile />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

const NavLink: React.FC<{ label: string; links: { name: string; slug: string }[]; mobile?: boolean }> = ({
  label,
  links,
  mobile,
}) => (
  <div className={`relative group ${mobile ? "block" : "inline-block"}`}>
    <span
      className={`block ${
        mobile ? "px-3 py-2" : "px-4 py-2"
      } text-sm font-medium cursor-pointer hover:text-gray-200 transition-colors`}
    >
      {label}
    </span>
    <div
      className={`absolute left-0 top-full mt-0 py-2 w-48 bg-white text-black rounded-lg shadow-lg z-40 transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-100 ${
        mobile ? "block" : "hidden group-hover:block"
      }`}
    >
      {links.map((link, idx) => (
        <Link href={`/category/${link.slug}`} key={idx}>
          <span className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors rounded-lg">
            {link.name}
          </span>
        </Link>
      ))}
    </div>
  </div>
);


const vapingLinks = [
  { name: "E-cigarettes", slug: "e-cigarettes" },
  { name: "E-liquid", slug: "e-liquid" },
  { name: "Mods", slug: "mods" },
  { name: "Herb Vaporizers", slug: "herb-vaporizers" },
  { name: "Concentrate Vaporizers", slug: "concentrate-vaporizers" },
  { name: "Coils", slug: "coils" },
  { name: "Tanks", slug: "tanks" },
];

const kratomLinks = [
  { name: "All", slug: "all" },
  { name: "Capsule", slug: "capsule" },
  { name: "Powder", slug: "powder" },
  { name: "Liquid", slug: "liquid" },
];

const cannabisLinks = [
  { name: "THC Pre-roll", slug: "thc-pre-roll" },
  { name: "CBD Pre-roll", slug: "cbd-pre-roll" },
  { name: "THC Flower", slug: "thc-flower" },
  { name: "CBD Flower", slug: "cbd-flower" },
];

const cigarLinks = [{ name: "Cigars", slug: "cigars" }];
const glasswareLinks = [{ name: "Bongs", slug: "bongs" }, { name: "Pipe Tools", slug: "pipe-tools" }];
const tobaccoLinks = [
  { name: "Cigarettes", slug: "cigarettes" },
  { name: "Cigars", slug: "cigars" },
  { name: "Pipe Tobacco", slug: "pipe-tobacco" },
  { name: "Chewing Tobacco", slug: "chewing-tobacco" },
];
const smokingAccessoriesLinks = [
  { name: "Rolling Papers", slug: "rolling-papers" },
  { name: "Rolling Machines", slug: "rolling-machines" },
  { name: "Filters", slug: "filters" },
  { name: "Grinders", slug: "grinders" },
  { name: "Ashtrays", slug: "ashtrays" },
  { name: "Torch", slug: "torch" },
  { name: "Lighters", slug: "lighters" },
  { name: "Butane", slug: "butane" },
  { name: "Pipe Cleaners", slug: "pipe-cleaners" },
];
const hookahLinks = [
  { name: "Hookahs", slug: "hookahs" },
  { name: "Hookah Flavor", slug: "hookah-flavor" },
  { name: "Hookah Bowls", slug: "hookah-bowls" },
  { name: "Hookah Hoses", slug: "hookah-hoses" },
  { name: "Hookah Tongs", slug: "hookah-tongs" },
];
const incenseLinks = [
  { name: "Stick Incense", slug: "stick-incense" },
  { name: "Cone Incense", slug: "cone-incense" },
  { name: "Loose Incense", slug: "loose-incense" },
  { name: "Coil Incense", slug: "coil-incense" },
];
