import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
 

  return (
    <nav className="bg-[#1A202C] fixed top-0 left-0 w-full z-50">
      <div className="max-w-[1312px] mx-auto flex justify-between items-center p-4">
        <div className="text-yellow-400 text-2xl font-semibold uppercase">
          ApplyBlitz
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="relative z-20 flex flex-col items-center justify-center w-10 h-10"
          >
            {/* Hamburger Icon */}
            <div
              className={`w-8 h-0.5 bg-yellow-400 my-1 ${
                isOpen ? "hidden" : ""
              }`}
            ></div>
            <div
              className={`w-8 h-0.5 bg-yellow-400 my-1 ${
                isOpen ? "hidden" : ""
              }`}
            ></div>
            <div
              className={`w-8 h-0.5 bg-yellow-400 my-1 ${
                isOpen ? "hidden" : ""
              }`}
            ></div>
          </button>
        </div>
        <div className="hidden md:flex space-x-4">
          <a
            href="/"
            rel="noreferrer"
            className="text-white text-yellow-400s hover:text-yellow-400 transition duration-200"
          >
            Home
          </a>
          <a
            href="/about"
            rel="noreferrer"
            className="text-white hover:text-yellow-400 transition duration-200"
          >
            About
          </a>
          <a
            href='/contact'
            rel="noreferrer"
            className="text-white hover:text-yellow-400 transition duration-200"
          >
            Contact
          </a>
          {/* <a href="/checkout" target="_blank" rel="noreferrer"  className="text-white hover:text-yellow-400 transition duration-200">
            Checkout
          </a> */}
        </div>
      </div>
      {/* Mobile Menu */}
      <nav
        className={`fixed top-0 left-0 w-full h-full bg-[#1A202C] flex flex-col items-center justify-center transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-10`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white text-3xl z-20"
        >
          &times;
        </button>
        <a
          href="/"
          rel="noreferrer"
          className="text-white text-xl mb-4 hover:text-yellow-400"
          onClick={() => setIsOpen(false)}
        >
          Home
        </a>
        <a
          href="/about"
          rel="noreferrer"
          className="text-white text-xl mb-4 hover:text-yellow-400"
          onClick={() => setIsOpen(false)}
        >
          About
        </a>
        <a
          href="/contact"
          rel="noreferrer"
          className="text-white text-xl mb-4 hover:text-yellow-400"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </a>
        {/* <a href="/checkout" target="_blank" rel="noreferrer" className="text-white text-xl hover:text-yellow-400" onClick={() => setIsOpen(false)}>
          Checkout
        </a> */}
      </nav>
    </nav>
  );
};

export default NavBar;
