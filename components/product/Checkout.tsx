"use client";
import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase"; // Import your Firebase Firestore configuration

interface Product {
  id: string;
  name: string;
  subCategory: string;
  description: string;
  price: string;
  imageUrl: string;
  category: string;
}

interface CheckoutProps {
  selectedProducts: Product[];
}

const Checkout: React.FC<CheckoutProps> = ({ selectedProducts }) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");

  const totalPrice = selectedProducts.reduce((acc, product) => acc + parseFloat(product.price), 0);

  const handleCheckout = async () => {
    // Simple phone number validation (you can customize this further)
    const phoneRegex = /^\d{10,15}$/; // Allows 10 to 15 digits
    if (!phoneRegex.test(phoneNumber)) {
      setPhoneError("Please enter a valid phone number.");
      return;
    }

    // Create the checkout data
    const checkoutData = {
      phoneNumber,
      totalPrice: totalPrice.toFixed(2),
      selectedProducts: selectedProducts.map((product) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        subCategory: product.subCategory,
      })),
      createdAt: new Date(),
    };

    try {
      // Add checkout data to Firestore
      const docRef = await addDoc(collection(db, "checkouts"), checkoutData);
      alert(`Checkout successful. Document ID: ${docRef.id}`);
    } catch (error) {
      console.error("Error adding checkout to Firestore:", error);
      alert("Failed to complete checkout.");
    }
  };

  if (selectedProducts.length === 0) {
    return <div className="text-white text-center mt-8">No products in the checkout.</div>;
  }

  return (
    <div className="mt-8 p-6 bg-gray-800 rounded-lg text-white">
      <h2 className="text-3xl font-bold mb-4">Checkout</h2>

      {selectedProducts.map((product) => (
        <div key={product.id} className="flex items-center justify-between border-b border-gray-600 py-4">
          <div>
            <h3 className="text-xl">{product.name}</h3>
            <p className="text-sm text-gray-400">{product.subCategory}</p>
          </div>
          <p className="text-lg">${product.price}</p>
        </div>
      ))}

      <div className="mt-6 text-2xl font-semibold">Total: ${totalPrice.toFixed(2)}</div>

      {/* Phone Number Input */}
      <div className="mt-6">
        <label htmlFor="phone" className="block text-lg font-medium mb-2">Phone Number</label>
        <input
          type="tel"
          id="phone"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
            setPhoneError(""); // Clear error when user starts typing
          }}
          placeholder="Enter your phone number"
          className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-indigo-500"
        />
        {phoneError && <p className="text-red-500 mt-2">{phoneError}</p>}
      </div>

      <button
        onClick={handleCheckout}
        className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Checkout;
