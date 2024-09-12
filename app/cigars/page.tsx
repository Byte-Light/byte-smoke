import React from 'react';

interface Cigar {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
}

const cigars: Cigar[] = [
  {
    id: 1,
    name: 'Montecristo No. 2',
    image: '/images/cigar1.png',
    description: 'A rich, complex cigar with a robust flavor.',
    price: '$25.00',
  },
  {
    id: 2,
    name: 'Cohiba Behike 52',
    image: '/images/cigar2.png',
    description: 'Premium cigar with a creamy texture and smooth smoke.',
    price: '$40.00',
  },
  {
    id: 3,
    name: 'Romeo y Julieta Churchill',
    image: '/images/cigar3.png',
    description: 'A well-balanced cigar with a medium-bodied profile.',
    price: '$30.00',
  },
  {
    id: 4,
    name: 'Partagas Serie D No. 4',
    image: '/images/cigar4.png',
    description: 'Bold and full-bodied, a cigar for the experienced smoker.',
    price: '$35.00',
  },
  {
    id: 5,
    name: 'H. Upmann Magnum 50',
    image: '/images/cigar5.png',
    description: 'Elegant and smooth, perfect for a relaxed smoke.',
    price: '$28.00',
  },
  {
    id: 6,
    name: 'Arturo Fuente Opus X',
    image: '/images/cigar6.png',
    description: 'A luxurious cigar with a deep and rich flavor.',
    price: '$45.00',
  },
];

const CigarsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Cigar Collection</h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cigars.map((cigar) => (
            <div
              key={cigar.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={cigar.image}
                alt={cigar.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-700">{cigar.name}</h2>
                <p className="text-gray-600 mt-2 text-sm">{cigar.description}</p>
                <p className="text-gray-800 font-bold mt-4">{cigar.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CigarsPage;
