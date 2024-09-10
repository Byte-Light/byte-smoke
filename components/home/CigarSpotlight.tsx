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
    image: "/images/cigar-africa.jpeg", // Replace with actual image path
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
    image: "/images/cigar-africa.jpeg", // Replace with actual image path
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
    image: "/images/cigar-africa.jpeg", // Replace with actual image path
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
    image: "/images/cigar-africa.jpeg", // Replace with actual image path
  },
];

const CigarSpotlight: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-5xl font-bold text-center mb-10 text-gray-900">Cigar Spotlight</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {cigars.map((cigar) => (
          <div
            key={cigar.id}
            className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-5"
          >
            <div className="relative w-full h-64">
              <Image
                src={cigar.image}
                alt={cigar.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800">{cigar.name}</h3>
              <p className="text-gray-500 text-sm mt-1">{cigar.length} | Ring Gauge {cigar.ringGauge}</p>
              <p className="text-gray-500 text-sm">{cigar.strength}</p>
              <p className="text-gray-500 text-sm">{cigar.smokingTime}</p>
              <p className="mt-3 text-xl text-green-600 font-semibold">{cigar.price}</p>
              <p className="text-gray-400 text-sm">{cigar.rating}</p>
            </div>
            <button className="mt-5 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg w-full transition-colors duration-200">
              Add to Basket
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CigarSpotlight;
