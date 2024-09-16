"use client";
import React from "react";

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
  const totalPrice = selectedProducts.reduce((acc, product) => acc + parseFloat(product.price), 0);

  const handleCheckout = () => {
    alert("Proceeding to payment. Total: $" + totalPrice.toFixed(2));
    // Add your payment processing logic here
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
