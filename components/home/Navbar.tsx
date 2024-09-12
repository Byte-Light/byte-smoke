import React from 'react';
import Link from 'next/link'; // Import Link from Next.js

interface Category {
  name: string;
  icon: string;
  route: string;
}

const categories: Category[] = [
  { name: 'Cigars', icon: '/images/cigar.png', route: '/cigars' },
  { name: 'Cigarettes', icon: '/images/cigaret.png', route: '/cigarettes' },
  { name: 'RYO Tobacco', icon: '/images/ryo.png', route: '/ryo-tobacco' },
  { name: 'Pipe Tobacco', icon: '/images/pipe.png', route: '/pipe-tobacco' },
  { name: 'Pipes', icon: '/images/pipes.png', route: '/pipes' },
  { name: 'Accessories', icon: '/images/access.png', route: '/accessories' },
  { name: 'Vapes', icon: '/images/vapes.webp', route: '/vapes' },
];

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 shadow-lg py-5 px-10">
      {categories.map((category) => (
        <Link key={category.name} href={category.route}>
          <div className="flex items-center justify-center space-x-3 transition-transform duration-300 hover:scale-110 group cursor-pointer mx-4">
            {/* Icon */}
            <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-purple-50 to-indigo-100 p-3 rounded-full shadow-md transition-shadow duration-300 hover:shadow-xl group-hover:from-purple-100 group-hover:to-indigo-200">
              <img
                src={category.icon}
                alt={category.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Category Name */}
            <p className="text-sm md:text-base lg:text-lg font-semibold text-white group-hover:text-yellow-300 transition-colors duration-300">
              {category.name}
            </p>
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
