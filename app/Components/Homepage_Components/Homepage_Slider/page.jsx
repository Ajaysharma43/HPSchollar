"use client";
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import Slide1 from "./Slider_Components/Slide1/page";
import Slide2 from "./Slider_Components/Slide2/page";
import Slide3 from "./Slider_Components/Slide3/page";
import Slide4 from "./Slider_Components/Slide4/page";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const Homepage_Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [<Slide1 />, <Slide2 />, <Slide3 />, <Slide4 />];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentSlide((prev) => (prev + 1) % slides.length),
    onSwipedRight: () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="relative w-full overflow-hidden" {...handlers}>
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 h-fit">
            <div>{slide}</div>
          </div>
        ))}
      </div>
      <div className="hidden sm:flex absolute bottom-[100px] left-1/2 transform -translate-x-1/2 space-x-2">
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
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#FCC400] rounded-full text-white p-2 sm:hidden"
      >
        <GrFormPrevious/>
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#FCC400] rounded-full text-white p-2 sm:hidden"
      >
        <MdNavigateNext/>
      </button>
    </div>
  );
};

export default Homepage_Slider;
