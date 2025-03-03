"use client";
import LOGO from "@/public/Assests/Navbar/Logo.jpg-removebg-preview (1) 1 (2).png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import { useRef, useState } from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const GKref = useRef();

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <nav className="flex justify-center xl:gap-[187px] 2xl:gap-[187px] gap-[70%] relative top-2 bottom-2 pt-2 pb-2 p-2">
        <section>
          <Image
            src={LOGO}
            alt="LOGO"
            height={58.53}
            width={54.42612838745117}
          />
        </section>

        <section className="xl:flex xl:gap-4 xl:mt-4 2xl:flex 2xl:gap-4 2xl:mt-4 hidden ">
          <h1 className="font-light text-[14px]">Home</h1>
          <h1 className="font-light text-[14px]">About</h1>
          <div className="flex relative">
            <h1
              onClick={toggleDropdown}
              className="cursor-pointer font-light text-[14px]"
            >
              Himachal GK
            </h1>
            <span onClick={toggleDropdown} className="cursor-pointer">
              <RiArrowDropDownLine size={25} />
            </span>
            {isDropdownVisible && (
              <div className="absolute top-[25px] left-0 bg-[#D9D9D9] w-[101.5272216796875px] h-[39.453857421875] p-1 text-[10.27px] font-sans font-semibold z-10">
                <h1>History</h1>
                <h1>Geography</h1>
                <h1>Art&Culture</h1>
              </div>
            )}
          </div>
          <h1 className="font-light text-[14px]">Test Series</h1>
          <h1 className="font-light text-[14px]">HP Quiz</h1>
          <h1 className="font-light text-[14px]">Job sessions</h1>
          <h1 className="font-light text-[14px]">Current affairs</h1>
          <h1 className="font-light text-[14px]">Teacher Session</h1>
          <h1 className="font-light text-[14px]">Blog</h1>
          <h1 className="font-light text-[14px]">Contact us</h1>
        </section>

        <section className="xl:hidden 2xl:hidden">
          <div onClick={toggleMenu} className="cursor-pointer mt-3">
            <FaBars size={20} />
          </div>
          {isMenuVisible && (
            <div className="absolute top-[60px] right-0 bg-white w-full p-2 text-[14px] font-sans font-semibold z-10">
              <h1 className="font-semibold text-[30px] w-full border-b-[1px]">Home</h1>
              <h1 className="font-semibold text-[30px] w-full border-b-[1px]">About</h1>
              <div className="flex relative">
                <Accordion>
                  <AccordionItem
                    header={`Himachal GK >`}
                    className="font-semibold text-[30px] w-full border-b-[1px]"
                  >
                    <h1 className="font-bold">History</h1>
                    <h1>Geography</h1>
                    <h1>Art&Culture</h1>
                  </AccordionItem>
                </Accordion>
              </div>
              <h1 className="font-semibold text-[30px] w-full border-b-[1px]">Test Series</h1>
              <h1 className="font-semibold text-[30px] w-full border-b-[1px]">HP Quiz</h1>
              <h1 className="font-semibold text-[30px] w-full border-b-[1px]">Job sessions</h1>
              <h1 className="font-semibold text-[30px] w-full border-b-[1px]">Current affairs</h1>
              <h1 className="font-semibold text-[30px] w-full border-b-[1px]">Teacher Session</h1>
              <h1 className="font-semibold text-[30px] w-full border-b-[1px]">Blog</h1>
              <h1 className="font-bold text-[30px] w-full">Contact us</h1>
            </div>
          )}
        </section>
      </nav>
    </>
  );
};

export default Navbar;
