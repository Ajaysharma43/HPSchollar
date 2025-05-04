const Contact_Body = () => {
  return (
    <div className="grid justify-center text-center px-4 py-10">
      <div className="w-full sm:max-w-[1200px] mx-auto">
        <h1 className="text-[40px] sm:text-[50px] text-[#2E2E2E] font-bold">
          Contact Us
        </h1>
        <p className="text-[16px] sm:text-[17px] text-[#696969] font-normal capitalize mt-1">
          Fill the form below so we can get to know you and your needs better.
        </p>

        <form className="grid gap-[25px] mt-[20px] mb-[20px] justify-center">
          {/* Name & Email */}
          <div className="flex flex-col sm:flex-row sm:gap-[40px] gap-[20px] sm:justify-center">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full sm:w-[340px] h-[55px] bg-[#FFF8E6] text-[16px] text-black placeholder:text-black px-4 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full sm:w-[340px] h-[55px] bg-[#FFF8E6] text-[16px] text-black placeholder:text-black px-4 focus:outline-none"
            />
          </div>

          {/* Phone & Subject */}
          <div className="flex flex-col sm:flex-row sm:gap-[40px] gap-[20px] sm:justify-center">
            <input
              type="text"
              placeholder="Phone No."
              className="w-full sm:w-[340px] h-[55px] bg-[#FFF8E6] text-[16px] text-black placeholder:text-black px-4 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full sm:w-[340px] h-[55px] bg-[#FFF8E6] text-[16px] text-black placeholder:text-black px-4 focus:outline-none"
            />
          </div>

          {/* Textarea */}
          <textarea
            placeholder="Your Comments"
            className="w-full sm:w-[720px] h-[160px] bg-[#FFF8E6] text-[16px] text-black placeholder:text-black px-4 pt-4 focus:outline-none"
          />

          {/* Button */}
          <div className="flex justify-center mt-[10px]">
            <button className="w-[120px] h-[40px] bg-[#FCC400] text-white text-[15px] font-medium rounded-[12px]">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact_Body;
