"use client";
import CategoryForm from "@/components/dashboard/CategoryForm";
import { useState } from "react";

const categories = [
  { name: "Vaping", subCategories: ["E-cigarettes", "E-liquid", "Mods", "Herb Vaporizers", "Concentrate Vaporizers", "Coils", "Tanks"] },
  { name: "Kratom", subCategories: ["All", "Capsul", "Powder", "Liquid"] },
  { name: "Cannabis", subCategories: ["All", "THC Pre-roll", "CBD Pre-roll", "THC Flower", "CBD Flower"] },
  { name: "Cigar", subCategories: ["Cigars"] },
  { name: "Glassware", subCategories: ["Bongs", "Pipe Tools"] },
  { name: "Tobacco Products", subCategories: ["Cigarettes", "Cigars", "Pipe Tobacco", "Chewing Tobacco"] },
  { name: "Smoking Accessories", subCategories: ["Rolling Papers", "Rolling Machines", "Filters", "Grinders", "Ashtrays", "Torch", "Lighters", "Butane", "Pipe Cleaners"] },
  { name: "Hookah Supplies", subCategories: ["Hookahs", "Hookah Flavor", "Hookah Bowls", "Hookah Hoses", "Hookah Tongs"] },
  { name: "Incense", subCategories: ["Stick incense", "Cone incense", "Loose incense", "Coil incense"] },
];

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Manage Products</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`p-6 rounded-lg shadow-lg transform transition-all duration-300 ${
                selectedCategory === category.name ? "bg-purple-700 scale-105 text-white" : "bg-white hover:bg-purple-100 text-gray-700"
              } border border-gray-200 hover:shadow-xl`}
            >
              <h2 className="text-xl font-semibold">{category.name}</h2>
            </button>
          ))}
        </div>

        {selectedCategory && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-white">Add {selectedCategory} Item</h2>
            <CategoryForm
              category={selectedCategory}
              subCategories={categories.find((cat) => cat.name === selectedCategory)?.subCategories || []}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
