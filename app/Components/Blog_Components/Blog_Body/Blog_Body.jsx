"use client";
import Banner from "@/public/Assests/Blog/home1-lastestnews-1 1.png";
import Banner2 from "@/public/Assests/Blog/bg4-1024x683 1.png"
import Image from "next/image";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiMessage2Line } from "react-icons/ri";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const BlogData = [
  {
    Id: 1,
    Title: "The quality role of the elementary teacher in education",
    Image: Banner.src,
    author: "bt admin",
    comments: "1 comment",
    Paragraph : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    Paragraph2 : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, "
  },
  {
    Id: 2,
    Title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    Image: Banner2.src,
    author: "bt admin",
    comments: "1 comment",
    Paragraph : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    Paragraph2 : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, "
  },
  {
    Id: 3,
    Title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    Image: Banner.src,
    author: "bt admin",
    comments: "1 comment",
    Paragraph : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    Paragraph2 : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, "
  },
  {
    Id: 4,
    Title:
      "The quality role of the elementary teacher in education",
    Image: Banner2.src,
    author: "bt admin",
    comments: "1 comment",
    Paragraph : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    Paragraph2 : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, "
  },
  {
    Id: 5,
    Title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    Image: Banner.src,
    author: "bt admin",
    comments: "1 comment",
    Paragraph : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    Paragraph2 : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, "
  },
  {
    Id: 6,
    Title:
      "The quality role of the elementary teacher in education",
    Image: Banner.src,
    author: "bt admin",
    comments: "1 comment",
    Paragraph : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    Paragraph2 : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, "
  },
  {
    Id: 7,
    Title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    Image: Banner2.src,
    author: "bt admin",
    comments: "1 comment",
    Paragraph : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    Paragraph2 : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, "
  },
  {
    Id: 8,
    Title:
      "The quality role of the elementary teacher in education",
    Image: Banner.src,
    author: "bt admin",
    comments: "1 comment",
    Paragraph : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    Paragraph2 : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, "
  },
  {
    Id: 9,
    Title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    Image: Banner2.src,
    author: "bt admin",
    comments: "1 comment",
    Paragraph : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    Paragraph2 : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, "
  },
  {
    Id: 10,
    Title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    Image: Banner.src,
    author: "bt admin",
    comments: "1 comment",
    Paragraph : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    Paragraph2 : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, "
  },
  {
    Id: 11,
    Title:
      "The quality role of the elementary teacher in education",
    Image: Banner2.src,
    author: "bt admin",
    comments: "1 comment",
    Paragraph : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    Paragraph2 : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, "
  },
  {
    Id: 12,
    Title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    Image: Banner.src,
    author: "bt admin",
    comments: "1 comment",
    Paragraph : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    Paragraph2 : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, "
  },
];

const Blog_Body = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(BlogData.length / itemsPerPage);
  const Navigate = useRouter()

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentData = BlogData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const setBlogData = (id) => {
    const Data = BlogData.find((item) => item.Id == id)
    localStorage.setItem('Data' , JSON.stringify(Data))
    Navigate.push('/BlogDetail')
  }

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
            <div className="flex justify-between p-4" onClick={() => setBlogData(item.Id)}>
              <button className="text-[17.75px] text-[#FCC400] font-normal capitalize">
                Read more
              </button>
              <span>
                <IoArrowForwardOutline size={20} color="#000000" />
              </span>
            </div>
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
