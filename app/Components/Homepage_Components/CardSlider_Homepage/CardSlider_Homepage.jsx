"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "@/public/Assests/Homapage/Ellipse 12.png";
import Image2 from "@/public/Assests/Homapage/Ellipse 12 (2).png";
import Image3 from "@/public/Assests/Homapage/Ellipse 12 (1).png";
import Image from "next/image";

const CardSlider_Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full border p-1 m-2 ${
          i === currentSlide ? "bg-[#FCC400] border-black" : "border-black"
        }`}
      ></div>
    ),
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        {dots}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  const slides = [
    {
      id: 1,
      content: "Slide 1",
      paragraph:
        "Cras arcu eros, hendrerit et metus conseat mattis ipsum. Vestibulum dignissim magna=vel velit bibendum porttitor. Nam sed felis ac purus varius ultricies et sagittis ipsum. Nullam volutpat sem ante.",
      title: "Johan Thakur",
      Role: "Student",
      Education: "98.7% CBSE XLL",
      Image: Image1,
    },
    {
      id: 2,
      content: "Slide 2",
      paragraph:
        "Cras arcu eros, hendrerit et metus conseat mattis ipsum. Vestibulum dignissim magna=vel velit bibendum porttitor. Nam sed felis ac purus varius ultricies et sagittis ipsum. Nullam volutpat sem ante.",
      title: "Johan Thakur",
      Role: "Student",
      Education: "98.7% CBSE XLL",
      Image: Image2,
    },
    {
      id: 3,
      content: "Slide 3",
      paragraph:
        "Cras arcu eros, hendrerit et metus conseat mattis ipsum. Vestibulum dignissim magna=vel velit bibendum porttitor. Nam sed felis ac purus varius ultricies et sagittis ipsum. Nullam volutpat sem ante.",
      title: "Johan Thakur",
      Role: "Student",
      Education: "98.7% CBSE XLL",
      Image: Image3,
    },
    {
      id: 4,
      content: "Slide 4",
      paragraph:
        "Cras arcu eros, hendrerit et metus conseat mattis ipsum. Vestibulum dignissim magna=vel velit bibendum porttitor. Nam sed felis ac purus varius ultricies et sagittis ipsum. Nullam volutpat sem ante.",
      title: "Johan Thakur",
      Role: "Student",
      Education: "98.7% CBSE XLL",
      Image: Image2,
    },
  ];

  return (
    <>
    <div className="grid justify-center px-4">
  <h1 className="text-[20px] md:text-[24.66px] text-[#FCC400] leading-[30px] md:leading-[64.8px] font-medium uppercase text-center">
  Testimonials
  </h1>
  <p className="text-[24px] md:text-[49.32px] text-[#000000] leading-[30px] md:leading-[57.9px] font-bold uppercase text-center md:w-[815.51px] xl:w-[815.51px] 2xl:w-[815.51px]">
  Our Testimonials
  </p>
</div>
    <div className="container mx-auto px-4">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={slide.id} className="p-4">
            <div
              className={`lg:h-[289.33px]  flex justify-center rounded-lg transition-all duration-200 ${
                currentSlide === index ? "bg-[#FCC400]" : "bg-[#FFFFFF] shadow-xl"
              }`}
            >
              <div className="w-full xl:w-[328.31px] m-4">
                <p
                  className={`text-[15px] transition-all duration-200 ${
                    currentSlide === index ? "text-[#FFFFFF]" : "text-[#696969]"
                  } font-normal leading-[30.4px] pt-5 capitalize`}
                >
                  {slide.paragraph}
                </p>
                <div className="flex justify-between pt-2 md:pt-4">
                  <div className="flex gap-2">
                    <div>
                      <Image
                        src={slide.Image}
                        width={42.48}
                        height={42.48}
                        alt="no image"
                      />
                    </div>
                    <div>
                      <p
                        className={`text-[15px] transition-all duration-200 ${
                          currentSlide === index ? "text-[#FFFFFF]" : "text-[#000000]"
                        } font-semibold`}
                      >
                        {slide.title}
                      </p>
                      <p
                        className={`text-[15px] transition-all duration-200 ${
                          currentSlide == index ? "text-[#FFFFFF]" : "text-[#696969]"
                        } font-normal`}
                      >
                        {slide.Education}
                      </p>
                    </div>
                  </div>
                  <div>
                    <button
                      className={`w-[75.19px] h-[21.10px] rounded-[127.58px] text-[12.76px] text-center transition-all duration-200 ${
                        currentSlide == index
                          ? "text-[#FCC400] bg-[#FFFFFF]"
                          : "bg-[#FCC400] text-[#FFFFFF]"
                      }`}
                    >
                      {slide.Role}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </>
  );
};

export default CardSlider_Homepage;