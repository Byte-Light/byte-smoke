import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase"; // Adjust the import path as needed
import CigarDelete from "./CigarDelete"; // New delete component
import CigarEdit from "./CigarEdit"; // New edit component

interface CigarData {
  id: string; // Document ID from Firestore
  name: string;
  length: string;
  ringGauge: number;
  strength: string;
  smokingTime: string;
  price: string;
  rating: string;
  imageUrl: string;
}

const CigarList: React.FC = () => {
  const [cigars, setCigars] = useState<CigarData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [editingCigarId, setEditingCigarId] = useState<string | null>(null); // Track which cigar is being edited

  // Fetch cigars from Firebase
  const fetchCigars = async () => {
    setLoading(true);
    try {
      const cigarCollection = collection(db, "cigars");
      const cigarSnapshot = await getDocs(cigarCollection);
      const cigarList = cigarSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as CigarData[];
      setCigars(cigarList);
    } catch (error) {
      console.error("Error fetching cigars: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCigars();
  }, []);

  const handleEditSuccess = () => {
    setEditingCigarId(null); // Exit edit mode
    fetchCigars(); // Refresh the list after editing
  };

  const handleDeleteSuccess = () => {
    fetchCigars(); // Refresh the list after deleting
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading cigars...</p>;
  }

  if (cigars.length === 0) {
    return <p className="text-center text-gray-500">No cigars available.</p>;
  }

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h3 className="text-3xl font-semibold text-center mb-6">Cigar List</h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cigars.map((cigar) => (
          <li key={cigar.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            {editingCigarId === cigar.id ? (
              <CigarEdit
                cigarId={cigar.id}
                cigarData={cigar}
                onEditSuccess={handleEditSuccess}
              />
            ) : (
              <>
                <div className="relative h-48 w-full bg-gray-200">
                  <img
                    src={cigar.imageUrl}
                    alt={cigar.name}
                    className="absolute inset-0 object-cover w-full h-full rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{cigar.name}</h4>
                  <p className="text-sm text-gray-600"><strong>Length:</strong> {cigar.length}</p>
                  <p className="text-sm text-gray-600"><strong>Ring Gauge:</strong> {cigar.ringGauge}</p>
                  <p className="text-sm text-gray-600"><strong>Strength:</strong> {cigar.strength}</p>
                  <p className="text-sm text-gray-600"><strong>Smoking Time:</strong> {cigar.smokingTime}</p>
                  <p className="text-sm text-gray-600"><strong>Price:</strong> {cigar.price}</p>
                  <p className="text-sm text-gray-600"><strong>Rating:</strong> {cigar.rating}</p>
                  <div className="flex justify-between items-center mt-4">
                    <button
                      onClick={() => setEditingCigarId(cigar.id)}
                      className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 transition-colors"
                    >
                      Edit
                    </button>
                    <CigarDelete
                      cigarId={cigar.id}
                      imageUrl={cigar.imageUrl}
                      onDeleteSuccess={handleDeleteSuccess}
                    />
                  </div>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CigarList;
