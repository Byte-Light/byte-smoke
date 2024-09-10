import React from 'react';

const CigarSection: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 lg:py-20 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Image Section */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full h-72 lg:w-96 lg:h-auto rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
            <img
              src="/images/cigar-section.webp" // Add your image path here
              alt="Cigars"
              className="object-cover h-full w-full"
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="flex flex-col justify-center lg:pl-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Byte Smoke New World Cigars
          </h2>
          <p className="text-gray-700 text-lg lg:text-xl mb-8">
            Four brand new elegant masterpieces originating from Estelí, Nicaragua that are perfect for the everyday smoke—rich in flavor and created with master craftsmanship.
          </p>
          <button className="bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition duration-300">
            Discover the Range
          </button>
        </div>
      </div>
    </div>
  );
};

export default CigarSection;
