import React from "react";
import Image from "next/image";

const SubscribeTV: React.FC = () => {
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left side - Image with overlay text */}
      <div className="relative">
        <div className="relative">
          {/* You can replace this with your actual image using the Image component */}
          <Image
            src="/path-to-your-image.jpg" // Replace with actual image path
            alt="Will it Infuse?"
            className="rounded-lg shadow-md"
            width={800}
            height={500}
          />
          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col items-start justify-center p-6 space-y-3 text-white">
            <h2 className="text-4xl font-extrabold leading-tight">WILL IT INFUSE?</h2>
            <h3 className="text-2xl font-bold">The Ultimate Smoke-King Cigar!</h3>
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.752 11.168l-6.564 3.736A1 1 0 017 13.736V8.264a1 1 0 011.188-.993l6.564 3.736a1 1 0 010 1.732z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Subscribe Info */}
      <div className="flex flex-col justify-center space-y-6">
        <h2 className="text-4xl font-extrabold">Subscribe to Byte Smoke TV</h2>
        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
            <svg
              className="h-6 w-6 text-green-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <div>
              <h3 className="text-lg font-bold">Product Reviews</h3>
              <p className="text-gray-600">
                Don’t miss our weekly video reviews, reviewing the latest and
                exclusive cigars.
              </p>
            </div>
          </li>

          <li className="flex items-start space-x-3">
            <svg
              className="h-6 w-6 text-green-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <div>
              <h3 className="text-lg font-bold">How-To Guides</h3>
              <p className="text-gray-600">
                New to pipes, tubing, and cigars? Let us teach you the basics
                that’ll take you from amateur to aficionado.
              </p>
            </div>
          </li>

          <li className="flex items-start space-x-3">
            <svg
              className="h-6 w-6 text-green-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <div>
              <h3 className="text-lg font-bold">Behind the Scenes</h3>
              <p className="text-gray-600">
                Get the latest on what’s going on at some HQ, and a sneak
                preview of our upcoming projects!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubscribeTV;
