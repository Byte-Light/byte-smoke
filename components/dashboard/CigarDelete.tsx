import React from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";
import { db, storage } from "@/firebase"; // Ensure correct paths

interface CigarDeleteProps {
  cigarId: string;  // Document ID of the cigar in Firestore
  imageUrl: string; // Image URL in Firebase Storage
  onDeleteSuccess: () => void; // Callback to refresh the list
}

const CigarDelete: React.FC<CigarDeleteProps> = ({ cigarId, imageUrl, onDeleteSuccess }) => {
  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this cigar?")) return;

    try {
      // Delete cigar from Firestore
      await deleteDoc(doc(db, "cigars", cigarId));

      // Delete the associated image from Firebase Storage
      const imageRef = ref(storage, imageUrl);
      await deleteObject(imageRef);

      onDeleteSuccess(); // Trigger refresh after successful delete
      alert("Cigar deleted successfully!");
    } catch (error) {
      console.error("Error deleting cigar: ", error);
      alert("Failed to delete cigar. Please try again.");
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
      Delete
    </button>
  );
};

export default CigarDelete;
