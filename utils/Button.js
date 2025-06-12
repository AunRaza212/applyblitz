"use client";
import React from "react";

const Button = ({
  type,
  text,
  bgColor,
  textColor,
  hoverColor,
  textHover,
  targetSectionId,
  otherclasses,
  onClick,
}) => {
  const handleClick = () => {
    if (targetSectionId) {
      // Scroll to the target section if provided
      const section = document.getElementById(targetSectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (onClick) {
      // Call the onClick handler if provided
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      type={type}
      className={`py-3 px-6 rounded-lg ${otherclasses} bg-${bgColor} transition-all duration-300 ease-in ${hoverColor} ${textHover} text-${textColor} font-semibold`}
    >
      {text}
    </button>
  );
};

export default Button;
