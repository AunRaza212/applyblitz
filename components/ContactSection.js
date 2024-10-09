// app/contact/page.js
import React from 'react';

export default function ContactSection() {
  return (
    <div className="bg-gray-900 min-h-screen text-white"> {/* Updated background and text colors */}
      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* Introduction Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-yellow-500">Contact Us</h1> {/* Updated heading color */}
          <p className="text-xl text-gray-300">
            Have any questions or feedback? We&apos;d love to hear from you! Fill out the form below or reach us through any of the provided contact details.
          </p>
        </section>

        {/* Form Section */}
        <section className="mb-16">
          <form 
            netlify 
            name="Contact" 
            
            className="grid grid-cols-1 gap-6" 
            method="POST" 
          >
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-yellow-500"> {/* Updated label color */}
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name" // Added name attribute for identification
                className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm bg-gray-800 text-white placeholder-gray-400"
                placeholder="Enter your name"
                required // Optional: For client-side validation
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-yellow-500"> {/* Updated label color */}
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email" // Added name attribute for identification
                className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm bg-gray-800 text-white placeholder-gray-400"
                placeholder="Enter your email"
                required // Optional: For client-side validation
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium text-yellow-500"> {/* Updated label color */}
                Message
              </label>
              <textarea
                id="message"
                name="message" // Added name attribute for identification
                rows="6"
                className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm bg-gray-800 text-white placeholder-gray-400"
                placeholder="Enter your message"
                required // Optional: For client-side validation
              />
            </div>

            <button
              type="submit"
              className="bg-yellow-500 w-fit h-fit text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-yellow-600"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
