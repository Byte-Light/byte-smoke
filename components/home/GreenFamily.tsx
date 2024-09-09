import Image from 'next/image';

const GreenFamily = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 lg:px-32 flex flex-col items-center">
      <div className="flex flex-col lg:flex-row items-center max-w-7xl w-full">
        {/* Left Image Section */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-start">
          <Image
            src="/images/byte-family.jpg"  // Add your image in public folder
            alt="Byte Family"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content Section */}
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0 lg:ml-8">
          <h2 className="text-3xl font-bold mb-4">Meet the Byte Family</h2>
          <p className="text-gray-700 mb-4">
            We first opened our doors in our shop, Greens of Leeds, in the Headrow, proudly serving Yorkshire.
          </p>
          <p className="text-gray-700 mb-4">
            In 2010, we launched Byte Smoke, serving over 500,000 customers across the USA and stocking a huge range of pipes, cigarettes, cigars, and smoking accessories.
          </p>
          <p className="text-gray-700 mb-4">
            In 2021, we opened a brand new showroom at our HQ in Otley, near Leeds, and in 2024, we doubled our showroom - featuring the USA’s largest walk-in cigar humidor.
          </p>
          <p className="text-gray-700 mb-6">
            We’re a family passionate about service; whether you order online, by phone or pop in-store, we promise you’ll always receive a warm Yorkshire welcome. Check out our reviews; we’re rated 4.9 out of 5 on Trustpilot with over 25,000 reviews.
          </p>

          {/* Stats Section */}
          <div className="flex space-x-8 mb-6">
            <div className="text-center">
              <p className="text-2xl font-bold">500k+</p>
              <p className="text-gray-600">Happy customers</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">25k+</p>
              <p className="text-gray-600">5-star reviews</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">35 Years</p>
              <p className="text-gray-600">Est. 1989</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center lg:text-left">
            <button className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition duration-300">
              Read our Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenFamily;
