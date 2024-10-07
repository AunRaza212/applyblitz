import React from 'react';
import Image from "next/image";

// app/about/page.js
export default function AboutPage() {
  return (
    <div className="bg-[#f9f9f9] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Introduction Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-black">About Us</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We are passionate about delivering exceptional services that make a
            difference. Our team works tirelessly to provide you with the best
            experience.
          </p>
        </section>

        {/* Our Story Section */}
        <section className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-4 text-black">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              Founded in [Year], our mission has always been to drive success
              and provide value for our clients. From humble beginnings, we have
              grown into a thriving team dedicated to innovation and
              professionalism.
            </p>
            <p className="text-lg text-gray-700">
              Our journey has been marked by trust, collaboration, and constant
              growth. We&apos;re proud of the milestones we&apos;ve achieved and excited
              about the future ahead.
            </p>
          </div>
          <div className="md:w-1/2 p-4">
            {/* <Image               src="/images/team.jpg"
              alt="A photo of our team"
              className="rounded-lg shadow-lg w-full object-cover"
            /> */}
          </div>
        </section>

        {/* Core Values Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 text-black">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Core Value Cards */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-black">Integrity</h3>
              <p className="text-gray-700">
                We believe in being honest and transparent with our clients,
                always delivering what we promise.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-black">Innovation</h3>
              <p className="text-gray-700">
                Our team continuously explores new ways to improve and innovate
                within our industry.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-black">Excellence</h3>
              <p className="text-gray-700">
                We strive for excellence in everything we do, aiming to exceed
                expectations at every step.
              </p>
            </div>
          </div>
        </section>

        {/* Get in Touch Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-black">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Feel free to reach out with any
            questions, or simply to learn more about what we offer.
          </p>
          <a
            href="/contact"
            target="_blank" rel="noreferrer"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700"
          >
            Contact Us
          </a>
        </section>
      </div>
    </div>
  );
}
