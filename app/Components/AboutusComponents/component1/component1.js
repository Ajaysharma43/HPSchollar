import Image from "next/image";
import image1 from '@/public/Assests/AboutUs/img-4 1.png';
import image2 from '@/public/Assests/AboutUs/img-6 1.png';
import image3 from '@/public/Assests/AboutUs/img-5 1.png';

const AboutusComponent1 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-start px-4 sm:px-6 lg:px-16 py-12 gap-10 lg:gap-4">
      {/* Left Content */}
      <div className="w-full max-w-[600px]">
        <h2 className="text-[32px] md:text-[40px] font-extrabold text-black leading-tight">
          We Are Providing The Best <br /> The Best Online Course
        </h2>
        <p className="mt-5 text-[#444444] text-[16px] leading-relaxed">
          Integer at lobortis magna. Nulla sed velit cursus, tincidunt arcu non, 
          aliquam justo. Etiam tincidunt ex maximus porttit commodo. Aenean cursus 
          ex ut magna volutpat, vel dictum quam vestibulum. Mauris eget metus nec 
          ligula laoreet congue ut at felis. Mauris rhoncus Integer at lobortis magna. 
          Nulla sed velit cursus, tincidunt arcu non, aliquam justo. Etiam tincidunt ex maximus
        </p>
      </div>

      {/* Responsive Image Layout */}
      <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-5">
        {/* Mobile View */}
        <div className="flex sm:hidden flex-col gap-4 w-full">
          <div className="relative w-full h-[220px]">
            <Image src={image1} alt="Main course image" fill className="object-cover" />
          </div>
          <div className="relative w-full h-[180px]">
            <Image src={image2} alt="Side course image 1" fill className="object-cover" />
          </div>
          <div className="relative w-full h-[180px]">
            <Image src={image3} alt="Side course image 2" fill className="object-cover" />
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden sm:flex gap-5">
          <div className="w-[240px] h-[280px] relative overflow-hidden">
            <Image src={image1} alt="Main course image" fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-5">
            <div className="w-[140px] h-[130px] relative overflow-hidden">
              <Image src={image2} alt="Side course image 1" fill className="object-cover" />
            </div>
            <div className="w-[140px] h-[130px] relative overflow-hidden">
              <Image src={image3} alt="Side course image 2" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutusComponent1;
