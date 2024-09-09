import React from 'react';

interface SectionItem {
  id: number;
  title: string;
  imageSrc: string;
  buttonText: string;
}

const sectionItems: SectionItem[] = [
  {
    id: 1,
    title: 'Cigars',
    imageSrc: '/images/lion.webp', // Update to the correct image path
    buttonText: 'Shop Cigars Now',
  },
  {
    id: 2,
    title: 'Pipes',
    imageSrc: '/images/rabbit.webp', // Update to the correct image path
    buttonText: 'Shop Pipes Now',
  },
  {
    id: 3,
    title: 'Cigarettes',
    imageSrc: '/images/dog.webp', // Update to the correct image path
    buttonText: 'Shop Cigarettes Now',
  },
];

const GridSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto py-10 px-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sectionItems.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden bg-gray-200 rounded-lg shadow-md"
          >
            {/* Background Image */}
            <img
              src={item.imageSrc}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105"
            />

            {/* Vertical Text */}
            <div className="absolute inset-y-0 left-0 flex items-center justify-center text-white transform -rotate-90 origin-bottom-left text-3xl font-bold uppercase">
              {item.title}
            </div>

            {/* Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="px-4 py-2 bg-white text-black font-semibold rounded-lg shadow-md opacity-90 hover:opacity-100 transition-opacity">
                {item.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GridSection;
