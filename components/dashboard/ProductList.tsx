"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

interface Product {
  id: string;
  name: string;
  subCategory: string;
  description: string;
  price: string;
  imageUrl: string;
  category: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, "products");
        const productsSnapshot = await getDocs(productsCollection);
        const productsList = productsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Product[];

        setProducts(productsList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center text-white">Loading products...</div>;
  }

  if (!products.length) {
    return <div className="text-center text-white">No products available.</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 p-6">
      <h1 className="text-4xl font-extrabold text-white text-center mb-8">Products List</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-64 object-cover transition-opacity duration-300 hover:opacity-90"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800">{product.name}</h3>
              <p className="text-gray-500">{product.subCategory}</p>
              <p className="text-gray-600 mt-2 line-clamp-2">{product.description}</p>
              <p className="text-indigo-600 font-semibold text-xl mt-4">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
