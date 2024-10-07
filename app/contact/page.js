// app/contact/page.js
import React from 'react';
export default function ContactPage() {
  return (
    <div className="bg-[#f9f9f9] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* Introduction Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-black">Contact Us</h1>
          <p className="text-xl text-gray-700">
            Have any questions or feedback? We&apos;d love to hear from you! Fill out the form below or reach us through any of the provided contact details.
          </p>
        </section>

        {/* Form Section */}
        <section className="mb-16">
          <form className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-800">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-800">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-800">
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your message"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Contact Information Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-black">Our Contact Information</h2>
          <p className="text-lg text-gray-700 mb-4">Feel free to reach us through the following contact details:</p>
          <div className="flex flex-col items-center space-y-4">
            <p className="text-lg text-gray-800">
              <strong>Email:</strong> contact@yourdomain.com
            </p>
            <p className="text-lg text-gray-800">
              <strong>Phone:</strong> +1 234 567 890
            </p>
            <p className="text-lg text-gray-800">
              <strong>Address:</strong> 123 Main Street, City, Country
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
