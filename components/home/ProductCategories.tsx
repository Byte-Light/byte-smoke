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

const ProductCategories: React.FC = () => {
  return (
    <nav className="flex flex-wrap justify-center items-center gap-6 md:gap-8 py-6 bg-white shadow-lg rounded-lg mt-6 px-4 md:px-12">
      {categories.map((category) => (
        <Link key={category.name} href={category.route}>
          <div className="flex flex-col items-center justify-center space-y-3 transition-transform duration-300 hover:scale-105 group cursor-pointer">
            {/* Icon */}
            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-blue-50 to-indigo-100 p-3 rounded-full shadow-md transition-shadow duration-300 hover:shadow-lg group-hover:from-blue-100 group-hover:to-indigo-200">
              <img
                src={category.icon}
                alt={category.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Category Name */}
            <p className="text-center text-sm md:text-base lg:text-lg font-semibold text-gray-600 group-hover:text-indigo-600 transition-colors duration-300">
              {category.name}
            </p>
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default ProductCategories;
