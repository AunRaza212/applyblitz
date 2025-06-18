"use client";
import Button from "../utils/Button";
import React from "react";
import ContactSection from "./ContactSection";

const Footer = () => {
  return (
    <footer className="bg-[#1A202C] text-gray-400 py-12">
      <ContactSection />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center space-y-8">
        {/* Company Info Section */}
        <div className="[&>p]:text-white">
          <h2 className="text-3xl font-semibold font-mont mb-4 uppercase text-yellow-500">ApplyBlitz</h2>
          <p className="mb-4">
            Empowering you with tailored services for professional growth and
            opportunities.
          </p>
          <p>
            <strong>Email:</strong> support@applyblitz.com
          </p>
          <p>
            <strong>Phone:</strong> +92 3342785830
          </p>
        </div>

        {/* Navigation Links */}
        {/* <div>
          <ul className="flex justify-center space-x-8 text-lg">
            <li>
              <a
                href="#home"
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div> */}

        {/* Call to Action & Social Media */}
        {/* <div>
          <h2 className="text-2xl text-white font-semibold mb-4">
            Ready to take your career to the next level?
          </h2>
          <Button
            text={"Get Started"}
            textColor={"gray-800"}
            bgColor={"yellow-400"}
          />
        </div> */}

        {/* Social Media Icons ,put in social media icons instead of home services etc*/}
        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-yellow-400 text-xl"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-yellow-400 text-xl"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-yellow-400 text-xl"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
