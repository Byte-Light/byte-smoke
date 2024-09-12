import Image from 'next/image';

const ByteFamily = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-gray-100 py-16 px-6 lg:px-32 flex flex-col items-center">
      <div className="flex flex-col lg:flex-row items-center max-w-7xl w-full">
        {/* Left Image Section */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-start">
          <Image
            src="/images/bytes-family.jpg"
            alt="Byte Family"
            width={600}
            height={400}
            className="rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105 hover:shadow-3xl"
          />
        </div>

        {/* Right Content Section */}
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0 lg:ml-12">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Meet the Byte Family
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            We first opened our doors in our shop, Greens of Leeds, in the Headrow, proudly serving Yorkshire.
          </p>
          <p className="text-gray-600 text-lg mb-4">
            In 2010, we launched Byte Smoke, serving over 500,000 customers across the USA and stocking a wide range of pipes, cigarettes, cigars, and smoking accessories.
          </p>
          <p className="text-gray-600 text-lg mb-4">
            In 2021, we opened a brand-new showroom at our HQ in Otley, near Leeds, and in 2024, we doubled our showroom - featuring the USA’s largest walk-in cigar humidor.
          </p>
          <p className="text-gray-600 text-lg mb-8">
            We’re a family passionate about service; whether you order online, by phone, or pop in-store, we promise you’ll always receive a warm Yorkshire welcome. Check out our reviews; we’re rated 4.9 out of 5 on Trustpilot with over 25,000 reviews.
          </p>

          {/* Stats Section */}
          <div className="flex space-x-10 mb-8">
            <div className="text-center">
              <p className="text-4xl font-extrabold text-indigo-600">500k+</p>
              <p className="text-gray-500">Happy customers</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extrabold text-indigo-600">25k+</p>
              <p className="text-gray-500">5-star reviews</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extrabold text-indigo-600">35 Years</p>
              <p className="text-gray-500">Est. 1989</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center lg:text-left">
            <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-3 px-8 rounded-full font-bold hover:from-purple-600 hover:to-red-600 transition-all duration-300">
              Read our Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ByteFamily;
