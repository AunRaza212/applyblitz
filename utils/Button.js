import React from "react";

const Button = ({ type, text, bgColor, textColor }) => {
    console.log(type,'type')
  return (
    <button
      type={type}
      className={`py-3 px-6 rounded-lg w-fit h-full bg-${bgColor} text-${textColor} font-semibold`}
    >
      {text}
    </button>
  );
};

export default Button;
