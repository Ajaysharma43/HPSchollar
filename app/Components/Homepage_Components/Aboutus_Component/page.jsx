import Image from "next/image";
import Card1 from "@/public/Assests/Homapage/featured-courses-1 1 (1).png";
import History from "@/public/Assests/Homapage/featured-courses-1 1.png";
import Culture from "@/public/Assests/Homapage/featured-courses-1 1 (2).png"
import { IoStar } from "react-icons/io5";
import { FaClock } from "react-icons/fa";

const Card_Component = () => {
  return (
    <>
      <div className="w-full grid justify-center p-5 m-2">
        <section className="w-full text-center grid justify-center items-center">
          <h1 className="text-[24.66px] leading-[64.8px] text-[#FCC400] font-medium uppercase">
            Himachal GK
          </h1>
          <p className="uppercase leading-[57.9px] text-[30px] md:text-[49.32px] font-bold text-[#000000] w-full md:w-[800px] h-auto md:h-[116px]">
            Pick a course to get started your study
          </p>
        </section>
        <section className="flex flex-wrap justify-center gap-[20px]">
          <div className="w-full md:w-[388px] shadow-2xl rounded-2xl">
            <div>
              <Image
                src={History}
                width={388}
                height={260}
                alt="no image"
                className="w-full rounded-t-2xl"
              />
            </div>
            <div className="text-center border-b border-[#D9D9D9] p-4">
              <h1 className="text-[24px] md:text-[29.59px] font-semibold text-[#292929] uppercase">
                History
              </h1>
              <p className="capitalize text-[#696969] font-normal font-sans w-full md:w-[352px] mx-auto">
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The
                point of using Lorem Ipsum
              </p>
            </div>
            <div className="flex justify-between p-3">
              <span className="text-[14.8px] text-[#696969] flex items-center gap-1">
                <IoStar color="#FCC400" />
                5.00
              </span>
              <span className="text-[14.8px] text-[#696969] flex items-center gap-1">
                <FaClock color="#696969" />
                07h 40m
              </span>
            </div>
          </div>
          <div className="w-full md:w-[388px] shadow-2xl rounded-2xl">
            <div>
              <Image
                src={Card1}
                width={388}
                height={260}
                alt="no image"
                className="w-full rounded-t-2xl"
              />
            </div>
            <div className="text-center border-b border-[#D9D9D9] p-4">
              <h1 className="text-[24px] md:text-[29.59px] font-semibold text-[#292929] uppercase">
                Geography
              </h1>
              <p className="capitalize text-[#696969] font-normal font-sans w-full md:w-[352px] mx-auto">
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The
                point of using Lorem Ipsum
              </p>
            </div>
            <div className="flex justify-between p-3">
              <span className="text-[14.8px] text-[#696969] flex items-center gap-1">
                <IoStar color="#FCC400" />
                5.00
              </span>
              <span className="text-[14.8px] text-[#696969] flex items-center gap-1">
                <FaClock color="#696969" />
                07h 40m
              </span>
            </div>
          </div>
          <div className="w-full md:w-[388px] shadow-2xl rounded-2xl">
            <div>
              <Image
                src={Culture}
                width={388}
                height={260}
                alt="no image"
                className="w-full rounded-t-2xl"
              />
            </div>
            <div className="text-center border-b border-[#D9D9D9] p-4">
              <h1 className="text-[24px] md:text-[29.59px] font-semibold text-[#292929] uppercase">
              art & culture
              </h1>
              <p className="capitalize text-[#696969] font-normal font-sans w-full md:w-[352px] mx-auto">
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The
                point of using Lorem Ipsum
              </p>
            </div>
            <div className="flex justify-between p-3">
              <span className="text-[14.8px] text-[#696969] flex items-center gap-1">
                <IoStar color="#FCC400" />
                5.00
              </span>
              <span className="text-[14.8px] text-[#696969] flex items-center gap-1">
                <FaClock color="#696969" />
                07h 40m
              </span>
            </div>
          </div>
        </section>
      </div>
      <div className="w-full text-center">
    <button className="w-[226.38760375976562px] h-[59.18114471435547px] rounded-[147.95px] bg-[#FCC400] text-[21.7px] font-medium uppercase text-white mt-14">view all</button>
      </div>
    </>
  );
};

export default Card_Component;
