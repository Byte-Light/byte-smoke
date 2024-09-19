"use client";
import CategoryForm from "@/components/dashboard/CategoryForm";
import CategoryList from "@/components/dashboard/CategoryList";
import FetchCheckouts from "@/components/dashboard/FetchCheckouts"; // Import the FetchCheckouts component
import { useState } from "react";

const categories = [
  { name: "Vaping", subCategories: ["e-cigarettes", "e-liquid", "mods", "herb-vaporizers", "concentrate-vaporizers", "coils", "tanks"] },
  { name: "Kratom", subCategories: ["capsule", "powder", "liquid"] },
  { name: "Cannabis", subCategories: ["thc-pre-roll", "cbd-pre-roll", "thc-flower", "cbd-flower"] },
  { name: "Cigar", subCategories: ["cigars"] },
  { name: "Glassware", subCategories: ["bongs", "pipe-tools"] },
  { name: "Tobacco Products", subCategories: ["cigarettes", "cigars", "pipe-tobacco", "chewing-tobacco"] },
  { name: "Smoking Accessories", subCategories: ["rolling-papers", "rolling-machines", "filters", "grinders", "ashtrays", "torch", "lighters", "butane", "pipe-cleaners"] },
  { name: "Hookah Supplies", subCategories: ["hookahs", "hookah-flavor", "hookah-bowls", "hookah-hoses", "hookah-tongs"] },
  { name: "Incense", subCategories: ["stick-incense", "cone-incense", "loose-incense", "coil-incense"] },
];

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setSelectedTab(index);
    setSelectedCategory(null); // Reset category when changing tabs
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar with Tabs */}
      <div className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <div>
          <button
            className={`w-full text-left px-4 py-2 mb-2 rounded ${selectedTab === 0 ? "bg-purple-700" : "hover:bg-gray-700"}`}
            onClick={() => handleTabClick(0)}
          >
            Add Product
          </button>
          <button
            className={`w-full text-left px-4 py-2 mb-2 rounded ${selectedTab === 1 ? "bg-purple-700" : "hover:bg-gray-700"}`}
            onClick={() => handleTabClick(1)}
          >
           Manage Products
          </button>
          <button
            className={`w-full text-left px-4 py-2 rounded ${selectedTab === 2 ? "bg-purple-700" : "hover:bg-gray-700"}`}
            onClick={() => handleTabClick(2)}
          >
            Checkout History
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow p-6 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        {selectedTab === 0 && (
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
        )}

        {selectedTab === 1 && (
          <div className="max-w-7xl mx-auto">
           <CategoryList />
          </div>
        )}

        {selectedTab === 2 && (
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8 text-center">Checkout History</h1>
            <FetchCheckouts />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
