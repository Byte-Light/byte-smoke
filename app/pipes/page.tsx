import React from 'react';

interface Pipe {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
}

const pipes: Pipe[] = [
  {
    id: 1,
    name: 'Briar Pipe',
    image: '/images/pipe1.png',
    description: 'Classic briar pipe with a smooth finish and comfortable grip.',
    price: '$50.00',
  },
  {
    id: 2,
    name: 'Corncob Pipe',
    image: '/images/pipe2.png',
    description: 'Durable and affordable corncob pipe with a rustic look.',
    price: '$25.00',
  },
  {
    id: 3,
    name: 'Churchwarden Pipe',
    image: '/images/pipe3.png',
    description: 'Elegant churchwarden pipe with a long stem for a cooler smoke.',
    price: '$75.00',
  },
  {
    id: 4,
    name: 'Meerschaum Pipe',
    image: '/images/pipe4.png',
    description: 'Luxurious meerschaum pipe with intricate carvings and smooth smoke.',
    price: '$120.00',
  },
  {
    id: 5,
    name: 'Calabash Pipe',
    image: '/images/pipe5.png',
    description: 'Traditional calabash pipe with a large bowl for a full smoking experience.',
    price: '$65.00',
  },
  {
    id: 6,
    name: 'Freehand Pipe',
    image: '/images/pipe6.png',
    description: 'Artistic freehand pipe with a unique shape and design.',
    price: '$85.00',
  },
];

const PipesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Pipe Collection</h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {pipes.map((pipe) => (
            <div
              key={pipe.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={pipe.image}
                alt={pipe.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-700">{pipe.name}</h2>
                <p className="text-gray-600 mt-2 text-sm">{pipe.description}</p>
                <p className="text-gray-800 font-bold mt-4">{pipe.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PipesPage;
