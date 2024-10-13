'use client'

import React from "react";

const Button = ({ type, text, bgColor, textColor, hoverColor,textHover,targetSectionId }) => {
  console.log(type,  "type");

  // Function to scroll to the target section
  const handleClick = () => {
    const section = document.getElementById(targetSectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
    onClick={handleClick} // Handle the click event to scroll
      type={type}
      className={`py-3 px-6 rounded-lg w-fit h-fit bg-${bgColor} transition-all duration-300 ease-in ${hoverColor} ${textHover} text-${textColor} font-semibold`}
    >
      {text}
    </button>
  );
};

export default Button;
