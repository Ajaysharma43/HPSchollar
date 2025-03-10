"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { RiMessage2Line } from "react-icons/ri";

const BlogDetailBody = () => {
  const [Blog, setBlog] = useState({});

  useEffect(() => {
    const GetData = () => {
      const Data = localStorage.getItem("Data");
      const parsedData = JSON.parse(Data);
      setBlog(parsedData);
    };
    GetData();
  }, []);

  useEffect(() => {
    console.log(Blog);
  }, [Blog]);

  return (
    <>
      <div className="w-[823.33px]">
        <div style={{backgroundImage : `url('${Blog.Image}')`}} className="w-[825.07px] h-[614.69px] bg-cover bg-no-repeat overflow-hidden">
            <h1 className="text-center w-[157.08px] h-[143.40px] bg-[#FDC107] text-[50px] text-[#FFFFFF] capitalize">28 <br/> jan</h1>
        </div>

        <div className="flex flex-col sm:flex-row justify-start gap-4 pt-[10px] pl-[20px]">
          <div className="flex gap-1 mb-1">
            <span>
              <FaRegUserCircle size={30} color="#FCC400" />
            </span>
            <h1 className="text-[16.76px] text-[#696969] font-normal capitalize text-center">
              {Blog.author}
            </h1>
          </div>
          <div className="flex gap-1 mb-1">
            <span>
              <RiMessage2Line size={30} color="#FCC400" />
            </span>
            <h1 className="text-[16.76px] text-[#696969] font-normal capitalize">
              {Blog.comments}
            </h1>
          </div>
        </div>
        <div className="grid gap-3">
          <p className="text-[17px] text-[#696969] font-normal">
            {Blog.Paragraph}
          </p>
          <p className="text-[17px] text-[#696969] font-normal">
            {Blog.Paragraph2}
          </p>
        </div>
        <div>
          <h1 className="text-[50px] text-[#000000] font-semibold capitalize">
            02 Comments
          </h1>
          <div className="grid gap-3">
            <div className="flex gap-4">
              <section>
                <Image
                  src={Blog.Image}
                  width={181.88}
                  height={143.22}
                  alt="no image"
                />
              </section>
              <section className="grid">
                <div className="grid">
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <h1 className="text-[17px] text-[#696969] font-normal">
                        Sk Thakur{" "}
                      </h1>
                      <h1 className="text-[17px] text-[#696969] font-normal">
                        14 June, 2018 - 14:20 PM
                      </h1>
                    </div>
                    <div>
                      <button className="text-[17px] text-[#FFFFFF] font-semibold bg-[#FDC107] w-[84.51px] h-[33.78px]">
                        REPLY
                      </button>
                    </div>
                  </div>
                  <div className="w-[586.90px] border-b border-b-[#696969]">
                    <p className="text-[17px] text-[#696969] font-normal capitalize">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.{" "}
                    </p>
                  </div>
                </div>
              </section>
            </div>

            <div className="flex gap-4">
              <section>
                <Image
                  src={Blog.Image}
                  width={181.88}
                  height={143.22}
                  alt="no image"
                />
              </section>
              <section className="grid">
                <div className="grid">
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <h1 className="text-[17px] text-[#696969] font-normal">
                        Sk Thakur{" "}
                      </h1>
                      <h1 className="text-[17px] text-[#696969] font-normal">
                        14 June, 2018 - 14:20 PM
                      </h1>
                    </div>
                    <div>
                      <button className="text-[17px] text-[#FFFFFF] font-semibold bg-[#FDC107] w-[84.51px] h-[33.78px]">
                        REPLY
                      </button>
                    </div>
                  </div>
                  <div className="w-[586.90px] border-b border-b-[#696969]">
                    <p className="text-[17px] text-[#696969] font-normal capitalize">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.{" "}
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="pt-[50px]">
          <h1 className="text-[50px] text-[#000000] font-semibold capitalize">
            Leave a Reply
          </h1>
          <p className="text-[17px] text-[#696969] font-normal capitalize">
          Your email address will not be published. Required fields 
          </p>
          <form action="">
            <div className="flex gap-[46px]">
            <input type="text" name="" id="" placeholder="Your Name" className="w-[272.30px] h-[57.96px] bg-[#D5D5D559] text-[19px] text-[#696969] font-normal capitalize focus:outline-none p-3"/>
            <input type="email" name="" id="" placeholder="Your Email" className="w-[272.30px] h-[57.96px] bg-[#D5D5D559] text-[19px] text-[#696969] font-normal capitalize focus:outline-none p-3"/>
            <input type="number" name="" id="" placeholder="Phone No." className="w-[272.30px] h-[57.96px] bg-[#D5D5D559] text-[19px] text-[#696969] font-normal capitalize focus:outline-none p-3"/>
            </div>
            <div className="pt-[20px]">
                <textarea name="" id="" placeholder="Your Comments" className="w-[863.25px] h-[146.9px] bg-[#D5D5D559] text-[19px] text-[#696969] font-normal capitalize focus:outline-none p-3"></textarea>
            </div>
            <div className="pt-[20px]">
                <button className="w-[155.69px] h-[46.45px] bg-[#FDC107] font-semibold text-[19px] text-[#FFFFFF] rounded-[23.23px]">Submit</button>
            </div>
            
          </form>
        </div>
      </div>
    </>
  );
};

export default BlogDetailBody;
