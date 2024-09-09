import React from 'react';

const CigarSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 lg:py-16 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Image Section */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full h-64 lg:w-96 lg:h-auto rounded-lg overflow-hidden">
            <img
              src="/images/cigars-carousel.png" // Add your image path here
              alt="Cigars"
              className="object-cover h-full w-full"
            />
            {/* Optional overlay with buttons (for carousel control) */}
            <div className="absolute inset-0 flex items-center justify-center space-x-4">
              <button className="bg-white w-8 h-8 rounded-full opacity-50" />
              <button className="bg-white w-8 h-8 rounded-full opacity-50" />
            </div>
          </div>
        </div>

        {/* Right Text Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">
            Byte Smoke New World Cigars
          </h2>
          <p className="text-gray-700 mb-6">
            Four brand new elegant masterpieces originating from Estelí, Nicaragua that are perfect for the everyday smoke, rich in flavour, and created with master craftsmanship.
          </p>
          <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition">
            Discover the Range
          </button>
        </div>
      </div>
    </div>
  );
};

export default CigarSection;
