"use client";
import { useState, useEffect } from "react";
import Slide1 from "./Slider_Components/Slide1/page";

const Homepage_Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [<Slide1 />, 2, 3, 4, 5, 6];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 500000000);
    return () => clearInterval(interval);
  }, [slides.length]);

  

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
          >
            <div className="text-2xl">{slide}</div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              index === currentSlide ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Homepage_Slider;
