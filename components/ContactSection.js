"use client";

import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('form-name', 'Contact Form');
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    try {
      const response = await fetch('/api/forms', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      toast.success("Your message has been sent successfully!");
      e.target.reset(); // Reset the form fields
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("There was an error sending your message. Please try again.");
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-yellow-500">Contact Us</h1>
          <p className="text-xl text-gray-300">
            Have any questions or feedback? We&apos;d love to hear from you!
          </p>
        </section>

        <section className="mb-16">
          <form 
            name="Contact Form" 
            method="POST" 
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-yellow-500">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-md bg-gray-800 text-white placeholder-gray-400"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-yellow-500">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-md bg-gray-800 text-white placeholder-gray-400"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium text-yellow-500">Message</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-md bg-gray-800 text-white placeholder-gray-400"
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

        <ToastContainer />
      </div>
    </div>
  );
}
