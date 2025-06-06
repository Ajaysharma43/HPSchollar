"use client";
import Image from "next/image";
import Banner from "@/public/Assests/Homapage/freepik-export-20240702160552xrsy 1.png";
import Image_bg from "@/public/Assests/Homapage/Logo.jpg-removebg-preview (1) 1 (1).png";
import { motion } from "framer-motion";

const Slide2 = () => {
  return (
    <>
      <div className="h-full md:h-[619.11px] xl:h-[619.11px] 2xl:h-[619.11px] w-full flex flex-col-reverse md:flex-row justify-center items-center bg-[#002975] pt-10 pb-28 p-3">
        <motion.section
          className="w-full md:w-[653px] grid gap-[19px] text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[#FCC400] text-[20px]">Welcome to HPSCholar</h1>
          <h1 className="grid text-[30px] md:text-[50px] font-bold text-white">
            <span>Advance your career with our top </span>
            <span className="text-[#FCC400]">online training course</span>
          </h1>
          <p className="text-[14px] md:text-[16px] text-[#FFFFFF] font-normal">
            Boost your career with our top-rated online course. Gain skills with
            flexible lessons and hands-on projects. Enroll now for success!
          </p>
          <motion.button
            className="w-full md:w-[201px] bg-[#FCC400] h-[50px] md:h-[60px] rounded-4xl text-white text-[16px] md:text-[20px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get started
          </motion.button>
        </motion.section>
        <section className="relative w-full md:w-auto">
          <div
            className="absolute inset-0 bg-cover bg-no-repeat opacity-50 md:opacity-[8%] left-0 md:left-[200px] w-full h-full md:min-h-[100vh]"
            style={{ backgroundImage: `url('${Image_bg.src}')` }}
          ></div>
          <motion.div
            className="relative z-10 flex justify-center md:block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image src={Banner} width={451.335} height={570.972} alt="Banner Image" className="h-[500.972px] xl:h-[570.972px] w-[451.335px]"/>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Slide2;