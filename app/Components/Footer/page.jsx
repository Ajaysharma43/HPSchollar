"use client"
import Logo from "@/public/Assests/Homapage/Group 1000002832.png";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter, FaLinkedinIn, FaPhone } from "react-icons/fa";
import { SlEnvolope } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import Image from "next/image";
import { useRef } from "react";
const Footer = () => {
    const Subscribe = useRef();
  return (
    <>
      <div className="bg-[#2C2C2C] sm:flex flex-wrap p-[30px] sm:p-[100px] gap-5 hidden">
        <div className="w-[262.91px]">
          <Image src={Logo} width={98.76} height={107.6} alt="no image" />
          <p className="text-[16px] text-[#DADADA] font-normal leading-[30px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </p>
          <div className="flex gap-2">
            <div className="h-[24.60px] w-[24.60px] border border-solid p-1 rounded-full text-white transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-500">
              <GrFacebookOption />
            </div>
            <div className="h-[24.60px] w-[24.60px] border border-solid p-1 rounded-full text-white transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-300">
              <FaTwitter />
            </div>
            <div className="h-[24.60px] w-[24.60px] border border-solid p-1 rounded-full text-white transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800">
              <FaLinkedinIn />
            </div>
            <div className="h-[24.60px] w-[24.60px] border border-solid p-1 rounded-full text-white transition-all duration-200 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-700">
              <AiFillInstagram />
            </div>
          </div>
        </div>

        <div className="w-[247px]">
          <h1 className="text-[20px] text-[#FDC107] font-semibold leading-[30px] pb-2">
            Quick Links
          </h1>
          <div className="flex gap-2 text-[16px] text-[#DADADA] font-normal">
            <div className="grid gap-1">
              <h1>Home</h1>
              <h1>About us</h1>
              <h1>Test Series</h1>
              <h1>HP Quiz</h1>
              <h1>HP Quiz</h1>
            </div>
            <div className="grid">
              <h1 className="m-0">Job sessions</h1>
              <h1>current affairs</h1>
              <h1>Blogs</h1>
              <h1>Contact us</h1>
            </div>
          </div>
        </div>

        <div className="w-[262.91px]">
          <h1 className="text-[20px] text-[#FDC107] font-semibold leading-[30px] pb-2">Contact us</h1>
          <div>
            <div className="flex gap-2">
              <div className="h-[24.60px] w-[24.60px] p-[7px] rounded-full bg-[#FDC107] text-white transition-all duration-200">
                <FaPhone size={10} />
              </div>
              <h1 className="text-[16px] text-[#DADADA] font-normal leading-[30px]">+91 9000087654</h1>
            </div>

            <div className="flex gap-2">
              <div className="h-[24.60px] w-[24.60px] p-[7px] rounded-full bg-[#FDC107] text-white transition-all duration-200">
                <FaLocationDot size={10} />
              </div>
              <h1 className="text-[16px] text-[#DADADA] font-normal leading-[30px]">Village Bhatehr P.O Jaswan Distt kangra (HP)</h1>
            </div>

            <div className="flex gap-2">
              <div className="h-[24.60px] w-[24.60px] p-[7px] rounded-full bg-[#FDC107] text-white transition-all duration-200">
                <SlEnvolope size={10} />
              </div>
              <h1 className="text-[16px] text-[#DADADA] font-normal leading-[30px]">himsanskrit@gmail.com</h1>
            </div>
          </div>
        </div>

        <div className="w-[262.91px]">
        <h1 className="text-[20px] text-[#FDC107] font-semibold leading-[30px] pb-2">Newsletter</h1>
        <p className="text-[16px] text-[#DADADA] font-normal leading-[30px]">Join Our Mailing List To Stay Up To Date With World</p>
        <form action="" ref={Subscribe} onSubmit={(e) => Subscribe.current.reset()}>
                <div className="w-[284.72px] h-[50px] bg-[#FFFFFF] flex justify-center items-center rounded-[75px] ">
                <input type="email" name="" id="" placeholder="Email address" className="relative left-[15px] focus:outline-none"/>
                <button className="text-[16px] w-[114.69px] h-[42px] text-[#FFFFFF] font-normal rounded-full bg-[#FDC107] relative right-[5px]" type="submit">Subscribe</button>
            </div>
        </form>
        </div>
      </div>


{/* {Mobile View} */}
      <div className="bg-[#2C2C2C] flex flex-wrap p-[30px] sm:p-[100px] gap-5 sm:hidden justify-center">
      <div className="">

        <div className="w-full flex justify-center">
        <Image src={Logo} width={98.76} height={107.6} alt="no image" className="w-[200px] h-[215px]"/>
        </div>
          
          <p className="text-[16px] text-[#DADADA] font-normal leading-[30px] text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </p>
          <div className="flex gap-2 justify-center">
            <div className="h-[34.60px] w-[34.60px] border border-solid p-1.5 rounded-full text-white transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-500">
              <GrFacebookOption size={20}/>
            </div>
            <div className="h-[34.60px] w-[34.60px] border border-solid p-1.5 rounded-full text-white transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-300">
              <FaTwitter size={20}/>
            </div>
            <div className="h-[34.60px] w-[34.60px] border border-solid p-1.5 rounded-full text-white transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800">
              <FaLinkedinIn size={20}/>
            </div>
            <div className="h-[34.60px] w-[34.60px] border border-solid p-1.5 rounded-full text-white transition-all duration-200 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-700">
              <AiFillInstagram size={20}/>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-[20px] text-[#FDC107] font-semibold leading-[30px] pb-2 text-center">
            Quick Links
          </h1>
          <div className="flex flex-wrap gap-2 text-[16px] text-[#DADADA] font-normal text-center">
            <div className="grid gap-1">
              <h1>Home</h1>
              <h1>About us</h1>
              <h1>Test Series</h1>
              <h1>HP Quiz</h1>
              <h1>HP Quiz</h1>
            </div>
            <div className="grid">
              <h1 className="m-0">Job sessions</h1>
              <h1>current affairs</h1>
              <h1>Blogs</h1>
              <h1>Contact us</h1>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-[20px] text-[#FDC107] font-semibold leading-[30px] pb-2">Contact us</h1>
          <div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="h-[24.60px] w-[24.60px] p-[7px] rounded-full bg-[#FDC107] text-white transition-all duration-200">
                <FaPhone size={10} />
              </div>
              <h1 className="text-[16px] text-[#DADADA] font-normal leading-[30px]">+91 9000087654</h1>
            </div>

            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="h-[24.60px] w-[24.60px] p-[7px] rounded-full bg-[#FDC107] text-white transition-all duration-200">
                <FaLocationDot size={10} />
              </div>
              <h1 className="text-[16px] text-[#DADADA] font-normal leading-[30px]">Village Bhatehr P.O Jaswan Distt kangra (HP)</h1>
            </div>

            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="h-[24.60px] w-[24.60px] p-[7px] rounded-full bg-[#FDC107] text-white transition-all duration-200">
                <SlEnvolope size={10} />
              </div>
              <h1 className="text-[16px] text-[#DADADA] font-normal leading-[30px]">himsanskrit@gmail.com</h1>
            </div>
          </div>
        </div>

        <div className="w-[262.91px] text-center">
        <h1 className="text-[20px] text-[#FDC107] font-semibold leading-[30px] pb-2">Newsletter</h1>
        <p className="text-[16px] text-[#DADADA] font-normal leading-[30px]">Join Our Mailing List To Stay Up To Date With World</p>
        <form action="" ref={Subscribe} onSubmit={(e) => Subscribe.current.reset()}>
                <div className="w-[284.72px] h-[50px] bg-[#FFFFFF] flex justify-center items-center rounded-[75px] ">
                <input type="email" name="" id="" placeholder="Email address" className="relative left-[15px] focus:outline-none"/>
                <button className="text-[16px] w-[114.69px] h-[42px] text-[#FFFFFF] font-normal rounded-full bg-[#FDC107] relative right-[5px]" type="submit">Subscribe</button>
            </div>
        </form>
        </div>

      </div>
    </>
  );
};
export default Footer;
