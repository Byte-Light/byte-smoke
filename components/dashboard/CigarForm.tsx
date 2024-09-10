// components/dashboard/CigarForm.tsx
"use client"
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { db, storage } from "@/firebase";
import FormInput from "./FormInput";
import ImageUploader from "./ImageUploader";
import ProgressBar from "./ProgressBar";


interface CigarFormProps {
  onSuccess: () => void;
}

interface CigarData {
  name: string;
  length: string;
  ringGauge: number;
  strength: string;
  smokingTime: string;
  price: string;
  rating: string;
  image: File | null;
}

const CigarForm: React.FC = () => {
    const [cigarData, setCigarData] = useState<CigarData>({
      name: "",
      length: "",
      ringGauge: 0,
      strength: "",
      smokingTime: "",
      price: "",
      rating: "",
      image: null,
    });
  
    const [progress, setProgress] = useState<number>(0);
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setCigarData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];  // Use optional chaining and access the first file
        if (file) {
          setCigarData((prevData) => ({
            ...prevData,
            image: file,
          }));
        } else {
          console.warn("No file selected");
        }
      };
      
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      if (!cigarData.image) {
        alert("Please upload an image.");
        return;
      }
  
      try {
        const imageName = `${uuidv4()}-${cigarData.image.name}`;
        const storageRef = ref(storage, `cigars/${imageName}`);
        const uploadTask = uploadBytesResumable(storageRef, cigarData.image);
  
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
  
            await addDoc(collection(db, "cigars"), {
              name: cigarData.name,
              length: cigarData.length,
              ringGauge: cigarData.ringGauge,
              strength: cigarData.strength,
              smokingTime: cigarData.smokingTime,
              price: cigarData.price,
              rating: cigarData.rating,
              imageUrl,
            });
  
            // Reset form
            setCigarData({
              name: "",
              length: "",
              ringGauge: 0,
              strength: "",
              smokingTime: "",
              price: "",
              rating: "",
              image: null,
            });
            setProgress(0);
            alert("Cigar added successfully!");
          }
        );
      } catch (error) {
        console.error("Error adding cigar:", error);
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          name="name"
          type="text"
          placeholder="Cigar Name"
          value={cigarData.name}
          onChange={handleInputChange}
          required
        />
        <FormInput
          name="length"
          type="text"
          placeholder="Cigar length"
          value={cigarData.length}
          onChange={handleInputChange}
          required
        />
        <FormInput
          name="ringGauge"
          type="number"
          placeholder="Ring Gauge"
          value={cigarData.ringGauge}
          onChange={handleInputChange}
          required
        />
        <FormInput
          name="strength"
          type="text"
          placeholder="Cigar Strength (e.g. Medium)"
          value={cigarData.strength}
          onChange={handleInputChange}
          required
        />
        <FormInput
          name="smokingTime"
          type="text"
          placeholder="Smoking Time (e.g. 60 - 90 Minutes)"
          value={cigarData.smokingTime}
          onChange={handleInputChange}
          required
        />
        <FormInput
          name="price"
          type="text"
          placeholder="Price (e.g. £14.50)"
          value={cigarData.price}
          onChange={handleInputChange}
          required
        />
        <FormInput
          name="rating"
          type="text"
          placeholder="Rating (e.g. Rated 86/100)"
          value={cigarData.rating}
          onChange={handleInputChange}
          required
        />
        <ImageUploader onChange={handleImageChange} required />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors"
        >
          Add Cigar
        </button>
        <ProgressBar progress={progress} />
      </form>
    );
  };
  
  export default CigarForm;
  