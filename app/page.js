// app/page.js

import React from "react";
import Packages from "../components/Packages";
import Features from "../components/Features";
import AgencySection from "../components/HeroSection";
import "../styles/global.css";
import HowWeWork from "../components/HowWeWork";
import Testimonials from "../components/Testimonials";

export const metadata = {
  title: "Expert Job Application Services | Dream Big Achieve Bigger",
  description:
    "Unlock your career potential with our expert job application services. From fresh graduates to professionals, we help you land high-paying jobs!",
  keywords:
    "job application service, career coaching, resume writing, job search assistance, professional development, interview preparation, high-paying jobs",
  robots: "index, follow",
};

export default function Home() {
  return (
    <>
      <AgencySection />
      <Features />
      <HowWeWork />
      <Packages />
      <Testimonials />
    </>
  );
}
