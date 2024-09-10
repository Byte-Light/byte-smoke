// components/ProgressBar.tsx
"use client"
import React from "react";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return progress > 0 ? (
    <p className="text-center text-gray-500">Uploading Image: {progress}%</p>
  ) : null;
};

export default ProgressBar;
