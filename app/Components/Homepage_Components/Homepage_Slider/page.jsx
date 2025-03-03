"use client";
import { useState, useEffect } from "react";
import Slide1 from "./Slider_Components/Slide1/page";
import Slide2 from "./Slider_Components/Slide2/page";
import Slide3 from "./Slider_Components/Slide3/page";
import Slide4 from "./Slider_Components/Slide4/page";

const Homepage_Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [<Slide1 />, <Slide2/>, <Slide3/>, <Slide4/>];

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
            className="w-full flex-shrink-0 h-fit"
          >
            <div>{slide}</div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-[100px] left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              index === currentSlide ? "bg-[#FCC400] border-2 border-solid border-[#FFFFFF]" : "border-2 border-solid border-[#FFFFFF]"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Homepage_Slider;
