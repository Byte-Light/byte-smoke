import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import FormInput from "./FormInput"; // Reuse input components
import { db } from "@/firebase"; // Ensure correct paths

interface CigarEditProps {
  cigarId: string;  // Document ID of the cigar in Firestore
  cigarData: {
    name: string;
    length: string;
    ringGauge: number;
    strength: string;
    smokingTime: string;
    price: string;
    rating: string;
  };
  onEditSuccess: () => void; // Callback to refresh the list
}

const CigarEdit: React.FC<CigarEditProps> = ({ cigarId, cigarData, onEditSuccess }) => {
  const [editedCigarData, setEditedCigarData] = useState(cigarData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedCigarData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const cigarRef = doc(db, "cigars", cigarId);
      await updateDoc(cigarRef, editedCigarData);
      onEditSuccess(); // Trigger refresh after successful edit
      alert("Cigar updated successfully!");
    } catch (error) {
      console.error("Error updating cigar: ", error);
      alert("Failed to update cigar. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormInput
        name="name"
        type="text"
        placeholder="Cigar Name"
        value={editedCigarData.name}
        onChange={handleInputChange}
        required
      />
      <FormInput
        name="length"
        type="text"
        placeholder="Cigar Length"
        value={editedCigarData.length}
        onChange={handleInputChange}
        required
      />
      <FormInput
        name="ringGauge"
        type="number"
        placeholder="Ring Gauge"
        value={editedCigarData.ringGauge}
        onChange={handleInputChange}
        required
      />
      <FormInput
        name="strength"
        type="text"
        placeholder="Strength (e.g. Medium)"
        value={editedCigarData.strength}
        onChange={handleInputChange}
        required
      />
      <FormInput
        name="smokingTime"
        type="text"
        placeholder="Smoking Time (e.g. 60 - 90 Minutes)"
        value={editedCigarData.smokingTime}
        onChange={handleInputChange}
        required
      />
      <FormInput
        name="price"
        type="text"
        placeholder="Price (e.g. £14.50)"
        value={editedCigarData.price}
        onChange={handleInputChange}
        required
      />
      <FormInput
        name="rating"
        type="text"
        placeholder="Rating (e.g. Rated 86/100)"
        value={editedCigarData.rating}
        onChange={handleInputChange}
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors"
      >
        Save Changes
      </button>
    </form>
  );
};

export default CigarEdit;
