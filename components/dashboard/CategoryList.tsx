"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { ref, deleteObject, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "@/firebase";
import { v4 as uuidv4 } from "uuid";

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
  const [formData, setFormData] = useState({
    name: "",
    subCategory: "",
    description: "",
    price: "",
    image: null as File | null,
    imageUrl: "",
  });

  const [progress, setProgress] = useState<number>(0);

  // Fetch products from Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id } as Product));
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        image: file,
      }));
    }
  };

  // Edit product handler
  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      subCategory: product.subCategory,
      description: product.description,
      price: product.price,
      image: null,
      imageUrl: product.imageUrl,
    });
  };

  // Update product in Firestore
  const handleUpdateProduct = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!editingProduct) return;

    try {
      let imageUrl = editingProduct.imageUrl;

      if (formData.image) {
        // If a new image is uploaded, delete the old image and upload the new one
        const oldImageRef = ref(storage, editingProduct.imageUrl);
        await deleteObject(oldImageRef);

        const imageName = `${uuidv4()}-${formData.image.name}`;
        const storageRef = ref(storage, `products/${imageName}`);
        const uploadTask = uploadBytesResumable(storageRef, formData.image);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress);
          },
          (error) => {
            console.error("Error uploading image:", error);
          },
          async () => {
            imageUrl = await getDownloadURL(uploadTask.snapshot.ref);

            const productDocRef = doc(db, "products", editingProduct.id);
            await updateDoc(productDocRef, {
              name: formData.name,
              subCategory: formData.subCategory,
              description: formData.description,
              price: formData.price,
              imageUrl,
            });

            alert("Item updated successfully!");
            setEditingProduct(null);
            setProgress(0);
            setFormData({
              name: "",
              subCategory: "",
              description: "",
              price: "",
              image: null,
              imageUrl: "",
            });

            // Fetch updated products
            const querySnapshot = await getDocs(collection(db, "products"));
            const productsData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id } as Product));
            setProducts(productsData);
          }
        );
      } else {
        const productDocRef = doc(db, "products", editingProduct.id);
        await updateDoc(productDocRef, {
          name: formData.name,
          subCategory: formData.subCategory,
          description: formData.description,
          price: formData.price,
        });

        alert("Item updated successfully!");
        setEditingProduct(null);
        setFormData({
          name: "",
          subCategory: "",
          description: "",
          price: "",
          image: null,
          imageUrl: "",
        });

        // Fetch updated products
        const querySnapshot = await getDocs(collection(db, "products"));
        const productsData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id } as Product));
        setProducts(productsData);
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  // Delete product handler
  const handleDeleteProduct = async (id: string, imageUrl: string) => {
    try {
      // Delete the image from Firebase Storage
      const imageRef = ref(storage, imageUrl);
      await deleteObject(imageRef);

      // Delete the product from Firestore
      await deleteDoc(doc(db, "products", id));

      alert("Product deleted successfully!");

      // Remove the product from the local state
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="space-y-6">
      {/* Edit Form */}
      {editingProduct && (
        <form onSubmit={handleUpdateProduct} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">Edit Item</h2>
          <input
            type="text"
            name="name"
            placeholder="Item Name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-300 rounded-lg"
            required
          />

          <input
            type="text"
            name="subCategory"
            placeholder="Subcategory"
            value={formData.subCategory}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-300 rounded-lg"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-300 rounded-lg"
            required
          />

          <input
            type="text"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-300 rounded-lg"
            required
          />

          <input
            type="file"
            onChange={handleImageChange}
            className="w-full p-4 border border-gray-300 rounded-lg"
          />

          <div className="w-full bg-gray-300 rounded-full h-4 mt-4">
            <div
              className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <button type="submit" className="w-full bg-green-500 text-white font-bold py-3 rounded-lg">
            Update Item
          </button>
        </form>
      )}

      {/* Product List */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">All Products</h2>
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p>{product.description}</p>
                <p>${product.price}</p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleEditProduct(product)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteProduct(product.id, product.imageUrl)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
