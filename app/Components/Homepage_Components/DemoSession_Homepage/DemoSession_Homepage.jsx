import Banner from "@/public/Assests/Homapage/Rectangle 172.png";

const DemoSession_Homepage = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url("${Banner.src}")` }}
        className="w-full h-[614.77px] bg-cover bg-center"
      >
        <div className="w-fit sm:w-[494.85px] flex flex-col gap-3 ml-[50px] sm:ml-[150px] pt-[200px]">
          <h1 className="text-[20px] sm:text-[25px] text-[#FCC400] font-medium uppercase">
            demo session
          </h1>
          <p className="text-[30px] sm:text-[50px] text-[#000000] font-semibold uppercase leading-[35px] sm:leading-[58.7px]">
            Book your free demo session
          </p>
          <p className="text-[14px] sm:text-[16px] text-[#696969] font-normal leading-[20px] sm:leading-[26px]">
            Get a free academic counselling session
          </p>
          <button className="w-[200px] sm:w-[262px] h-[50px] sm:h-[60px] text-[18px] sm:text-[22px] text-[#FFFFFF] bg-[#FCC400] font-medium rounded-[150px] mt-6">
            Book a free demo
          </button>
        </div>
      </div>
    </>
  );
};

export default DemoSession_Homepage;