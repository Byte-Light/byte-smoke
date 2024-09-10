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
    <section className="max-w-7xl mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sectionItems.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden bg-gray-100 rounded-xl shadow-lg transform transition duration-500 hover:shadow-2xl"
          >
            {/* Background Image */}
            <img
              src={item.imageSrc}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
            />

            {/* Title Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 group-hover:bg-opacity-60"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h2 className="text-white text-4xl font-bold uppercase mb-6 tracking-wider">
                {item.title}
              </h2>
              <button className="px-5 py-2 bg-indigo-500 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-600 transition duration-300 transform hover:-translate-y-1">
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
