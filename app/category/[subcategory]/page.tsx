"use client";
import ProductList from '@/components/dashboard/ProductList';
import { useParams } from 'next/navigation';

const SubCategoryPage = () => {
  const { subcategory } = useParams(); // Retrieves the dynamic route parameter

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-500 via-pink-500 to-red-500 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Category Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-white drop-shadow-md tracking-wide capitalize">
            {subcategory} Products
          </h1>
          <p className="mt-3 text-lg text-gray-100">
            Discover the best products under <span className="font-semibold">{subcategory}</span>
          </p>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Display Product List */}
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default SubCategoryPage;
