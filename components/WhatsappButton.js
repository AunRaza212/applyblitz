"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import image from "../public/whatsapp.svg";
import "../styles/global.css";

export default function WhatsAppChat({ className, isSectionButton }) {
  const whatsappLink = "https://wa.me/+923342785830";
  const buttonRef = useRef(null);

 useEffect(() => {
  try {
    if (className === "whatsapp_button") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("pop-up-animation");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      if (buttonRef.current) {
        observer.observe(buttonRef.current);
      }

      return () => {
        if (buttonRef.current) {
          observer.unobserve(buttonRef.current);
        }
      };
    } else if (className === "whatsapp_float") {
      if (buttonRef.current) {
        buttonRef.current.classList.remove("pop-up-animation");
      }
    }
  } catch (err) {
    console.error("Error in WhatsAppChat effect:", err);
  }
}, [className]);


  return (
    <div>
      {/* WhatsApp Button */}
      <a
        aria-label="Chat on WhatsApp"
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className || "whatsapp_float"} ${
          isSectionButton ? "pop-up-animation-infinite" : "pop-up-animation-twice"
        }`}
        ref={buttonRef}
      >
        {/* <Image src={image} alt="WhatsApp" width={24} height={24} /> */}
        <span>Chat on WhatsApp</span>
      </a>
    </div>
  );
}
