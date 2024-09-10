// components/ImageUploader.tsx
"use client"
import React from "react";

interface ImageUploaderProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onChange, required = false }) => {
  return (
    <input
      type="file"
      onChange={onChange}
      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      required={required}
    />
  );
};

export default ImageUploader;
