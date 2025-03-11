"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import Image1 from "@/public/Assests/Homapage/home1-lastestnews-1 1.png";
import Image2 from "@/public/Assests/Homapage/home1-lastestnews-2 1.png";
import Image3 from "@/public/Assests/Homapage/bg16 1.png";
import { RiMessage2Line } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blog_Component = () => {

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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  const blogPosts = [
    {
      id: 1,
      image: Image1,
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      author: "By admin",
      comments: "1 comment",
    },
    {
      id: 2,
      image: Image2,
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      author: "By admin",
      comments: "1 comment",
    },
    {
      id: 3,
      image: Image3,
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      author: "By admin",
      comments: "1 comment",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap items-center xl:gap-[250px] md:flex-row justify-around md:items-start p-3 w-full">
        <div className="text-center md:text-left">
          <h1 className="text-[24.66px] leading-[64.8px] font-medium text-[#FCC400] uppercase">
            blog
          </h1>
          <p className="text-[30px] md:text-[50px] leading-[57.9px] font-bold text-[#000000] uppercase">
            our latest blog
          </p>
        </div>
        <div className="mt-[20px] md:mt-0">
          <button className="w-[209.37px] h-[59.18px] bg-[#FCC400] rounded-[147.95px] text-[20px] font-medium text-[#FFFFFF] uppercase">
            View All
          </button>
        </div>
      </div>

      <div className="hidden sm:flex flex-wrap justify-center gap-[30px]">
        {blogPosts.map((post) => (
          <div key={post.id} className="flex flex-col justify-center items-center w-full sm:w-auto">
            <div>
              <Image
                src={post.image}
                width={384.52}
                height={356.27}
                alt="no image"
                className="rounded-t-[10px] m-2 w-full"
              />
            </div>
            <div className="w-full sm:w-[343.41px] h-auto rounded-lg shadow-2xl relative bottom-[100px] bg-[#FFFFFF] ml-0 sm:ml-6 p-4">
              <div className="flex flex-col sm:flex-row justify-center gap-2 p-4">
                <div className="flex gap-1 mb-1">
                  <span><FaRegUserCircle size={20} color="#FCC400" /></span>
                  <h1 className="text-[16.76px] text-[#696969] font-normal capitalize">{post.author}</h1>
                </div>
                <div className="flex gap-1 mb-1">
                  <span><RiMessage2Line size={20} color="#FCC400" /></span>
                  <h1 className="text-[16.76px] text-[#696969] font-normal capitalize">{post.comments}</h1>
                </div>
              </div>
              <div className=" p-2 flex justify-center">
                <p className="text-[19.72px] text-[#292929] leading-[33.53px] font-semibold w-full sm:w-[297.33px]">
                  {post.title}
                </p>
              </div>
              <div className="w-[343.41px] h-[3px] bg-[#D5D5D5] flex justify-start relative right-[16px]"></div>
              <div className="flex justify-between p-4">
                <button className="text-[17.75px] text-[#FCC400] font-normal capitalize">Read more</button>
                <span><FaArrowRightLong /></span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="sm:hidden m-10">
        <Slider {...settings} className="m-0">
          {blogPosts.map((post) => (
            <div key={post.id} className="">
              <div>
                <Image
                  src={post.image}
                  width={384.52}
                  height={356.27}
                  alt="no image"
                  className="rounded-t-[10px] w-full"
                />
              </div>
              <div className="w-full h-auto rounded-lg relative bottom-[50px] bg-[#FFFFFF] border border-solid border-[#D5D5D5]">
                <div className="flex flex-col justify-center gap-2 p-4">
                  <div className="flex gap-1 mb-1">
                    <span><FaRegUserCircle size={20} color="#FCC400" /></span>
                    <h1 className="text-[16.76px] text-[#696969] font-normal capitalize">{post.author}</h1>
                  </div>
                  <div className="flex gap-1 mb-1">
                    <span><RiMessage2Line size={20} color="#FCC400" /></span>
                    <h1 className="text-[16.76px] text-[#696969] font-normal capitalize">{post.comments}</h1>
                  </div>
                </div>
                <div className="w-full border-b-2 border-b-[#D5D5D5]">
                  <p className="text-[19.72px] text-[#292929] leading-[33.53px] font-semibold w-full p-4">
                    {post.title}
                  </p>
                </div>
                <div className="flex justify-between p-4">
                  <button className="text-[17.75px] text-[#FCC400] font-normal capitalize">Read more</button>
                  <span><FaArrowRightLong /></span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Blog_Component;