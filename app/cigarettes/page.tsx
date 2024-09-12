import React from 'react';

interface Cigarette {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
}

const cigarettes: Cigarette[] = [
  {
    id: 1,
    name: 'Marlboro Gold',
    image: '/images/cigarette1.png',
    description: 'A smooth and light cigarette with a well-balanced flavor.',
    price: '$8.50',
  },
  {
    id: 2,
    name: 'Camel Blue',
    image: '/images/cigarette2.png',
    description: 'Rich and satisfying smoke, crafted for balance and depth.',
    price: '$7.50',
  },
  {
    id: 3,
    name: 'Lucky Strike Red',
    image: '/images/cigarette3.png',
    description: 'Full-bodied, robust flavor with a signature boldness.',
    price: '$9.00',
  },
  {
    id: 4,
    name: 'Parliament Lights',
    image: '/images/cigarette4.png',
    description: 'Ultra-smooth and light, crafted for premium taste.',
    price: '$10.00',
  },
  {
    id: 5,
    name: 'Dunhill Fine Cut',
    image: '/images/cigarette5.png',
    description: 'Refined flavor with a premium blend of tobacco.',
    price: '$12.00',
  },
  {
    id: 6,
    name: 'Winston Classic',
    image: '/images/cigarette6.png',
    description: 'Rich, full-bodied tobacco flavor for a timeless experience.',
    price: '$9.50',
  },
];

const CigarettesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Cigarette Collection</h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cigarettes.map((cigarette) => (
            <div
              key={cigarette.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={cigarette.image}
                alt={cigarette.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-700">{cigarette.name}</h2>
                <p className="text-gray-600 mt-2 text-sm">{cigarette.description}</p>
                <p className="text-gray-800 font-bold mt-4">{cigarette.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CigarettesPage;
