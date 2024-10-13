import React from "react";

const Button = ({ type, text, bgColor, textColor, hoverColor,textHover }) => {
  console.log(type,  "type");
  return (
    <button
      type={type}
      className={`py-3 px-6 rounded-lg w-fit h-fit bg-${bgColor} transition-all duration-300 ease-in ${hoverColor} ${textHover} text-${textColor} font-semibold`}
    >
      {text}
    </button>
  );
};

export default Button;
