import Image from "next/image";
import result from "@/public/Assests/Homapage/13705636_2011.i518.015.realistic test paper pencil [Converted] 1.png";

const Paper_Component = () => {
  return (
    <>
      <div className="pt-[100px] pb-[100px] w-full md:w-[1208.59px] grid justify-center items-center">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="text-center md:text-left">
            <h1 className="text-[24.66px] leading-[64.8px] font-medium text-[#FCC400]">
              All Exam Important Questions
            </h1>
            <p className="text-[30px] md:text-[50px] leading-[57.9px] font-bold text-[#000000]">
              All Exam Important Questions
            </p>
          </div>
          <div className="mt-[20px]">
            <button className="w-[209.37px] h-[59.18px] bg-[#FCC400] rounded-[147.95px] text-[20px] font-medium text-[#FFFFFF]">
              Explore all exam
            </button>
          </div>
        </div>
        <div className="flex flex-wrap md:justify-start justify-center gap-2 pt-3">
          <button className="w-[116.40px] h-[40px] text-[15px] rounded-[10px] shadow-lg font-medium bg-[#FCC400] text-[#FFFFFF]">
            UPSC
          </button>
          <button className="w-[116.40px] h-[40px] text-[15px] rounded-[10px] shadow-lg font-medium bg-[#F7F7F7] text-[#696969]">
          SSC CHSL
          </button>
          <button className="w-[116.40px] h-[40px] text-[15px] rounded-[10px] shadow-lg font-medium bg-[#F7F7F7] text-[#696969]">
          SSC CPO
          </button>
          <button className="w-[116.40px] h-[40px] text-[15px] rounded-[10px] shadow-lg font-medium bg-[#F7F7F7] text-[#696969]">
          DELHI POLICE
          </button>
          <button className="w-[116.40px] h-[40px] text-[15px] rounded-[10px] shadow-lg font-medium bg-[#F7F7F7] text-[#696969]">
          HAS
          </button>
          <button className="w-[116.40px] h-[40px] text-[15px] rounded-[10px] shadow-lg font-medium bg-[#F7F7F7] text-[#696969]">
          HP ALLIED
          </button>
          <button className="w-[116.40px] h-[40px] text-[15px] rounded-[10px] shadow-lg font-medium bg-[#F7F7F7] text-[#696969]">
          HP POLICE
          </button>
          <button className="w-[116.40px] h-[40px] text-[15px] rounded-[10px] shadow-lg font-medium bg-[#F7F7F7] text-[#696969]">
          TGT
          </button>
          <button className="w-[116.40px] h-[40px] text-[15px] rounded-[10px] shadow-lg font-medium bg-[#F7F7F7] text-[#696969]">
          JBT
          </button>
          <button className="w-[116.40px] h-[40px] text-[15px] rounded-[10px] shadow-lg font-medium bg-[#F7F7F7] text-[#696969]">
          JOA
          </button>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-5 rounded-lg mt-10">
          <div className="w-[286.53px] h-[304.77px] bg-[#5AB9431A] grid justify-center border border-solid border-[#C8C8C8] rounded-lg shadow-xl">
            <div className="text-left p-2">
              <h1 className="text-[25px] font-medium leading-[33px]">
                Revision notes
              </h1>
            </div>
            <div className="border-8 border-[#5AB943] w-[157.8px] h-[161.3px] rounded-full mx-auto">
              <Image
                src={result}
                height={154.35}
                width={164.16}
                alt="no image"
                className="mt-[30px] rounded-b-full"
              />
            </div>
          </div>

          <div className="w-[286.53px] h-[304.77px] bg-[#FCC4000D] grid justify-center border border-solid border-[#C8C8C8] rounded-lg shadow-xl">
            <div className="text-left p-2">
              <h1 className="text-[25px] font-medium leading-[33px] w-[213.64px]">
                Important question papers
              </h1>
            </div>
            <div className="border-8 border-[#FCC400] w-[157.8px] h-[161.3px] rounded-full mx-auto ">
              <Image
                src={result}
                height={154.35}
                width={164.16}
                alt="no image"
                className="mt-[30px] rounded-b-full"
              />
            </div>
          </div>

          <div className="w-[286.53px] h-[304.77px] bg-[#5AB9431A] grid justify-center border border-solid border-[#C8C8C8] rounded-lg shadow-xl">
            <div className="text-left p-2">
              <h1 className="text-[25px] font-medium leading-[30.4px] w-[213.64px]">
                Previous year question papers
              </h1>
            </div>
            <div className="border-8 border-[#5AB943] w-[157.8px] h-[161.3px] rounded-full mx-auto">
              <Image
                src={result}
                height={154.35}
                width={164.16}
                alt="no image"
                className="mt-[30px] rounded-b-full"
              />
            </div>
          </div>

          <div className="w-[286.53px] h-[304.77px] bg-[#FCC4000D] grid justify-center border border-solid border-[#C8C8C8] rounded-lg shadow-xl">
            <div className="text-left p-2">
              <h1 className="text-[25px] font-medium leading-[30.4px] w-[213.64px]">
                Sample question papers
              </h1>
            </div>
            <div className="border-8 border-[#FCC400] w-[157.8px] h-[161.3px] rounded-full mx-auto">
              <Image
                src={result}
                height={154.35}
                width={164.16}
                alt="no image"
                className="mt-[30px] rounded-b-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Paper_Component;
