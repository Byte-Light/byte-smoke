import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";
import { db, storage } from "@/firebase";
import ProductItem from "./ProductItem";
import EditProductForm from "./EditProductForm";

interface Product {
  id: string;
  name: string;
  subCategory: string;
  description: string;
  price: string;
  category: string;
  imageUrl: string;
}

const CategoryList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Fetch products from Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id } as Product));
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
  };

  const handleDeleteProduct = async (id: string, imageUrl: string) => {
    try {
      const imageRef = ref(storage, imageUrl);
      await deleteObject(imageRef);
      await deleteDoc(doc(db, "products", id));

      alert("Product deleted successfully!");
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleProductUpdate = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const productsData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id } as Product));
    setProducts(productsData);
  };

  return (
    <div className="space-y-6">
      {/* Edit Form */}
      {editingProduct && (
        <EditProductForm product={editingProduct} onClose={() => setEditingProduct(null)} onUpdate={handleProductUpdate} />
      )}

      {/* Product List */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">All Products</h2>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} onEdit={handleEditProduct} onDelete={handleDeleteProduct} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
