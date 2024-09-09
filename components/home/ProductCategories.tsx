import React from 'react';

interface Category {
  name: string;
  icon: string; // For simplicity, you can use URLs or paths to icons
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
    <div className="flex flex-wrap justify-center space-x-4 space-y-4 lg:space-x-8 mt-8">
      {categories.map((category) => (
        <div key={category.name} className="flex flex-col items-center space-y-2">
          <img
            src={category.icon}
            alt={category.name}
            className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
          />
          <p className="text-center text-sm md:text-base lg:text-lg font-semibold">
            {category.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductCategories;
