"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/firebase"; // Import your Firebase configuration

interface CheckoutData {
  id: string;
  phoneNumber: string;
  totalPrice: string;
  selectedProducts: {
    id: string;
    name: string;
    price: string;
    subCategory: string;
  }[];
  createdAt: Date;
}

const FetchCheckouts: React.FC = () => {
  const [checkouts, setCheckouts] = useState<CheckoutData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCheckouts = async () => {
      try {
        const q = query(collection(db, "checkouts"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const fetchedCheckouts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as CheckoutData[];
        setCheckouts(fetchedCheckouts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching checkouts:", error);
        setLoading(false);
      }
    };

    fetchCheckouts();
  }, []);

  if (loading) {
    return <div className="text-center text-white">Loading checkout data...</div>;
  }

  if (!checkouts.length) {
    return <div className="text-center text-white">No checkouts available.</div>;
  }

  return (
    <div className="p-6 bg-gray-800 rounded-lg text-white">
      <h2 className="text-3xl font-bold mb-6">Checkout History</h2>

      {checkouts.map((checkout) => (
        <div key={checkout.id} className="mb-8 border-b border-gray-600 pb-4">
          <p className="mb-2">Phone Number: {checkout.phoneNumber}</p>
          <p className="mb-2">Total Price: ${checkout.totalPrice}</p>
          <div>
            <h3 className="text-xl font-semibold mb-2">Products:</h3>
            {checkout.selectedProducts.map((product) => (
              <div key={product.id} className="ml-4">
                <p>{product.name} - ${product.price}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-400">Checkout Date: {new Date(checkout.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default FetchCheckouts;
