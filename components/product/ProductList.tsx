"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, where, limit, startAfter } from "firebase/firestore"; 
import { db } from "@/firebase";
import Checkout from "./Checkout";

interface Product {
  id: string;
  name: string;
  subCategory: string;
  description: string;
  price: string;
  imageUrl: string;
  category: string;
}

const PAGE_SIZE = 6; // Number of products to fetch per page

const ProductList: React.FC<{ subcategory: string }> = ({ subcategory }) => { 
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [lastDoc, setLastDoc] = useState<any>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const fetchProducts = async (nextPage = false) => {
    try {
      const productsCollection = collection(db, "products");

      // Use the subcategory directly without capitalizing it
      const productsQuery = nextPage
        ? query(
            productsCollection,
            where("subCategory", "==", subcategory), 
            orderBy("name"),
            startAfter(lastDoc),
            limit(PAGE_SIZE)
          )
        : query(
            productsCollection,
            where("subCategory", "==", subcategory), 
            orderBy("name"),
            limit(PAGE_SIZE)
          );

      const productsSnapshot = await getDocs(productsQuery);
      const productsList = productsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Product[];

      // Set last document from the query for pagination
      const lastVisible = productsSnapshot.docs[productsSnapshot.docs.length - 1];
      setLastDoc(lastVisible);

      // Append new products if paginating
      if (nextPage) {
        setProducts((prevProducts) => [...prevProducts, ...productsList]);
      } else {
        setProducts(productsList);
      }

      // If fewer products are returned than the page size, it means we have reached the end
      if (productsList.length < PAGE_SIZE) {
        setHasMore(false);
      }

      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [subcategory]);

  const loadMoreProducts = () => {
    if (!loading && hasMore) {
      setLoading(true);
      fetchProducts(true);
    }
  };

  const addToCheckout = (product: Product) => {
    setSelectedProducts((prevProducts) => [...prevProducts, product]);
  };

  if (loading && products.length === 0) {
    return <div className="text-center text-white">Loading products...</div>;
  }

  if (!products.length) {
    return <div className="text-center text-white">No products available in {subcategory}.</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 p-6">
      <h1 className="text-4xl font-extrabold text-white text-center mb-8">{subcategory} Products</h1>

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
              <button
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
                onClick={() => addToCheckout(product)}
              >
                Add to Checkout
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMoreProducts}
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all"
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}

      {/* Checkout Component */}
      <Checkout selectedProducts={selectedProducts} />
    </div>
  );
};

export default ProductList;
