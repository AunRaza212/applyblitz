// components/Hero.js
import React from 'react';
import Link from 'next/link';
import '../styles/global.css'
export default function Hero() {
  return (
    <section className="bg-[#2F3061] text-white py-20 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4 font-redhat">Welcome to Your Website</h1>
        <p className="text-xl mb-6 font-redhat text-white">Your go-to place for amazing services. Let&apos;s get started!</p>
        <Link legacyBehavior href="/contact">
          <a target="_blank" rel="noreferrer" className="bg-white font-redhat text-blue-600 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gray-200">
            Contact Us
          </a>
        </Link>
      </div>
    </section>
  );
}
