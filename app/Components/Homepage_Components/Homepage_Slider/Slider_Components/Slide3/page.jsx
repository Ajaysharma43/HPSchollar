"use client";
import Image from "next/image";
import Image_Component from "../../Image_Component/page";
import Banner from "@/public/Assests/Homapage/Group 1000006399.png";
import Image_bg from "@/public/Assests/Homapage/Logo.jpg-removebg-preview (1) 1 (1).png";

const Slide3 = () => {
  return (
    <>
      <div className="h-full md:h-[619.11px] xl:h-[619.11px] 2xl:h-[619.11px] w-full flex flex-col-reverse md:flex-row justify-center items-center bg-[#7b12b4] pt-10 pb-14 p-3">
        <section className="w-full md:w-[653px] grid gap-[19px] text-center md:text-left">
          <h1 className="text-[#FCC400] text-[20px]">Welcome to HPSCholar</h1>
          <h1 className="grid text-[30px] md:text-[50px] font-bold text-white">
            <span>Advance your career with our top </span>
            <span className="text-[#FCC400]">online training course</span>
          </h1>
          <p className="text-[14px] md:text-[16px] text-[#FFFFFF] font-normal">
            Boost your career with our top-rated online course. Gain skills with
            flexible lessons and hands-on projects. Enroll now for success!
          </p>
          <button className="w-full md:w-[201px] bg-[#FCC400] h-[50px] md:h-[60px] rounded-4xl text-white text-[16px] md:text-[20px]">
            Get started
          </button>
        </section>
        <section className="relative w-full md:w-auto">
          <div
            className="absolute inset-0 bg-cover bg-no-repeat opacity-50 md:opacity-[8%] left-0 md:left-[200px] w-full h-full md:min-h-[100vh]"
            style={{ backgroundImage: `url('${Image_bg.src}')` }}
          ></div>
          <div className="relative z-10 flex justify-center md:block">
            <Image src={Banner} width={451.335} height={570.972} alt="Banner Image" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Slide3;