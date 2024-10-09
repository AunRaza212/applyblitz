import React from 'react';
import '../styles/global.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';

export default function HowWeWork() {
  return (
    <section id='HowWeWork' className="py-20 bg-[#1A202C] text-center">
      <div className="max-w-6xl mx-auto px-4 text-gray-300">
        {/* Main Heading */}
        <h2 className="text-4xl font-bold mb-6 text-white uppercase tracking-wide">
        How We Get You Hired
        </h2>
        <p className="text-lg mb-12 font-medium text-gray-400">
          Our three-step process guarantees the best results for your career journey.
        </p>

        {/* Steps Section */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Step 1 */}
          <div className="group relative bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500">
            <BsFillCheckCircleFill className="text-4xl text-yellow-500 absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 p-2 rounded-full" />
            <h3 className="text-2xl font-bold mb-4 text-white">
              Gather Your Information
            </h3>
            <p className="text-gray-300">
              Share your career details. We build a profile that captures your strengths.
            </p>
          </div>

          {/* Step 2 */}
          <div className="group relative bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500">
            <BsFillCheckCircleFill className="text-4xl text-yellow-500 absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 p-2 rounded-full" />
            <h3 className="text-2xl font-bold mb-4 text-white">
              Create a New Email
            </h3>
            <p className="text-gray-300">
              We set up a dedicated email for your applications, keeping everything organized.
            </p>
          </div>

          {/* Step 3 */}
          <div className="group relative bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500">
            <BsFillCheckCircleFill className="text-4xl text-yellow-500 absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 p-2 rounded-full" />
            <h3 className="text-2xl font-bold mb-4 text-white">
              Apply to 500 Jobs!
            </h3>
            <p className="text-gray-300">
              We apply to 500+ jobs monthly, maximizing your chances to land the perfect role.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
