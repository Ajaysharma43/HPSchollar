import Image from "next/image";
import Image1 from "@/public/Assests/Homapage/Rectangle 174.png";
import Image2 from "@/public/Assests/Homapage/Rectangle 175 (1).png";

const Homapage_AboutUs = () => {
  return (
    <>
      <div className="flex flex-wrap gap-3 justify-center p-3">
        <section className="flex flex-col md:flex-row items-center">
          <Image
            src={Image1}
            width={364.1934814453125}
            height={531.4886474609375}
            alt="no image"
            className="rounded-[20px] w-full md:w-auto"
          />
          <Image
            src={Image2}
            width={364.1934814453125}
            height={531.4886474609375}
            alt="no image"
            className="rounded-[20px] relative bottom-[200px] md:top-28 md:right-24 w-[300px] md:w-auto"
          />
        </section>

        <section className="relative bottom-[170px] md:top-16 text-center md:text-left">
          <h1 className="text-[24.66px] font-medium text-[#FCC400]">About us</h1>
          <h1 className="text-[30px] md:text-[49.32px] font-bold w-full md:w-[326.43548583984375px] leading-[35px] md:leading-[57.9px]">
            Know more about us
          </h1>
          <p className="font-normal text-[14px] md:text-[16px] md:w-[475.13043212890625px] text-[#696969] leading-[24px] md:leading-[30.4px] w-auto">
            Cras arcu eros, hendrerit et metus a, consequat mattis ipsu. Vestibulum dignissim magna vel velit bibendum porttitor. Nam sed felis ac purus varius ultricies et sagittis ipsum. Nullam volutpat sem ante, eu pharetra ligula tempus id. Morbi tincidunt, ligula sit amet bibendum iaculis, orci sapi lacinia urna, non tincidunt dui ex eu ante. Suspendisse eros sem, lobortis volutpat porttitor a, iaculis eget dui. Quisque auctor quam efficitur, semper turpis vitae, semper arcu.
          </p>
          <button className="w-[201.24000549316406px] h-[50px] md:h-[59.18114471435547px] bg-[#FCC400] rounded-[147.95px] text-white text-[16px] md:text-[20px] mt-4 md:mt-0">
            Read More
          </button>
        </section>
      </div>
    </>
  );
};

export default Homapage_AboutUs;