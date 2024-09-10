"use client";
import React, { useState, useEffect } from "react";
import { collection, getDocs, query, limit, startAfter } from "firebase/firestore";
import { db } from "@/firebase"; // Adjust the path to your firebase config
import Image from "next/image";
import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";

interface ProductData {
  id: string;
  name: string;
  length: string;
  ringGauge: number;
  strength: string;
  smokingTime: string;
  price: string;
  rating: string;
  imageUrl: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot<DocumentData> | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchProducts = async (isInitialLoad: boolean) => {
    setLoading(true);
    try {
      let productQuery;

      if (isInitialLoad) {
        productQuery = query(collection(db, "cigars"), limit(4));
      } else {
        productQuery = query(
          collection(db, "cigars"),
          startAfter(lastDoc!),
          limit(4)
        );
      }

      const productSnapshot = await getDocs(productQuery);
      const productList = productSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as ProductData[];

      setProducts((prevProducts) =>
        isInitialLoad ? productList : [...prevProducts, ...productList]
      );
      setLastDoc(
        productSnapshot.docs.length > 0
          ? productSnapshot.docs[productSnapshot.docs.length - 1]
          : null
      );
    } catch (error) {
      console.error("Error fetching products: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(true);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-5xl font-bold text-center mb-10 text-gray-900">
        Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-5"
          >
            <div className="relative w-full h-64">
              <Image
                src={product.imageUrl}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-500 text-sm mt-1">
                {product.length} | Ring Gauge {product.ringGauge}
              </p>
              <p className="text-gray-500 text-sm">{product.strength}</p>
              <p className="text-gray-500 text-sm">{product.smokingTime}</p>
              <p className="mt-3 text-xl text-green-600 font-semibold">
                £{product.price}
              </p>
              <p className="text-gray-400 text-sm">
                {product.rating === "Rating Pending"
                  ? "Rating Pending"
                  : `Rated ${product.rating} / 100`}
              </p>
            </div>
            <button
              className="mt-5 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg w-full transition-colors duration-200"
            >
              Add to Basket
            </button>
          </div>
        ))}
      </div>

      {/* Pagination Button */}
      {lastDoc && (
        <div className="mt-8 text-center">
          <button
            onClick={() => fetchProducts(false)}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
