// app/about/page.js
import React from 'react';
import '../styles/global.css';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-16 px-4">
      
      {/* About Us Section */}
      <section className="w-full max-w-3xl mb-16 text-center">
        <h1 className="text-4xl font-bold bg-blue-500 text-white py-2 px-6 inline-block">ABOUT US</h1>
      </section>

      {/* Who Are We Section */}
      <section className="w-full max-w-3xl mb-10">
        <h2 className="text-xl font-semibold bg-blue-500 text-white inline-block px-4 py-1 mb-4">
          WHO ARE WE?
        </h2>
        <p className="text-gray-800 leading-relaxed mb-4">
          Founded in 2020, LAMA is a high-street brand with a focus on combining functional, sustainable design with popular fashion for a diverse audience spanning different ages and lifestyles.
        </p>
        <p className="text-gray-800 leading-relaxed">
          The culture at LAMA is about simplicity, kindness, growth, and inclusivity. The customer is at the heart of the LAMA business model. We are committed to providing a comprehensive shopping experience that evolves with what our customers want more and better of.
        </p>
      </section>

      {/* Vision Section */}
      <section className="w-full max-w-3xl mb-10">
        <h2 className="text-xl font-semibold bg-blue-500 text-white inline-block px-4 py-1 mb-4">
          VISION
        </h2>
        <p className="text-gray-800 italic">
          We create simple lifestyle choices that let you <strong>tell your own stories.</strong>
        </p>
      </section>

      {/* Core Values Section */}
      <section className="w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">CORE VALUES</h2>
        <p className="text-gray-800 mb-4">
          LAMA is committed to expanding rapidly nationwide and evolving every season through:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>Inclusivity</li>
          <li>Collaboration</li>
          <li>Ownership</li>
          <li>Excellence</li>
          <li>Simplicity</li>
          <li>Integrity</li>
        </ul>
      </section>
      
    </div>
  );
}
