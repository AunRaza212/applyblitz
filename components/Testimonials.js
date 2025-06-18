'use client';

import React from 'react';
import Slider from 'react-slick'; // Ensure react-slick and slick-carousel are installed
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';





const Testimonials = () => {
  // Slick Slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 testimonials at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // Medium devices
        settings: {
          slidesToShow: 2, // Show 2 testimonials
        },
      },
      {
        breakpoint: 640, // Small devices
        settings: {
          slidesToShow: 1, // Show 1 testimonial
        },
      },
    ],
  };

  const testimonials = [
    {
      text: "This service transformed my job application process. I landed a fantastic role thanks to their help!",
      name: "Qazi Zohaib Ali",
      role: "Full Stack Developer",
      image: '/images/Zohaib.png',
      linkedin: 'https://www.linkedin.com/in/qazi-zohaib-ali-799824245/',
    },
    {
      text: "Incredibly friendly, professional, and effective team. They helped me land interviews and get hired—highly recommended!",
      name: "Ronald Mosness",
      role: "Data Analyst",
      image: '/images/Ron.png',
      linkedin: 'https://www.linkedin.com/in/ronaldmosness/',
    },
    {
      text: "Amazing support and attention to detail. They really helped me stand out in my applications.",
      name: "Moajiz Rizvi",
      role: "Embedded Software Engineer",
      image: "/images/Moajiz.png",
      linkedin: 'https://www.linkedin.com/in/syedalimoajizrizvi/',
    },
    {
      text: "The guidance I received was invaluable. Their team helped me tailor my applications perfectly.",
      name: "Ann lu",
      role: "Data Analust",
      image: "/images/Anullu.png",
      linkedin: 'https://www.linkedin.com/in/alice-green/',
    },
    {
      text: "Fantastic experience! I got multiple interviews thanks to their service.",
      name: "Luisa Wicht",
      role: "Teaching Associate",
      image: "/images/luisa.png",
      linkedin: 'https://www.linkedin.com/in/luisa-wicht-9773b2167/',
    },
    {
      text: "The team was very supportive and provided great insights into the hiring process.",
      name: "Grace Ho",
      role: "Business Analyst",
      image: "/images/grace.png",
      linkedin: 'https://www.linkedin.com/in/grace-ho-343806141/',
    },

  ];

  return (
    <section id='testimonials' className="w-full py-20 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-yellow-500">What Our Clients Say</h2>
          <p className="text-lg text-gray-300">
            Don&apos;t just take our word for it. Hear from our satisfied clients!
          </p>
        </div>

        {/* Slick Slider */}
        <div className="overflow-hidden"> {/* This prevents horizontal overflow */}
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4"> {/* Added padding to create space between slides */}
                <a
                  href={testimonial.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:scale-105 transition-transform duration-300"
                >
                <div className="p-8 bg-gray-700 rounded-lg h-[360px] shadow-lg">
                  <Image
                    src={testimonial.image}
                    alt={'img'}
                    width={200}
                    height={200}
                    className="w-24 h-24 rounded-full mb-4 mx-auto"
                  />
                  <p className="text-xl font-medium text-gray-200 mb-4 text-center"> {/* Centering text */}
                    {testimonial.text}
                  </p>
                  <h3 className="text-2xl font-bold text-yellow-500 text-center">{testimonial.name}</h3> {/* Centering text */}
                  <span className="text-gray-400 text-center block">{testimonial.role}</span> {/* Centering text */}
                </div>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
