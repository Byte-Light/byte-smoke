"use client";
import React, { useState } from "react";
import CigarForm from "@/components/dashboard/CigarForm";
import CigarList from "@/components/dashboard/CigarList";

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"form" | "list">("form");

  const handleFormSuccess = () => {
    setActiveTab("list");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 flex flex-col lg:flex-row">
      {/* Sidebar Navigation */}
      <div className="w-full lg:w-1/4 bg-white shadow-md rounded-lg p-6 mb-6 lg:mb-0">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 lg:mb-8">Cigar Dashboard</h1>
        <div className="space-y-4">
          <button
            className={`w-full text-left px-4 py-2 sm:py-3 text-base sm:text-lg font-medium rounded-lg transition-colors ${
              activeTab === "form"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-600 hover:bg-gray-400"
            }`}
            onClick={() => setActiveTab("form")}
          >
            Add Cigar
          </button>
          <button
            className={`w-full text-left px-4 py-2 sm:py-3 text-base sm:text-lg font-medium rounded-lg transition-colors ${
              activeTab === "list"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-600 hover:bg-gray-400"
            }`}
            onClick={() => setActiveTab("list")}
          >
            Cigar List
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-3/4 bg-white shadow-md rounded-lg p-6">
        {activeTab === "form" ? (
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Add a New Cigar</h2>
            <CigarForm />
          </div>
        ) : (
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Your Cigars</h2>
            <CigarList />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
