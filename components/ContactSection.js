"use client"; // Ensure this line is at the top

// app/contact/page.js
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for react-toastify

export default function ContactSection() {
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Optionally, you can collect form data here if needed
    // const formData = new FormData(e.target);

    // You can add logic to handle form submission (like sending data to an API)

    // Show success notification
    toast.success("Your message has been sent successfully!", {
      position: "top-right", // Use string values for position
    });

    // Optionally, reset the form fields after submission
    e.target.reset();
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <ToastContainer /> {/* Add ToastContainer here to display toasts */}
      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* Introduction Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-yellow-500">Contact Us</h1>
          <p className="text-xl text-gray-300">
            Have any questions or feedback? We&apos;d love to hear from you! Fill out the form below or reach us through any of the provided contact details.
          </p>
        </section>

        {/* Form Section */}
        <section className="mb-16">
          <form 
            netlify 
            name="Contact Form" 
            className="grid grid-cols-1 gap-6" 
            method="POST"
            onSubmit={handleSubmit} // Ensure onSubmit is handled correctly
          >
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-yellow-500">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name" // Ensure this is included for Netlify forms
                className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm bg-gray-800 text-white placeholder-gray-400"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-yellow-500">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email" // Ensure this is included for Netlify forms
                className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm bg-gray-800 text-white placeholder-gray-400"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium text-yellow-500">
                Message
              </label>
              <textarea
                id="message"
                name="message" // Ensure this is included for Netlify forms
                rows="6"
                className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm bg-gray-800 text-white placeholder-gray-400"
                placeholder="Enter your message"
                required
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
