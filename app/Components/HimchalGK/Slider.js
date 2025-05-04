"use client"
import { useState } from "react";
import Image from "next/image";
import Image1 from "@/public/Assests/HimchalGK/image 4.png";
import Image2 from "@/public/Assests/HimchalGK/image 4.png"; // Replace with more if needed

const ManualSlider = () => {
  const images = [Image1, Image2];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] overflow-hidden rounded">
      {/* Image */}
      <div className="relative w-full h-full transition duration-500 ease-in-out">
        <Image
          src={images[current]}
          alt={`Slide ${current + 1}`}
          fill
          className="object-cover"
        />
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full z-10"
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full z-10"
      >
        ›
      </button>
    </div>
  );
};

export default ManualSlider;
