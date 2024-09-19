import React, { useState } from "react";
import { updateDoc, doc, getDocs, collection } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import { db, storage } from "@/firebase";
import { v4 as uuidv4 } from "uuid";

interface EditProductFormProps {
  product: {
    id: string;
    name: string;
    subCategory: string;
    description: string;
    price: string;
    imageUrl: string;
  } | null;
  onClose: () => void;
  onUpdate: () => void;
}

const EditProductForm: React.FC<EditProductFormProps> = ({ product, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: product?.name || "",
    subCategory: product?.subCategory || "",
    description: product?.description || "",
    price: product?.price || "",
    image: null as File | null,
    imageUrl: product?.imageUrl || "",
  });
  const [progress, setProgress] = useState<number>(0);

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

  const handleUpdateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!product) return;

    try {
      let imageUrl = product.imageUrl;

      if (formData.image) {
        // Delete old image if a new one is uploaded
        const oldImageRef = ref(storage, product.imageUrl);
        await deleteObject(oldImageRef);

        // Upload new image
        const imageName = `${uuidv4()}-${formData.image.name}`;
        const storageRef = ref(storage, `products/${imageName}`);
        const uploadTask = uploadBytesResumable(storageRef, formData.image);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress);
          },
          (error) => console.error("Error uploading image:", error),
          async () => {
            imageUrl = await getDownloadURL(uploadTask.snapshot.ref);

            const productDocRef = doc(db, "products", product.id);
            await updateDoc(productDocRef, {
              name: formData.name,
              subCategory: formData.subCategory,
              description: formData.description,
              price: formData.price,
              imageUrl,
            });

            onUpdate();
          }
        );
      } else {
        // Update product without changing image
        const productDocRef = doc(db, "products", product.id);
        await updateDoc(productDocRef, {
          name: formData.name,
          subCategory: formData.subCategory,
          description: formData.description,
          price: formData.price,
        });

        onUpdate();
      }

      onClose();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return product ? (
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
      <input type="file" onChange={handleImageChange} className="w-full p-4 border border-gray-300 rounded-lg" />
      <div className="w-full bg-gray-300 rounded-full h-4 mt-4">
        <div className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full" style={{ width: `${progress}%` }} />
      </div>
      <button type="submit" className="w-full bg-green-500 text-white font-bold py-3 rounded-lg">
        Update Item
      </button>
    </form>
  ) : null;
};

export default EditProductForm;
