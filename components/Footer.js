import React from "react";

const Footer = () => {
  return (
<footer className="bg-[#1A202C] text-gray-400 py-12">
  <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Company Info Section */}
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">ApplyBlitz</h2>
      <p className="mb-4">
        Empowering you with tailored services for professional growth and opportunities.
      </p>
      <p className="mb-2">
        <strong>Email:</strong> support@applyblitz.com
      </p>
      <p>
        <strong>Phone:</strong> +1 (234) 567-8901
      </p>
    </div>

    {/* Navigation Links */}
    <div>
      <ul className="space-y-2">
        <li>
          <a href="#home" className="hover:text-yellow-400 transition-colors duration-300">
            Home
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-yellow-400 transition-colors duration-300">
            Services
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-yellow-400 transition-colors duration-300">
            About Us
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-yellow-400 transition-colors duration-300">
            Contact
          </a>
        </li>
      </ul>
    </div>

    {/* Social Media & Call to Action */}
    <div>
      <h2 className="text-xl text-white font-semibold mb-4">Ready to take your career to the next level?</h2>
      <button className="bg-yellow-400 text-gray-800 py-2 px-4 rounded-md font-semibold hover:bg-yellow-500 transition duration-300">
        Get Started
      </button>
      <div className="flex space-x-4 mt-6">
        <a href="https://facebook.com" target="_blank" className="text-white hover:text-yellow-400">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" className="text-white hover:text-yellow-400">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" className="text-white hover:text-yellow-400">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;
