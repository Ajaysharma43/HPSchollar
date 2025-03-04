import Banner from "@/public/Assests/Homapage/Group 1000006403.png";

const HomePage_Banner = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url('${Banner.src}')` }}
        className="bg-cover h-full w-full pt-[150px] pb-[150px] grid justify-center items-center"
      >
        <div className="text-center px-4 w-full grid justify-center">
          <h1 className="text-[25px] font-medium text-[#FCC400] leading-[65.7px]">
            HP Quiz
          </h1>
          <h1 className="text-[30px] md:text-[50px] leading-[40px] md:leading-[75.4px] font-semibold text-[#FFFFFF] uppercase w-full md:w-[60%] mx-auto">
            Limitless learning, limitless possibilities
          </h1>
          <div className="flex justify-center mt-4">
            <button className="w-[200px] md:w-[254.41px] h-[50px] md:h-[59.09px] bg-[#FCC400] text-[18px] md:text-[21.67px] text-[#FFFFFF] rounded-[147.74px] font-medium">
              View All Quizzes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage_Banner;