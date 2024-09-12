import React from 'react';

interface Accessory {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
}

const accessories: Accessory[] = [
  {
    id: 1,
    name: 'Tobacco Pouch',
    image: '/images/accessory1.png',
    description: 'Stylish and durable tobacco pouch with a secure closure.',
    price: '$18.00',
  },
  {
    id: 2,
    name: 'Pipe Stand',
    image: '/images/accessory2.png',
    description: 'Elegant pipe stand to display and store your favorite pipes.',
    price: '$22.00',
  },
  {
    id: 3,
    name: 'Lighter',
    image: '/images/accessory3.png',
    description: 'High-quality lighter with a sleek design and reliable ignition.',
    price: '$12.00',
  },
  {
    id: 4,
    name: 'Ashtray',
    image: '/images/accessory4.png',
    description: 'Stylish ashtray with a non-slip base and ample space.',
    price: '$15.00',
  },
  {
    id: 5,
    name: 'Pipe Cleaners',
    image: '/images/accessory5.png',
    description: 'Pack of pipe cleaners for maintaining your pipe in top condition.',
    price: '$8.00',
  },
  {
    id: 6,
    name: 'Tamper Tool',
    image: '/images/accessory6.png',
    description: 'Essential tool for tamping tobacco and maintaining your pipe.',
    price: '$10.00',
  },
];

const AccessoriesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Accessories Collection</h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {accessories.map((accessory) => (
            <div
              key={accessory.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={accessory.image}
                alt={accessory.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-700">{accessory.name}</h2>
                <p className="text-gray-600 mt-2 text-sm">{accessory.description}</p>
                <p className="text-gray-800 font-bold mt-4">{accessory.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccessoriesPage;
