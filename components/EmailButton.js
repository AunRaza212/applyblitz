"use client";
import React from "react";
import '../styles/global.css';

export default function EmailButton({ className, email }) {
  return (
    <div>
      {/* Email Button */}
      <a
        aria-label="Send an Email"
        href={`mailto:${email}`}
        target="_blank" // Ensures the link opens in a new tab
        rel="noopener noreferrer" // Best practice for security
        className={`${className || "email_button"}`}
      >
        <span>Send an Email</span>
      </a>
    </div>
  );
}