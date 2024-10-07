'use client'



import React from 'react';
import Slider from 'react-slick'; // Ensure react-slick and slick-carousel are installed
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const Testimonials = () => {
  // Slick Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 testimonials at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
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
      name: "John Doe",
      role: "Senior Product Manager",
      image: "/images/john_doe.jpg", // Update with actual image path
    },
    {
      text: "Highly professional and reliable. I'd recommend this service to anyone serious about their career.",
      name: "Jane Smith",
      role: "Software Engineer",
      image: "/images/jane_smith.jpg", // Update with actual image path
    },
    {
      text: "Amazing support and attention to detail. They really helped me stand out in my applications.",
      name: "Michael Brown",
      role: "Marketing Specialist",
      image: "/images/michael_brown.jpg", // Update with actual image path
    },
    {
      text: "The guidance I received was invaluable. Their team helped me tailor my applications perfectly.",
      name: "Alice Green",
      role: "UX Designer",
      image: "/images/alice_green.jpg", // Update with actual image path
    },
    {
      text: "Fantastic experience! I got multiple interviews thanks to their service.",
      name: "Robert White",
      role: "Data Analyst",
      image: "/images/robert_white.jpg", // Update with actual image path
    },
    {
      text: "The team was very supportive and provided great insights into the hiring process.",
      name: "Emily Black",
      role: "Product Designer",
      image: "/images/emily_black.jpg", // Update with actual image path
    },
    {
      text: "I loved how personalized the service was. They really took the time to understand my needs.",
      name: "Chris Blue",
      role: "Sales Manager",
      image: "/images/chris_blue.jpg", // Update with actual image path
    },
    {
      text: "Thanks to this service, I landed my dream job. Highly recommend!",
      name: "Sophia Red",
      role: "Project Coordinator",
      image: "/images/sophia_red.jpg", // Update with actual image path
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
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4"> {/* Added padding to create space between slides */}
              <div className="p-8 bg-gray-700 rounded-lg shadow-lg">
                {/* <Image 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-24 h-24 rounded-full mb-4 mx-auto" 
                /> */}
                <p className="text-xl font-medium text-gray-200 mb-4 text-center"> {/* Centering text */}
                  {testimonial.text}
                </p>
                <h3 className="text-2xl font-bold text-yellow-500 text-center">{testimonial.name}</h3> {/* Centering text */}
                <span className="text-gray-400 text-center block">{testimonial.role}</span> {/* Centering text */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
