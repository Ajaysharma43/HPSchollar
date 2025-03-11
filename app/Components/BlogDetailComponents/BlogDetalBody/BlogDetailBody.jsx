"use client";
import { GetSingleBlog } from "@/app/Redux/Features/Data/DataSlice";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { RiMessage2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

const BlogDetailBody = () => {
  const SingleBlog = useSelector((state) => state.Blogdata.SingleBlog) || {};
  const search = useSearchParams();
  const dispatch = useDispatch();
  const [Blog, setBlog] = useState({});

  useEffect(() => {
    dispatch(GetSingleBlog({ id: search.get("id") }));
  }, [dispatch, search]);

  useEffect(() => {
    if (SingleBlog) setBlog(SingleBlog);
  }, [SingleBlog]);

  return (
    <div className="w-full max-w-[825px] px-4">
      {/* Blog Image & Date */}
      <div
        style={{ backgroundImage: `url('${Blog.Image}')` }}
        className="w-full aspect-[4/3] bg-cover bg-center bg-no-repeat relative"
      >
        <h1 className=" bg-[#FDC107] text-white text-2xl sm:text-[50px] p-2 sm:p-4 capitalize w-[80px] sm:w-[157px]">
          28 <br /> jan
        </h1>
      </div>

      {/* Author & Comments */}
      <div className="flex flex-wrap gap-4 pt-3 sm:pt-[10px] sm:pl-[20px]">
        <div className="flex items-center gap-2">
          <FaRegUserCircle size={24} className="text-[#FCC400]" />
          <h1 className="text-base sm:text-[16.76px] text-[#696969] font-normal capitalize">
            {Blog.author}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <RiMessage2Line size={24} className="text-[#FCC400]" />
          <h1 className="text-base sm:text-[16.76px] text-[#696969] font-normal capitalize">
            {Blog.comments}
          </h1>
        </div>
      </div>

      {/* Blog Content */}
      <div className="grid gap-3">
        <p className="text-[15px] sm:text-[17px] text-[#696969] font-normal">{Blog.Paragraph}</p>
        <p className="text-[15px] sm:text-[17px] text-[#696969] font-normal">{Blog.Paragraph2}</p>
      </div>

      {/* Comments Section */}
      <div className="mt-6">
        <h1 className="text-[30px] sm:text-[50px] text-[#000000] font-semibold capitalize">
          02 Comments
        </h1>
        <div className="grid gap-4">
          {[1, 2].map((_, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-4">
              <Image
                src={Blog.Image}
                width={150}
                height={120}
                alt="comment-img"
                className="w-[100px] sm:w-[150px] h-auto object-cover"
              />
              <div className="grid gap-2 w-full">
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <div className="flex gap-2">
                    <h1 className="text-[15px] sm:text-[17px] text-[#696969] font-normal">
                      Sk Thakur
                    </h1>
                    <h1 className="text-[15px] sm:text-[17px] text-[#696969] font-normal">
                      14 June, 2018 - 14:20 PM
                    </h1>
                  </div>
                  <button className="text-[14px] sm:text-[17px] text-white font-semibold bg-[#FDC107] px-3 sm:px-4 py-1 sm:py-2">
                    REPLY
                  </button>
                </div>
                <p className="text-[15px] sm:text-[17px] text-[#696969] font-normal border-b pb-2">
                  Contrary to popular belief, Lorem Ipsum is not simply random text.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leave a Reply Form */}
      <div className="mt-10">
        <h1 className="text-[30px] sm:text-[50px] text-[#000000] font-semibold capitalize">
          Leave a Reply
        </h1>
        <p className="text-[15px] sm:text-[17px] text-[#696969] font-normal capitalize">
          Your email address will not be published. Required fields
        </p>
        <form className="grid gap-4 mt-4">
          <div className="grid sm:flex gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full sm:max-w-sm h-[50px] bg-[#D5D5D559] text-[16px] text-[#696969] font-normal capitalize focus:outline-none p-3"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full sm:max-w-sm h-[50px] bg-[#D5D5D559] text-[16px] text-[#696969] font-normal capitalize focus:outline-none p-3"
            />
            <input
              type="number"
              placeholder="Phone No."
              className="w-full sm:max-w-sm h-[50px] bg-[#D5D5D559] text-[16px] text-[#696969] font-normal capitalize focus:outline-none p-3"
            />
          </div>
          <textarea
            placeholder="Your Comments"
            className="w-full h-[120px] bg-[#D5D5D559] text-[16px] text-[#696969] font-normal capitalize focus:outline-none p-3"
          ></textarea>
          <button className="w-full sm:w-[160px] bg-[#FDC107] font-semibold text-[16px] text-white rounded-full py-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogDetailBody;
