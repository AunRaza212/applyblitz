'use client'
import React from 'react';
import Image from 'next/image';
import image from '../public/whatsapp.svg'
import '../styles/global.css'
export default function WhatsAppChat() {
  const whatsappLink = "https://wa.me/+923342785830";

  return (
    <div>
      {/* WhatsApp Floating Button */}
      <a aria-label="Chat on WhatsApp" href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp_float">
     
        <span>Chat on WhatsApp</span>
      </a>
    </div>
  );
}
