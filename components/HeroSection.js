import React from 'react';
import image from '../public/apply.png';
import Image from 'next/image';
import '../styles/global.css';
// import Link from 'next/link';

const AgencySection = () => {
  return (
    <section id='HeroSection' className="w-full lg:px-[80px] px-4 xl:px-[120px] py-[40px] bg-[#1A202C]">
      <div className='max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between'>
        
        {/* Text Section */}
        <div className="w-full lg:w-9/12 mb-10 md:mb-0 p-8 rounded-lg shadow-lg bg-gray-800">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dream Big. Achieve Bigger.
          </h1>
          <p className="text-gray-400 mb-8">
            Unlock Your Career Potential with Our Expert Job Application Service! Whether you&apos;re a fresh graduate or an experienced professional, we&apos;ve got the tools to land you a high paying job.
          </p>
          {/* Button */}
          <button className="relative inline-block px-8 py-4 rounded-md text-gray-800 font-bold bg-yellow-500 transition-all duration-300 hover:bg-yellow-600">
            Get Started
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          {/* <Image src={image} alt="Business person pointing" className="rounded-lg shadow-md" width={500} height={500} objectFit="cover" /> */}
        </div>
      </div>
    </section>
  );
};

export default AgencySection;
