"use client";
import LOGO from "@/public/Assests/Navbar/Logo.jpg-removebg-preview (1) 1 (2).png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import { useRef, useState } from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { motion ,  AnimatePresence } from "framer-motion";

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

        <section className="xl:hidden 2xl:hidden relative">
      <div onClick={toggleMenu} className="cursor-pointer mt-3 p-2">
        <FaBars size={24} />
      </div>
      <AnimatePresence>
        {isMenuVisible && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.3 } }}
            className="fixed inset-0 bg-white p-6 shadow-lg z-50 overflow-y-auto"
          >
            <nav className="flex flex-col gap-4 text-lg font-semibold text-gray-800">
              <button onClick={toggleMenu} className="self-end text-xl">✖</button>
              <h1 className="border-b pb-2">Home</h1>
              <h1 className="border-b pb-2">About</h1>
              <details className="border-b pb-2">
                <summary className="cursor-pointer">Himachal GK &gt;</summary>
                <div className="pl-4 mt-2 text-gray-600">
                  <p>History</p>
                  <p>Geography</p>
                  <p>Art & Culture</p>
                </div>
              </details>
              <h1 className="border-b pb-2">Test Series</h1>
              <h1 className="border-b pb-2">HP Quiz</h1>
              <h1 className="border-b pb-2">Job Sessions</h1>
              <h1 className="border-b pb-2">Current Affairs</h1>
              <h1 className="border-b pb-2">Teacher Session</h1>
              <h1 className="border-b pb-2">Blog</h1>
              <h1>Contact Us</h1>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
      </nav>
    </>
  );
};

export default Navbar;
