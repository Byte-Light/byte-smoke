import React from 'react';

interface Category {
  name: string;
  icon: string;
}

const categories: Category[] = [
  { name: 'Cigars', icon: '/images/cigar.png' },
  { name: 'Cigarettes', icon: '/images/cigaret.png' },
  { name: 'RYO Tobacco', icon: '/images/ryo.png' },
  { name: 'Pipe Tobacco', icon: '/images/pipe.png' },
  { name: 'Pipes', icon: '/images/pipes.png' },
  { name: 'Accessories', icon: '/images/access.png' },
  { name: 'Vapes', icon: '/images/vapes.webp' },
];

const ProductCategories: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 mt-12">
      {categories.map((category) => (
        <div
          key={category.name}
          className="flex flex-col items-center space-y-3 transform transition-transform duration-300 hover:scale-105"
        >
          {/* Icon */}
          <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gray-100 p-4 rounded-full shadow-md transition-shadow duration-300 hover:shadow-xl">
            <img
              src={category.icon}
              alt={category.name}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Category Name */}
          <p className="text-center text-base md:text-lg lg:text-xl font-semibold text-gray-700 hover:text-indigo-600 transition-colors duration-300">
            {category.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductCategories;
