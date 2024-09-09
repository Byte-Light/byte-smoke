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
    image: "/images/quorum_maduro.png", // Replace with actual image path
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
    image: "/images/quorum_classic.png",
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
    image: "/images/la_invicta.png",
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
    image: "/images/davidoff_winston.png",
  },
];

const CigarSpotlight: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-extrabold mb-6">Cigar Spotlight - Churchill Cigars</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cigars.map((cigar) => (
          <div key={cigar.id} className="border rounded-lg shadow-lg p-4">
            <Image
              src={cigar.image}
              alt={cigar.name}
              width={200}
              height={600}
              className="object-cover mx-auto"
            />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold">{cigar.name}</h3>
              <p className="text-gray-500 text-sm">{cigar.length} | {cigar.ringGauge}</p>
              <p className="text-gray-500 text-sm">{cigar.strength}</p>
              <p className="text-gray-500 text-sm">{cigar.smokingTime}</p>
              <p className="mt-2 text-green-600 font-bold">{cigar.price}</p>
              <p className="text-gray-600">{cigar.rating}</p>
            </div>
            <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded w-full">
              Add to Basket
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CigarSpotlight;
