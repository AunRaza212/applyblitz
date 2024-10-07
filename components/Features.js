import React from 'react';
import { BsFillLightningFill, BsFillShieldFill, BsFillPeopleFill } from 'react-icons/bs';
import '../styles/global.css';

const Features = () => {
  return (
    <section id='Features' className="w-full py-20 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-yellow-500">Why Choose Us?</h2>
          <p className="text-lg text-gray-300">
            We provide top-notch services tailored to your professional needs. Here’s why we stand out.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className="p-8 cursor-pointer bg-gray-700 rounded-lg shadow-lg hover:bg-yellow-500 group transition-all duration-300">
            <BsFillLightningFill className="text-5xl mb-4 text-yellow-500 group-hover:text-white transition-colors duration-300" />
            <h3 className="text-2xl font-bold mb-4 group-hover:text-gray-800">Fast & Reliable</h3>
            <p className="text-gray-300 group-hover:text-gray-800 transition-colors duration-300">
              Our streamlined processes and expert team ensure that your applications are handled swiftly and efficiently.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-8 bg-gray-700 cursor-pointer rounded-lg shadow-lg hover:bg-yellow-500 group transition-all duration-300">
            <BsFillShieldFill className="text-5xl mb-4 text-yellow-500 group-hover:text-white transition-colors duration-300" />
            <h3 className="text-2xl font-bold mb-4 group-hover:text-gray-800">Secure & Confidential</h3>
            <p className="text-gray-300 group-hover:text-gray-800 transition-colors duration-300">
              We prioritize your privacy and maintain high standards of security throughout the entire process.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-8 bg-gray-700 cursor-pointer rounded-lg shadow-lg hover:bg-yellow-500 group transition-all duration-300">
            <BsFillPeopleFill className="text-5xl mb-4 text-yellow-500 group-hover:text-white transition-colors duration-300" />
            <h3 className="text-2xl font-bold mb-4 group-hover:text-gray-800">Personalized Support</h3>
            <p className="text-gray-300 group-hover:text-gray-800 transition-colors duration-300">
              We assign a dedicated professional to assist you throughout your job application journey.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Features;
