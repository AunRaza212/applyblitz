import React from 'react';
import { BsFillLightningFill } from 'react-icons/bs';

const Packages = () => {
  return (
    <section id='Packages' className="w-full lg:px-[80px] px-4 xl:px-[120px] py-[40px] bg-gray-800 text-white">
      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto text-center mb-12">
        {/* Main Heading */}
        <h2 className="text-4xl font-bold mb-4">Choose Your Package</h2>
        {/* Subheading */}
        <p className="text-lg text-gray-400">
          Select the plan that fits your career stage and goals. Whether you're a fresh graduate or an experienced professional, we have the right solution for you!
        </p>
      </div>

      {/* Package Cards Container */}
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
        
        {/* Premium Package */}
        <div className="flex-1 bg-gray-700 p-8 rounded-lg shadow-lg hover:bg-yellow-500 transition-all duration-300">
          <BsFillLightningFill className="text-5xl mb-4 text-yellow-500 group-hover:text-white transition-colors duration-300" />
          <h3 className="text-3xl font-bold mb-4">Premium Package</h3>
          <p className="text-gray-300 group-hover:text-gray-800 transition-colors duration-300 mb-6">
            Our premium package is designed for experienced professionals looking to make a significant career shift. Get customized job applications, one-on-one consultations, and more.
          </p>
          <button className="relative inline-block px-8 py-4 rounded-md text-gray-800 font-bold bg-yellow-500 transition-all duration-300 hover:bg-yellow-600">
            Get Started
          </button>
        </div>

        {/* Entry-Level Package */}
        <div className="flex-1 bg-gray-700 p-8 rounded-lg shadow-lg hover:bg-yellow-500 transition-all duration-300">
          <BsFillLightningFill className="text-5xl mb-4 text-yellow-500 group-hover:text-white transition-colors duration-300" />
          <h3 className="text-3xl font-bold mb-4">Entry-Level Package</h3>
          <p className="text-gray-300 group-hover:text-gray-800 transition-colors duration-300 mb-6">
            Perfect for recent graduates or those just starting in the industry. Get tailored job applications and guidance to launch your career.
          </p>
          <button className="relative inline-block px-8 py-4 rounded-md text-gray-800 font-bold bg-yellow-500 transition-all duration-300 hover:bg-yellow-600">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Packages;
