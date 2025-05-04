"use client";
import Image from "next/image";
import Logo1 from "@/public/Assests/Contact/4783013_canada_location_map_icon 1.png";
import Logo2 from "@/public/Assests/Contact/Group 1000006490 (1).png";
import Logo3 from "@/public/Assests/Contact/4295556_lapse_time_availability_date_day_icon 1.png";

const Contact_Cards = () => {
  return (
    <article className="flex flex-wrap justify-center gap-6 md:gap-10 py-10">
      {/* Address Card */}
      <section className="flex flex-col items-center text-center bg-white shadow-lg rounded-xl p-6 w-[320px] md:w-[360px] hover:shadow-xl transition">
        <Image src={Logo1} alt="Address icon" className="w-[70px] h-[70px]" />
        <h1 className="text-[18px] font-semibold mt-4 text-black">Address Way</h1>
        <p className="text-[16px] text-[#696969] mt-2 leading-relaxed">
          Village Bhatehr P.O <br />
          Jaswan Distt Kangra (HP)
        </p>
      </section>

      {/* Contact Info Card */}
      <section className="flex flex-col items-center text-center bg-white shadow-lg rounded-xl p-6 w-[320px] md:w-[360px] hover:shadow-xl transition">
        <Image src={Logo2} alt="Contact icon" className="w-[70px] h-[70px]" />
        <h1 className="text-[18px] font-semibold mt-4 text-black">Contact Info</h1>
        <p className="text-[16px] text-[#696969] mt-2 leading-relaxed">
          Mobile: +91 9000087654<br />
          Mail: himsanskrit@gmail.com
        </p>
      </section>

      {/* Work Timer Card */}
      <section className="flex flex-col items-center text-center bg-white shadow-lg rounded-xl p-6 w-[320px] md:w-[360px] hover:shadow-xl transition">
        <Image src={Logo3} alt="Timer icon" className="w-[70px] h-[70px]" />
        <h1 className="text-[18px] font-semibold mt-4 text-black">Work Timer</h1>
        <p className="text-[16px] text-[#696969] mt-2 leading-relaxed">
          Monday - Friday: 09:00 - 20:00 <br />
          Sunday & Saturday: 10:30 - 22:00
        </p>
      </section>
    </article>
  );
};

export default Contact_Cards;
