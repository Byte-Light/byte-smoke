"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase"; // Adjust the path as necessary

type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  category: string;
  subCategory: string;
};

const ProductSpotlight: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, "products");
        const productsSnapshot = await getDocs(productsCollection);
        const productsList = productsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Product[];

        // Shuffle the products to display them randomly
        const shuffledProducts = productsList.sort(() => 0.5 - Math.random());
        setProducts(shuffledProducts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p className="text-center text-white">Loading products...</p>;
  }

  if (products.length === 0) {
    return <p className="text-center text-white">No products found.</p>;
  }

  return (
    <div className="container mx-auto p-8 bg-gradient-to-r from-blue-50 via-purple-50 to-gray-100 rounded-lg">
      <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-900">Product Spotlight</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.slice(0, 4).map((product) => (
          <div
            key={product.id}
            className="relative bg-white bg-gradient-to-t from-gray-100 to-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 p-6"
          >
            <div className="relative w-full h-64 rounded-t-2xl overflow-hidden">
              <Image
                src={product.imageUrl}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-2xl"
              />
            </div>
            <div className="mt-5 text-center">
              <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
              <p className="text-gray-500 text-sm mt-1">{product.description}</p>
              <p className="mt-3 text-2xl text-green-600 font-semibold">{product.price}</p>
              <p className="text-gray-400 text-sm">{product.category}</p>
            </div>
            <button className="mt-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-full w-full transition-colors duration-300">
              Add to Basket
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSpotlight;
