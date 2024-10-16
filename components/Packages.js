'use client'
import Button from "../utils/Button";
import React from "react";

const Packages = () => {
  return (
    <section
      id="Packages"
      className="w-full px-4 lg:px-[80px] xl:px-[120px] py-[60px] bg-gray-800 text-white"
    >
      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto text-center mb-16">
        {/* Main Heading */}
        <h2 className="text-4xl font-bold  mb-6 text-yellow-500">Choose Your Package</h2>
        {/* Subheading */}
        <p className="text-lg text-gray-400">
          Select the plan that fits your career stage and goals. Whether
          you&apos;re a fresh graduate or an experienced professional, we have
          the right solution for you!
        </p>
      </div>

      {/* Package Cards Container */}
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-center items-center gap-12">
        {/* Entry-Level Package */}
        <div className="relative flex-1 lg:w-[300px] w-full bg-gray-700 p-10 cursor-pointer rounded-lg shadow-lg group transition-all duration-300 text-center flex flex-col items-center justify-center  h-[500px]">
          {/* Background Opacity on Hover */}
          <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-lg"></div>

          {/* Content */}
          <span className="text-6xl mb-4 relative z-10">🎓</span>
          <h3 className="text-3xl font-bold mb-2 relative z-10">Entry-Level Package</h3>
          <p className="text-3xl font-semibold mb-2 text-yellow-400 relative z-10">$49.99</p>
          <p className="text-md text-gray-300 mb-4 relative z-10">Monthly Package</p>
          <p className="text-white mb-6 relative z-10">
            Perfect for recent graduates or those just starting in the industry. Get tailored job
            applications and guidance to launch your career.
          </p>

          {/* Button for Checkout */}
          <div className="relative z-10">
            <Button
            otherclasses={'w-fit h-fit'}
              text={"Get Started"}
              bgColor={"yellow-500"}
              textHover={"group-hover:text-white"}
              hoverColor={"group-hover:bg-gray-700"}
              textColor={"gray-800"}
              onClick={() =>
                (window.location.href = "/checkout?package=entry-level")
              } // Redirect to checkout
            />
          </div>
        </div>

        {/* Premium Package */}
        <div className="relative flex-1 lg:w-[300px] w-full bg-gray-700 p-10 cursor-pointer rounded-lg shadow-lg group transition-all duration-300 text-center flex flex-col items-center justify-center h-[500px]">
          {/* Background Opacity on Hover */}
          <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-lg"></div>

          {/* Content */}
          <span className="text-6xl mb-4 relative z-10">💼</span>
          <h3 className="text-3xl font-bold mb-2 relative z-10">Premium Package</h3>
          <p className="text-3xl font-semibold mb-2 text-yellow-400 relative z-10">$149.99</p>
          <p className="text-md text-gray-300 mb-4 relative z-10">Monthly Package</p>
          <p className="text-white mb-6 relative z-10">
            Our premium package is designed for experienced professionals looking to make a significant career shift. Get customized job applications, one-on-one consultations, and more.
          </p>

          {/* Button for Checkout */}
          <div className="relative z-10">
            <Button
            otherclasses={'w-fit h-fit'}
              text={"Get Started"}
              bgColor={"yellow-500"}
              hoverColor={"group-hover:bg-gray-700"}
              textColor={"gray-800"}
              textHover={"group-hover:text-white"}
              onClick={() => (window.location.href = "/checkout?package=premium")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
