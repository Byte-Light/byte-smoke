// components/FormInput.tsx
"use client"
import React from "react";

interface FormInputProps {
  name: string;
  type: string;
  value: string | number;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  type,
  value,
  placeholder,
  onChange,
  required = false,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      required={required}
    />
  );
};

export default FormInput;
