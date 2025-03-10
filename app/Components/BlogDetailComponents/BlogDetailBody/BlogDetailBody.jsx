"use client"
import { useState } from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import Banner from "@/public/Assests/Blog/blog-lastestnews-1 1.png";
import Banner2 from "@/public/Assests/Blog/sidebar-banner-bg 1.png";

const BlogDetailBody2 = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      {/* 📌 Desktop View (Remains Unchanged) */}
      <div className="hidden xl:grid gap-[20px]">
        <div className="grid gap-[10px]">
          <h1 className="text-[50px] text-[#000000] font-bold">CATEGORIES</h1>
          <h3 className="text-[32px] text-[#696969] font-normal">Blog</h3>
          <h3 className="text-[32px] text-[#696969] font-normal">Courses</h3>
          <h3 className="text-[32px] text-[#696969] font-normal">Brand</h3>
          <h3 className="text-[32px] text-[#696969] font-normal">Technology</h3>
          <h3 className="text-[32px] text-[#696969] font-normal">Campus</h3>
        </div>

        <div>
          <h1 className="text-[50px] text-[#000000] font-bold">LATEST NEWS</h1>
          <div className="grid gap-[20px]">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="w-[360.17px] flex gap-4">
                <Image src={Banner} width={121.83} height={105.06} alt="no image" />
                <div>
                  <p className="text-[21px] leading-[30.4px] text-[#696969] font-semibold">
                    Class Aptent Socios Litora Torquent
                  </p>
                  <p className="text-[15px] leading-[30.4px] text-[#FDC107] font-semibold">
                    12 June, 2018
                  </p>
                </div>
              </div>
            ))}

            <div className="relative w-[360.17px] h-[239.63px]">
              <div
                style={{ backgroundImage: `url('${Banner2.src}')` }}
                className="absolute inset-0 bg-cover"
              ></div>
              <div className="absolute inset-0 bg-[#FDC10791] flex flex-col justify-center items-center">
                <h1 className="text-[40px] text-[#FFFFFF] font-bold">DISCOUNT</h1>
                <h1 className="text-[40px] text-[#FFFFFF] font-normal">For</h1>
                <h1 className="text-[40px] text-[#FFFFFF] font-bold">JUNE COURSE</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 📌 Mobile View with Full-Screen Drawer */}
      <div className="xl:hidden">
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-[#FDC107] text-white rounded-md"
        >
          <FaBars size={20} />
          <span>Open Menu</span>
        </button>

        {/* 🔥 Drawer Background Overlay */}
        {isDrawerOpen && (
          <div
            className="fixed inset-0 bg-opacity-50 z-50"
            onClick={() => setIsDrawerOpen(false)}
          ></div>
        )}

        {/* 🔥 Full-Screen Sliding Drawer */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white z-50 transform ${
            isDrawerOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-500 ease-in-out overflow-y-auto shadow-lg`}
        >
          <div className="p-5">
            {/* ✖ Close Button */}
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="text-right text-lg font-bold text-[#FDC107] w-full"
            >
              Close ✖
            </button>

            {/* 📌 Categories */}
            <div className="mt-4">
              <h1 className="text-[30px] text-[#000000] font-bold">CATEGORIES</h1>
              <ul className="space-y-2 text-[20px] text-[#696969]">
                <li>Blog</li>
                <li>Courses</li>
                <li>Brand</li>
                <li>Technology</li>
                <li>Campus</li>
              </ul>
            </div>

            {/* 📌 Latest News */}
            <div className="mt-6">
              <h1 className="text-[30px] text-[#000000] font-bold">LATEST NEWS</h1>
              <div className="grid gap-4">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="flex gap-4">
                    <Image src={Banner} width={80} height={70} alt="no image" />
                    <div>
                      <p className="text-[18px] leading-[24px] text-[#696969] font-semibold">
                        Class Aptent Socios Litora Torquent
                      </p>
                      <p className="text-[14px] text-[#FDC107] font-semibold">
                        12 June, 2018
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 📌 Discount Banner */}
            <div className="mt-6 relative">
              <div
                style={{ backgroundImage: `url('${Banner2.src}')` }}
                className="w-full h-[200px] bg-cover rounded-lg"
              ></div>
              <div className="absolute inset-0 bg-[#FDC10791] flex flex-col justify-center items-center">
                <h1 className="text-[30px] text-[#FFFFFF] font-bold">DISCOUNT</h1>
                <h1 className="text-[30px] text-[#FFFFFF] font-normal">For</h1>
                <h1 className="text-[30px] text-[#FFFFFF] font-bold">JUNE COURSE</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailBody2;
