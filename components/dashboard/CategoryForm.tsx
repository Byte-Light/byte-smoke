import React, { useState, useEffect, useRef } from "react";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/firebase";
import { v4 as uuidv4 } from "uuid";

interface CategoryFormProps {
  category: string;
  subCategories: string[];
}

const CategoryForm: React.FC<CategoryFormProps> = ({ category, subCategories }) => {
  const [formData, setFormData] = useState({
    name: "",
    subCategory: subCategories[0], // Initial value from subCategories
    description: "",
    price: "",
    image: null as File | null,
  });

  const [progress, setProgress] = useState<number>(0);
  const fileInputRef = useRef<HTMLInputElement | null>(null); // Reference for the file input

  // Update subCategory when subCategories prop changes
  useEffect(() => {
    if (subCategories.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        subCategory: subCategories[0], // Set to the first subCategory when the category changes
      }));
    }
  }, [subCategories]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.image) {
      alert("Please upload an image.");
      return;
    }

    try {
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
          const imageUrl = await getDownloadURL(uploadTask.snapshot.ref);

          await addDoc(collection(db, "products"), {
            name: formData.name,
            subCategory: formData.subCategory,
            description: formData.description,
            price: formData.price,
            category,
            imageUrl,
          });

          alert(`${category} item added successfully!`);

          // Clear form and reset progress
          setFormData({
            name: "",
            subCategory: subCategories[0], // Reset to first subCategory of the selected category
            description: "",
            price: "",
            image: null,
          });
          setProgress(0);

          // Clear the file input
          if (fileInputRef.current) {
            fileInputRef.current.value = "";
          }
        }
      );
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 mt-6 bg-white p-8 rounded-lg shadow-lg"
    >
      <input
        type="text"
        name="name"
        placeholder="Item Name"
        value={formData.name}
        onChange={handleInputChange}
        className="w-full p-4 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring focus:ring-pink-200 transition duration-300"
        required
      />

      <select
        name="subCategory"
        value={formData.subCategory}
        onChange={handleInputChange}
        className="w-full p-4 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring focus:ring-pink-200 transition duration-300"
      >
        {subCategories.map((sub) => (
          <option key={sub} value={sub}>
            {sub}
          </option>
        ))}
      </select>

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleInputChange}
        className="w-full p-4 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring focus:ring-pink-200 transition duration-300"
        required
      />

      <input
        type="text"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleInputChange}
        className="w-full p-4 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring focus:ring-pink-200 transition duration-300"
        required
      />

      <input
        type="file"
        ref={fileInputRef} // Attach the ref to the file input
        onChange={handleImageChange}
        className="w-full p-4 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring focus:ring-pink-200 transition duration-300"
        required
      />

      <div className="w-full bg-gray-300 rounded-full h-4 mt-4">
        <div
          className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-3 rounded-lg transition-all duration-300"
      >
        Add {category} Item
      </button>
    </form>
  );
};

export default CategoryForm;
