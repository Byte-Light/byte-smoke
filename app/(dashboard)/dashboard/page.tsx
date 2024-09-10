// app/(dashboard)/dashboard/page.tsx
import CigarForm from "@/components/dashboard/CigarForm";
import React from "react";

const Dashboard: React.FC = () => {
  const handleFormSuccess = () => {
    console.log("Cigar added successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-gray-700 p-6 flex items-center justify-center">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Add a New Cigar
        </h2>
        <CigarForm />
      </div>
    </div>
  );
};

export default Dashboard;
