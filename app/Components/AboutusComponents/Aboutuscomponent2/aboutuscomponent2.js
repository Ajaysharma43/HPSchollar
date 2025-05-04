import Image from "next/image";
import Image1 from "@/public/Assests/AboutUs/img-3 1.png";
import Logo1 from "@/public/Assests/AboutUs/4308175_business_human_leadership_management_organization_icon 1.png";
import Logo2 from "@/public/Assests/AboutUs/4308175_business_human_leadership_management_organization_icon 2.png";
import Logo3 from "@/public/Assests/AboutUs/3200448_centre_support_service_drawn_men_icon 1.png";

const AboutusComponent2 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-evenly px-4 sm:px-8 lg:px-20 py-12 ml-3">
      {/* Left: Main Image */}
      <div className="w-full lg:w-auto flex justify-center">
        <div className="relative w-full h-[400px] sm:h-[500px] lg:w-[527.92px] lg:h-[638.79px]">
          <Image
            src={Image1}
            alt="Students"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Right: Content */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-[28px] sm:text-[34px] font-extrabold text-black mb-8">
          Best Online Learning Platform
        </h2>

        {/* Feature 1 */}
        <div className="flex items-start gap-4 mb-6">
          <div style={{ width: "70.54px", height: "68.68px" }}>
            <Image src={Logo1} alt="High Quality Resources" width={70.54} height={68.68} />
          </div>
          <div>
            <h4 className="text-[18px] font-semibold text-black">
              High Quality Resources
            </h4>
            <p className="text-[#444] text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-start gap-4 mb-6">
          <div style={{ width: "70.54px", height: "68.68px" }}>
            <Image src={Logo2} alt="Expert Instructor" width={70.54} height={68.68} />
          </div>
          <div>
            <h4 className="text-[18px] font-semibold text-black">
              Expert Instructor
            </h4>
            <p className="text-[#444] text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-start gap-4">
          <div style={{ width: "70.54px", height: "68.68px" }}>
            <Image src={Logo3} alt="Dedicated Support" width={70.54} height={68.68} />
          </div>
          <div>
            <h4 className="text-[18px] font-semibold text-black">
              Dedicated Support
            </h4>
            <p className="text-[#444] text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutusComponent2;
