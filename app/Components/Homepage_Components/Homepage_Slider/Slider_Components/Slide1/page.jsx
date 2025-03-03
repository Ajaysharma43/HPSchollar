"use client";
import Image_Component from "../../Image_Component/page";
import Image from "@/public/Assests/Homapage/Logo.jpg-removebg-preview (1) 1 (1).png";

const Slide1 = () => {
  return (
    <>
      <div className="h-full w-full flex justify-center items-center bg-[#0F7500] pt-10 p-3">
        <section className="w-[653.4375px]">
          <h1 className="text-[#FCC400] text-[20px]">Welcome to HPSCholar</h1>
          <h1 className="grid text-[50px] font-bold text-white"><span>Advance your career with our top </span><span className="text-[#FCC400]">online training course</span></h1>
          <p>
            Boost your career with our top-rated online course. Gain skills with
            flexible lessons and hands-on projects. Enroll now for success!
          </p>
          <button>Cap height</button>
        </section>
        <section className="relative">
          <div
            className="absolute inset-0 bg-cover bg-no-repeat opacity-[8%] left-[200px] w-full min-h-[100vh]"
            style={{ backgroundImage: `url('${Image.src}')` }}
          ></div>
          <div className="relative z-10">
            <Image_Component />
          </div>
        </section>
      </div>
    </>
  );
};

export default Slide1;