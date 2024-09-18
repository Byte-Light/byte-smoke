"use client";
import ProductList from '@/components/product/ProductList';
import { useParams } from 'next/navigation';

const SubCategoryPage = () => {
  const { subcategory } = useParams();

  // Ensure subcategory is a string, even if useParams returns an array
  const subcategoryString = Array.isArray(subcategory) ? subcategory[0] : subcategory;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-500 via-pink-500 to-red-500 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Category Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-white drop-shadow-md tracking-wide capitalize">
            {subcategoryString} Products
          </h1>
          <p className="mt-3 text-lg text-gray-100">
            Discover the best products under <span className="font-semibold">{subcategoryString}</span>
          </p>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Pass subcategory as a prop to ProductList */}
          <ProductList subcategory={subcategoryString} />
        </div>
      </div>
    </div>
  );
};

export default SubCategoryPage;
