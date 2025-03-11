"use client";
import LOGO from "@/public/Assests/Navbar/Logo.jpg-removebg-preview (1) 1 (2).png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const pathname = usePathname();

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const isActive = (path) => pathname === path;

  useEffect(() => {
    setIsMenuVisible(false);
  }, [pathname]);

  return (
    <>
      <nav className="flex justify-center xl:gap-[187px] 2xl:gap-[187px] gap-[70%] relative mb-[10px] p-2">
        <section>
          <Image
            src={LOGO}
            alt="LOGO"
            height={58.53}
            width={54.42612838745117}
          />
        </section>

        <section className="xl:flex xl:gap-4 xl:mt-4 2xl:flex 2xl:gap-4 2xl:mt-4 hidden ">
          <Link href="/Homepage">
            <h1 className={`font-light text-[14px] ${isActive('/Homepage') ? 'text-[#FCC400]' : 'text-[#696969]'}`}>Home</h1>
          </Link>
          <h1 className={`font-normal text-[14px] ${isActive('/About') ? 'text-[#FCC400]' : 'text-[#696969]'}`}>About</h1>
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
          <h1 className={`font-light text-[14px] ${isActive('/TestSeries') ? 'text-[#FCC400]' : 'text-[#696969]'}`}>Test Series</h1>
          <h1 className={`font-light text-[14px] ${isActive('/HPQuiz') ? 'text-[#FCC400]' : 'text-[#696969]'}`}>HP Quiz</h1>
          <h1 className={`font-light text-[14px] ${isActive('/JobSessions') ? 'text-[#FCC400]' : 'text-[#696969]'}`}>Job sessions</h1>
          <h1 className={`font-light text-[14px] ${isActive('/CurrentAffairs') ? 'text-[#FCC400]' : 'text-[#696969]'}`}>Current affairs</h1>
          <h1 className={`font-light text-[14px] ${isActive('/TeacherSession') ? 'text-[#FCC400]' : 'text-[#696969]'}`}>Teacher Session</h1>
          <Link href="/Blog">
            <h1 className={`font-light text-[14px] ${isActive('/Blog') || isActive('/BlogDetail') ? 'text-[#FCC400]' : 'text-[#696969]'}`}>Blog</h1>
          </Link>
          <h1 className={`font-light text-[14px] ${isActive('/ContactUs') ? 'text-[#FCC400]' : 'text-[#696969]'}`}>Contact us</h1>
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
                  <Link href="/Homepage">
                    <h1 className={`border-b pb-2 ${isActive('/Homepage') ? 'text-[#FCC400]' : 'text-[#696969]'}`}>Home</h1>
                  </Link>
                  <h1 className={`border-b pb-2 ${isActive('/About') ? 'text-[#FCC400]' : 'text-[#696969]'}`}>About</h1>
                  <details className="border-b pb-2">
                    <summary className="cursor-pointer">Himachal GK &gt;</summary>
                    <div className="pl-4 mt-2 text-gray-600">
                      <p>History</p>
                      <p>Geography</p>
                      <p>Art & Culture</p>
                    </div>
                  </details>
                  <h1 className={`border-b pb-2 ${isActive('/TestSeries') ? 'text-[#FCC400]' : 'text-[#696969]'}`}>Test Series</h1>
                  <h1 className={`border-b pb-2 ${isActive('/HPQuiz') ? 'text-[#FCC400]' : 'text-[#696969]'}`}>HP Quiz</h1>
                  <h1 className={`border-b pb-2 ${isActive('/JobSessions') ? 'text-[#FCC400]' : 'text-[#696969]'}`}>Job Sessions</h1>
                  <h1 className={`border-b pb-2 ${isActive('/CurrentAffairs') ? 'text-[#FCC400]' : 'text-[#696969]'}`}>Current Affairs</h1>
                  <h1 className={`border-b pb-2 ${isActive('/TeacherSession') ? 'text-[#FCC400]' : 'text-[#696969]'}`}>Teacher Session</h1>
                  <Link href="/Blog">
                    <h1 className={`border-b pb-2 ${isActive('/Blog') || isActive('/BlogDetail') ? 'text-[#FCC400]' : 'text-[#696969]'}`}>Blog</h1>
                  </Link>
                  <Link href="/Contact">
                  <h1 className={`border-b pb-2 ${isActive('/Contact') ? 'text-[#FCC400]' : 'text-[#696969]'}`}>Contact Us</h1>
                  </Link>
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