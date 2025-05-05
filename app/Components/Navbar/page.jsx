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

  const isActive = (path) => pathname.startsWith(path);

  useEffect(() => {
    setIsMenuVisible(false);
  }, [pathname]);

  return (
    <>
      <nav className="flex justify-center xl:gap-[187px] 2xl:gap-[187px] gap-[70%] relative mb-[10px] p-2">
        {/* Logo */}
        <section>
          <Image src={LOGO} alt="LOGO" height={58.53} width={54.43} />
        </section>

        {/* Desktop Nav Links */}
        <section className="xl:flex xl:gap-4 xl:mt-4 2xl:flex 2xl:gap-4 2xl:mt-4 hidden">
          <Link href="/">
            <h1
              className={`font-light text-[14px] ${
                isActive("/") ? "text-[#FCC400]" : "text-[#696969]"
              }`}
            >
              Home
            </h1>
          </Link>
          <Link href="/Aboutus">
            <h1
              className={`font-normal text-[14px] ${
                isActive("/Aboutus") ? "text-[#FCC400]" : "text-[#696969]"
              }`}
            >
              About us
            </h1>
          </Link>

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
              <div className="absolute top-[25px] left-0 bg-[#D9D9D9] p-2 text-[11px] font-semibold z-10 w-[130px] rounded-sm space-y-1">
                <Link href="/HimachalHistory">
                  <h1
                    className={`hover:text-[#FCC400] ${
                      isActive("/HimachalHistory") ? "text-[#FCC400]" : ""
                    }`}
                  >
                    History
                  </h1>
                </Link>
                <Link href="/Himachalgk">
                  <h1
                    className={`hover:text-[#FCC400] ${
                      isActive("/HimachalGk") ? "text-[#FCC400]" : ""
                    }`}
                  >
                    Geography
                  </h1>
                </Link>
                <Link href="/HimachalArtCulture">
                  <h1
                    className={`hover:text-[#FCC400] ${
                      isActive("/HimachalArtCulture") ? "text-[#FCC400]" : ""
                    }`}
                  >
                    Art & Culture
                  </h1>
                </Link>
              </div>
            )}
          </div>

          <Link href={"/TestSeries"}>
            <h1
              className={`font-light text-[14px] ${
                isActive("/TestSeries") ? "text-[#FCC400]" : "text-[#696969]"
              }`}
            >
              Test Series
            </h1>
          </Link>
          <Link href={"/HpQuiz"}>
            <h1
              className={`font-light text-[14px] ${
                isActive("/HpQuiz") ? "text-[#FCC400]" : "text-[#696969]"
              }`}
            >
              HP Quiz
            </h1>
          </Link>
          <h1
            className={`font-light text-[14px] ${
              isActive("/JobSessions") ? "text-[#FCC400]" : "text-[#696969]"
            }`}
          >
            Job sessions
          </h1>
          <h1
            className={`font-light text-[14px] ${
              isActive("/CurrentAffairs") ? "text-[#FCC400]" : "text-[#696969]"
            }`}
          >
            Current affairs
          </h1>
          <h1
            className={`font-light text-[14px] ${
              isActive("/TeacherSession") ? "text-[#FCC400]" : "text-[#696969]"
            }`}
          >
            Teacher Session
          </h1>
          <Link href="/Blog">
            <h1
              className={`font-light text-[14px] ${
                isActive("/Blog") || isActive("/BlogDetail")
                  ? "text-[#FCC400]"
                  : "text-[#696969]"
              }`}
            >
              Blog
            </h1>
          </Link>
          <Link href="/Contact">
            <h1
              className={`font-light text-[14px] ${
                isActive("/Contact") ? "text-[#FCC400]" : "text-[#696969]"
              }`}
            >
              Contact us
            </h1>
          </Link>
        </section>

        {/* Mobile Menu */}
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
                  <button onClick={toggleMenu} className="self-end text-xl">
                    ✖
                  </button>

                  <Link href="/">
                    <h1
                      className={`border-b pb-2 ${
                        isActive("/") ? "text-[#FCC400]" : "text-[#696969]"
                      }`}
                    >
                      Home
                    </h1>
                  </Link>
                  <Link href="/Aboutus">
                    <h1
                      className={`border-b pb-2 ${
                        isActive("/Aboutus")
                          ? "text-[#FCC400]"
                          : "text-[#696969]"
                      }`}
                    >
                      About Us
                    </h1>
                  </Link>

                  <details className="border-b pb-2">
                    <summary className="cursor-pointer">
                      Himachal GK &gt;
                    </summary>
                    <div className="pl-4 mt-2 text-gray-600 space-y-2">
                      <Link href="/HimachalHistory">
                        <p
                          className={`${
                            isActive("/HimachalHistory") ? "text-[#FCC400]" : ""
                          }`}
                        >
                          History
                        </p>
                      </Link>
                      <Link href="/Himachalgk">
                        <p
                          className={`${
                            isActive("/HimachalGk") ? "text-[#FCC400]" : ""
                          }`}
                        >
                          Geography
                        </p>
                      </Link>
                      <Link href="/HimachalArtCulture">
                        <p
                          className={`${
                            isActive("/HimachalArtCulture")
                              ? "text-[#FCC400]"
                              : ""
                          }`}
                        >
                          Art & Culture
                        </p>
                      </Link>
                    </div>
                  </details>

                  <Link href={"/TestSeries"}>
                  <h1
                    className={`border-b pb-2 ${
                      isActive("/TestSeries")
                        ? "text-[#FCC400]"
                        : "text-[#696969]"
                    }`}
                  >
                    Test Series
                  </h1>
                  </Link>
                  <Link href={"/HpQuiz"}>
                    <h1
                      className={`border-b pb-2 ${
                        isActive("/HpQuiz")
                          ? "text-[#FCC400]"
                          : "text-[#696969]"
                      }`}
                    >
                      HP Quiz
                    </h1>
                  </Link>
                  <h1
                    className={`border-b pb-2 ${
                      isActive("/JobSessions")
                        ? "text-[#FCC400]"
                        : "text-[#696969]"
                    }`}
                  >
                    Job Sessions
                  </h1>
                  <h1
                    className={`border-b pb-2 ${
                      isActive("/CurrentAffairs")
                        ? "text-[#FCC400]"
                        : "text-[#696969]"
                    }`}
                  >
                    Current Affairs
                  </h1>
                  <h1
                    className={`border-b pb-2 ${
                      isActive("/TeacherSession")
                        ? "text-[#FCC400]"
                        : "text-[#696969]"
                    }`}
                  >
                    Teacher Session
                  </h1>

                  <Link href="/Blog">
                    <h1
                      className={`border-b pb-2 ${
                        isActive("/Blog") || isActive("/BlogDetail")
                          ? "text-[#FCC400]"
                          : "text-[#696969]"
                      }`}
                    >
                      Blog
                    </h1>
                  </Link>
                  <Link href="/Contact">
                    <h1
                      className={`border-b pb-2 ${
                        isActive("/Contact")
                          ? "text-[#FCC400]"
                          : "text-[#696969]"
                      }`}
                    >
                      Contact Us
                    </h1>
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
