import React from 'react';

interface Vape {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
}

const vapes: Vape[] = [
  {
    id: 1,
    name: 'GeekVape Aegis X',
    image: '/images/vape1.png',
    description: 'Durable and powerful vape with a high wattage capacity.',
    price: '$85.00',
  },
  {
    id: 2,
    name: 'Voopoo Drag X Plus',
    image: '/images/vape2.png',
    description: 'Versatile and high-performance vape with adjustable settings.',
    price: '$75.00',
  },
  {
    id: 3,
    name: 'SMOK Nord 4',
    image: '/images/vape3.png',
    description: 'Compact and portable pod system with adjustable wattage.',
    price: '$45.00',
  },
  {
    id: 4,
    name: 'Vaporesso Luxe PM40',
    image: '/images/vape4.png',
    description: 'Sleek pod system with a powerful battery and adjustable airflow.',
    price: '$55.00',
  },
  {
    id: 5,
    name: 'Uwell Caliburn G',
    image: '/images/vape5.png',
    description: 'Reliable pod system with a smooth vaping experience and excellent flavor.',
    price: '$40.00',
  },
  {
    id: 6,
    name: 'Innokin Kroma-Z',
    image: '/images/vape6.png',
    description: 'Compact and stylish vape with a large capacity battery and adjustable settings.',
    price: '$65.00',
  },
];

const VapesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Vape Collection</h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {vapes.map((vape) => (
            <div
              key={vape.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={vape.image}
                alt={vape.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-700">{vape.name}</h2>
                <p className="text-gray-600 mt-2 text-sm">{vape.description}</p>
                <p className="text-gray-800 font-bold mt-4">{vape.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VapesPage;
