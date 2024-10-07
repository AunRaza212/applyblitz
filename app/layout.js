"use client";
import { useState } from "react";
import "./globals.css";
import Head from "next/head"; // Import Head from next/head
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <html lang="en">
      <Head>
        {/* Include Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Red+Hat+Text:ital,wght@0,300..700;1,300..700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <NavBar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
