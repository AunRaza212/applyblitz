// import Hero from '../components/Hero';
import React from 'react';
import Packages from "../components/Packages";
import Features from "../components/Features";
// import About from '../components/About';
import AgencySection from "../components/HeroSection";
// import HowWeWork from '@/components/HowWeWork';
import "../styles/global.css";
import HowWeWork from "../components/HowWeWork";
import Testimonials from "../components/Testimonials";
// import PackageSection from "@/components/Packages";
export default function Home() {
  return (
    <>
      {/* <Hero /> */}

      <AgencySection />
      <Features />
      <Testimonials/>
      <Packages />
      <HowWeWork/>
      {/* <About /> */}
    </>
  );
}
