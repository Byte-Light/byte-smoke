import React from 'react';

const TobaccoInfo: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-gray-800 text-white py-16 px-8 lg:px-36">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-10 text-center">
          Buy Cigars, Tobacco, and Cigarettes Online
        </h1>

        {/* Paragraphs */}
        <p className="text-lg lg:text-xl mb-6 leading-relaxed">
          Byte Smoke Tobacconist is a USA-based tobacco shop offering a wide range of 
          <a href="#" className="text-blue-300 underline hover:text-blue-400 transition-colors"> Pipes </a> 
          and pipe accessories. Discover our premium selection of cigars, including 
          <a href="#" className="text-blue-300 underline hover:text-blue-400 transition-colors"> Cuban Cigars </a> 
          and 
          <a href="#" className="text-blue-300 underline hover:text-blue-400 transition-colors"> New World Cigars </a> 
          from Nicaragua, through our 
          <a href="#" className="text-blue-300 underline hover:text-blue-400 transition-colors"> Cigar Finder. </a>
        </p>

        <p className="text-lg lg:text-xl mb-6 leading-relaxed">
          Cigarette smokers can 
          <a href="#" className="text-blue-300 underline hover:text-blue-400 transition-colors"> buy cigarettes online </a> 
          and enjoy fast, convenient delivery seven days a week. With no minimum purchase, get your favorite brands like L&B, Marlboro, and Vogue delivered straight to your door.
        </p>

        <p className="text-lg lg:text-xl mb-6 leading-relaxed">
          We also cater to hand-rolling tobacco enthusiasts with a variety of 
          <a href="#" className="text-blue-300 underline hover:text-blue-400 transition-colors"> RYO tobaccos, </a> 
          including the popular 
          <a href="#" className="text-blue-300 underline hover:text-blue-400 transition-colors"> Manitou organic tobacco. </a> 
          Explore our Pipe Tobacco Sample Packs, offering a wide range of flavors in 5g samples.
        </p>

        <p className="text-lg lg:text-xl mb-6 leading-relaxed">
          We dispatch orders six days a week and offer delivery via Royal Mail. Express delivery is available for just £1 when you spend £100 or more. With discreet packaging and a variety of delivery options, ordering from us is seamless and secure.
        </p>

        <p className="text-lg lg:text-xl mb-6 leading-relaxed">
          Visit us online, give us a call, or stop by our store. Find our 
          <a href="#" className="text-blue-300 underline hover:text-blue-400 transition-colors"> contact and location details here. </a>
        </p>
      </div>
    </div>
  );
};

export default TobaccoInfo;
