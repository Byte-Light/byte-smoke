import React from 'react';

const TobaccoInfo: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl lg:text-4xl font-bold mb-6">
          Buy Cigars, Tobacco and Cigarettes Online
        </h1>

        {/* Paragraphs */}
        <p className="text-gray-700 mb-4">
          Byte Smoke Tobacconist is a USA-based tobacco shop that sells the largest range of 
          <a href="#" className="text-blue-600 underline"> Pipes </a> 
          and pipe accessories. With a cigar range spanning hundreds of brands around the globe, including world-renowned 
          <a href="#" className="text-blue-600 underline"> Cuban Cigars </a> 
          and 
          <a href="#" className="text-blue-600 underline"> New World Cigars </a> 
          from Nicaragua, you’ll find the perfect smoke using our 
          <a href="#" className="text-blue-600 underline"> Cigar Finder. </a>
        </p>

        <p className="text-gray-700 mb-4">
          Cigarette smokers can 
          <a href="#" className="text-blue-600 underline"> buy cigarettes online </a> 
          and get their smokes delivered quickly, easily and conveniently, seven days a week using Royal Mail. With no minimum purchase amount, whether it’s a single pack or sleeve - we stock all the top brands, including L&B, Marlboro and Vogue.
        </p>

        <p className="text-gray-700 mb-4">
          Our tobacco customers are catered for, with a range of 
          <a href="#" className="text-blue-600 underline"> hand rolling tobaccos </a> 
          (RYO), including the increasingly popular 
          <a href="#" className="text-blue-600 underline"> Manitou organic tobacco. </a> 
          Pipe smokers love our Pipe Tobacco Sample Packs, offering a range of flavours in convenient 5g sample-sized packs.
        </p>

        <p className="text-gray-700 mb-4">
          We dispatch six days a week, Monday through Saturday and deliver seven days a week using Royal Mail. Delivery starts at just £1.79, or get express delivery for just £1 when you spend £100 or more. Orders are packed carefully and sent using discreet packaging. If you’re ordering regularly, check out our Unlimited Delivery pass, one small fee for unlimited free delivery all year.
        </p>

        <p className="text-gray-700">
          You can shop with us online, via phone, or visit us in-store. You can view our 
          <a href="#" className="text-blue-600 underline"> Contact and address information. </a>
        </p>
      </div>
    </div>
  );
};

export default TobaccoInfo;
