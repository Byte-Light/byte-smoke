import React from "react";
import Image from "next/image";

type Cigar = {
  id: number;
  name: string;
  length: string;
  ringGauge: number;
  strength: string;
  smokingTime: string;
  price: string;
  rating: string;
  image: string;
};

const cigars: Cigar[] = [
  {
    id: 1,
    name: "Quorum Churchill Maduro Cigar - Single",
    length: '7"',
    ringGauge: 48,
    strength: "Medium",
    smokingTime: "60 - 90 Minutes",
    price: "£14.50",
    rating: "Rating Pending",
    image: "/images/cigar-africa.jpeg", 
  },
  {
    id: 2,
    name: "Quorum Churchill Classic Cigar - Single",
    length: '7"',
    ringGauge: 48,
    strength: "Medium",
    smokingTime: "60 - 90 Minutes",
    price: "£19.50",
    rating: "Rating Pending",
    image: "/images/cigar-africa.jpeg", 
  },
  {
    id: 3,
    name: "La Invicta Honduran Tubos Churchill Cigar - Single",
    length: '6 ⅞"',
    ringGauge: 47,
    strength: "Mild",
    smokingTime: "60 - 90 Minutes",
    price: "£19.50",
    rating: "Rating Pending",
    image: "/images/cigar-africa.jpeg", 
  },
  {
    id: 4,
    name: "Davidoff Winston Churchill (Aristocrat) Churchill Cigars - Single",
    length: '6 ⅞"',
    ringGauge: 47,
    strength: "Medium",
    smokingTime: "60 - 90 Minutes",
    price: "£42.00",
    rating: "Rated 86 / 100",
    image: "/images/cigar-africa.jpeg", 
  },
];

const CigarSpotlight: React.FC = () => {
  return (
    <div className="container mx-auto p-8 bg-gradient-to-r from-blue-50 via-purple-50 to-gray-100 rounded-lg">
      <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-900">Cigar Spotlight</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cigars.map((cigar) => (
          <div
            key={cigar.id}
            className="relative bg-white bg-gradient-to-t from-gray-100 to-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 p-6"
          >
            <div className="relative w-full h-64 rounded-t-2xl overflow-hidden">
              <Image
                src={cigar.image}
                alt={cigar.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-2xl"
              />
            </div>
            <div className="mt-5 text-center">
              <h3 className="text-xl font-bold text-gray-800">{cigar.name}</h3>
              <p className="text-gray-500 text-sm mt-1">{cigar.length} | Ring Gauge {cigar.ringGauge}</p>
              <p className="text-gray-500 text-sm">{cigar.strength}</p>
              <p className="text-gray-500 text-sm">{cigar.smokingTime}</p>
              <p className="mt-3 text-2xl text-green-600 font-semibold">{cigar.price}</p>
              <p className="text-gray-400 text-sm">{cigar.rating}</p>
            </div>
            <button className="mt-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-full w-full transition-colors duration-300">
              Add to Basket
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CigarSpotlight;
