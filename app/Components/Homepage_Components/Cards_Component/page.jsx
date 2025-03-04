import Image from "next/image";
import Education_Icon from "@/public/Assests/Homapage/HomapageIcons/slide-bottom-01 1.png";
import Learn_Icon from "@/public/Assests/Homapage/HomapageIcons/slide-bottom-02 1.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const Cards_Component = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-[30px] bg-[#FFFFFF] md:w-[1207.563232421875px] rounded-3xl pt-10 relative bottom-20 p-5">
        <section className="bg-[#292929] w-auto md:w-[341.61566162109375px] h-[172.69000244140625px] rounded-[10px] text-center flex flex-col items-center justify-center">
          <Image
            src={Education_Icon}
            width={44.39681625366211}
            height={42.06013870239258}
            alt="no image"
          />
          <h1 className="text-[#FFFFFF] text-[16px] font-semibold">
            Professional Teachers
          </h1>
          <p className="text-[13px] font-normal w-[264.06634521484375px] text-[#FFFFFF]">
            Lorem ipsum dolor sit amet, consectetur adipisg elit, sed do eiusmod
          </p>
          <h1 className="flex text-[#FFFFFF] text-[14px] font-medium">
            READ MORE <FaLongArrowAltRight className="mt-1" />
          </h1>
        </section>
        <section className="bg-[#5AB943] w-auto md:w-[341.61566162109375px] h-[172.69000244140625px] rounded-[10px] text-center flex flex-col items-center justify-center">
          <Image
            src={Learn_Icon}
            width={44.39681625366211}
            height={42.06013870239258}
            alt="no image"
          />
          <h1 className="text-[#FFFFFF] text-[16px] font-semibold">
            Learn Anywhere Online
          </h1>
          <p className="text-[13px] font-normal w-[264.06634521484375px] text-[#FFFFFF]">
            Lorem ipsum dolor sit amet, consectetur adipisg elit, sed do eiusmod
          </p>
          <h1 className="flex text-[#FFFFFF] text-[14px] font-medium">
            READ MORE <FaLongArrowAltRight className="mt-1" />
          </h1>
        </section>
        <section className="bg-[#FCC400] w-auto  md:w-[341.61566162109375px] h-[172.69000244140625px] rounded-[10px] text-center flex flex-col items-center justify-center">
          <Image
            src={Education_Icon}
            width={44.39681625366211}
            height={42.06013870239258}
            alt="no image"
          />
          <h1 className="text-[#FFFFFF] text-[16px] font-semibold">
            Graduation Certificate
          </h1>
          <p className="text-[13px] font-normal w-[264.06634521484375px] text-[#FFFFFF]">
            Lorem ipsum dolor sit amet, consectetur adipisg elit, sed do eiusmod
          </p>
          <h1 className="flex text-[#FFFFFF] text-[14px] font-medium">
            READ MORE <FaLongArrowAltRight className="mt-1" />
          </h1>
        </section>
      </div>
    </>
  );
};

export default Cards_Component;
