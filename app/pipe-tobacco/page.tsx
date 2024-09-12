import React from 'react';

interface PipeTobacco {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
}

const pipeTobaccoList: PipeTobacco[] = [
  {
    id: 1,
    name: 'Captain Black Original',
    image: '/images/pipe1.png',
    description: 'Smooth and aromatic pipe tobacco with a rich vanilla flavor.',
    price: '$12.00',
  },
  {
    id: 2,
    name: 'Dunhill Early Morning',
    image: '/images/pipe2.png',
    description: 'Mild and light, perfect for a relaxed morning smoke.',
    price: '$14.50',
  },
  {
    id: 3,
    name: 'Peterson Irish Flake',
    image: '/images/pipe3.png',
    description: 'Full-bodied, dark tobacco for a robust smoking experience.',
    price: '$18.00',
  },
  {
    id: 4,
    name: 'Mac Baren Mixture',
    image: '/images/pipe4.png',
    description: 'Aromatic blend of Virginia and Burley tobacco for a smooth smoke.',
    price: '$16.00',
  },
  {
    id: 5,
    name: 'Lane Limited 1-Q',
    image: '/images/pipe5.png',
    description: 'Popular aromatic blend with a sweet, pleasant aroma.',
    price: '$10.50',
  },
  {
    id: 6,
    name: 'Samuel Gawith Full Virginia Flake',
    image: '/images/pipe6.png',
    description: 'Rich and deep Virginia tobacco for experienced smokers.',
    price: '$20.00',
  },
];

const PipeTobaccoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Pipe Tobacco Collection</h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {pipeTobaccoList.map((tobacco) => (
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

export default PipeTobaccoPage;
