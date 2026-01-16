"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const slides = [
  {
    title: "Make The Innovative Solutions For You",
    description: "Creating cutting-edge solutions tailored to your unique business requirements.",
    ctaText: "Let's Start",
    ctaLink: "#contact",
    image: "/slider-1.jpg"
  },
  {
    title: "Transforming Ideas Into Digital Reality",
    description: "Bringing your concepts to life with advanced technology and creative design.",
    ctaText: "Get Solutions",
    ctaLink: "#services",
    image: "/slider-2.jpg"
  },
  {
    title: "Smart Software. Smarter Future.",
    description: "Building intelligent systems that drive growth and innovation.",
    ctaText: "Get Quote",
    ctaLink: "#contact",
    image: "/slider-3.jpg"
  }
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const pathname = usePathname();

  // Only show carousel on home page
  if (pathname !== "/") {
    return null;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] ease-linear"
              style={{ backgroundImage: `url(${slide.image})`, transform: index === currentSlide ? 'scale(1.1)' : 'scale(1)' }}
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#020617]/70 via-[#0f172a]/60 to-[#1e1b4b]/70 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-2xl ml-auto text-right">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                    {slide.title}
                  </h2>
                  <p className="text-xl text-gray-200 mb-8 drop-shadow-md">
                    {slide.description}
                  </p>
                  <div className="flex justify-end gap-4">
                    <a
                      href={slide.ctaLink}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-base font-medium transition-colors"
                    >
                      {slide.ctaText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}