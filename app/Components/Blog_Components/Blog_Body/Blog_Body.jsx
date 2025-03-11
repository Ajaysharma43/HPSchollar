"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { RiMessage2Line } from "react-icons/ri";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { GetBlogData } from "@/app/Redux/Features/Data/DataSlice";
import Link from "next/link";

const Blog_Body = () => {
  const Blogs = useSelector((state) => state.Blogdata.Data) || [];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(Blogs.length / itemsPerPage);
  const Navigate = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetBlogData());
  }, [dispatch]);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentData = Blogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div className="flex flex-wrap justify-center gap-[30px]">
        {currentData.map((item) => (
          <div key={item.Id} className="w-[384.62px] shadow-lg m-3">
            <Image
              src={item.Image}
              width={384.52}
              height={356.27}
              alt="Blog Image"
              className="w-[384.52px] h-[223.09px] overflow-hidden"
              loading="lazy"
            />
            <div className="flex flex-col sm:flex-row justify-start gap-4 pt-[10px] pl-[20px]">
              <div className="flex gap-1 mb-1">
                <span>
                  <FaRegUserCircle size={20} color="#FCC400" />
                </span>
                <h1 className="text-[16.76px] text-[#696969] font-normal capitalize text-center">
                  {item.author}
                </h1>
              </div>
              <div className="flex gap-1 mb-1">
                <span>
                  <RiMessage2Line size={20} color="#FCC400" />
                </span>
                <h1 className="text-[16.76px] text-[#696969] font-normal capitalize">
                  {item.comments}
                </h1>
              </div>
            </div>
            <h1 className="text-[19.72px] text-[#292929] leading-[33.53px] font-medium mt-4 border-b-2 border-b-[#D5D5D5] pl-[20px] uppercase">
              {item.Title}
            </h1>
            <Link href={`/BlogDetail?id=${item.Id}`}>
            <div className="flex justify-between p-4">
              <button className="text-[17.75px] text-[#FCC400] font-normal capitalize">
                Read more
              </button>
              <span>
                <IoArrowForwardOutline size={20} color="#000000" />
              </span>
            </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handleClick(index + 1)}
            className={`mx-1 px-3 py-1 ${
              currentPage === index + 1
                ? "bg-[#FCC400] text-white"
                : "border border-[#FCC400] text-[#FCC400]"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default Blog_Body;