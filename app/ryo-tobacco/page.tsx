import React from 'react';

interface RyoTobacco {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
}

const ryoTobaccoList: RyoTobacco[] = [
  {
    id: 1,
    name: 'American Spirit Organic',
    image: '/images/ryo1.png',
    description: 'Organic rolling tobacco with a smooth, clean flavor.',
    price: '$15.00',
  },
  {
    id: 2,
    name: 'Drum Original',
    image: '/images/ryo2.png',
    description: 'A rich and robust blend, perfect for hand-rolling cigarettes.',
    price: '$10.00',
  },
  {
    id: 3,
    name: 'Golden Virginia',
    image: '/images/ryo3.png',
    description: 'High-quality, smooth RYO tobacco for a premium experience.',
    price: '$12.00',
  },
  {
    id: 4,
    name: 'Samson Blue',
    image: '/images/ryo4.png',
    description: 'A mild and satisfying blend, great for everyday use.',
    price: '$11.50',
  },
  {
    id: 5,
    name: 'Bali Shag',
    image: '/images/ryo5.png',
    description: 'A classic, rich tobacco with a strong and bold flavor.',
    price: '$9.50',
  },
  {
    id: 6,
    name: 'Amber Leaf',
    image: '/images/ryo6.png',
    description: 'A smooth, well-balanced blend of RYO tobacco.',
    price: '$13.00',
  },
];

const RyoTobaccoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">RYO Tobacco Collection</h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ryoTobaccoList.map((tobacco) => (
            <div
              key={tobacco.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={tobacco.image}
                alt={tobacco.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-700">{tobacco.name}</h2>
                <p className="text-gray-600 mt-2 text-sm">{tobacco.description}</p>
                <p className="text-gray-800 font-bold mt-4">{tobacco.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RyoTobaccoPage;
