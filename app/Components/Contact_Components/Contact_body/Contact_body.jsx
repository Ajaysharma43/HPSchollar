const Contact_Body = () => {
    return (
      <>
        <div className="grid justify-center text-center px-4">
          <h1 className="text-[50px] text-[#2E2E2E] font-bold">Contact Us</h1>
          <p className="text-[17px] text-[#696969] font-normal capitalize">
            Fill the form below so we can get to know you and your needs better.
          </p>
  
          <form
            action=""
            className="grid gap-[30px] mt-[20px] mb-[20px] justify-center"
          >
            <div className="flex flex-wrap gap-[30px] sm:gap-[60px] flex-col sm:flex-row">
              <input
                type="text"
                name=""
                id=""
                placeholder="Your Name"
                className="w-full sm:w-[527.19px] h-[75.19px] bg-[#FCC4001A] text-[19px] text-[#000000] font-normal focus:outline-none placeholder:text-black pl-[20px]"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Your Email"
                className="w-full sm:w-[527.19px] h-[75.19px] bg-[#FCC4001A] text-[19px] text-[#000000] font-normal focus:outline-none placeholder:text-black pl-[20px]"
              />
            </div>
  
            <div className="flex flex-wrap gap-[30px] sm:gap-[60px] flex-col sm:flex-row">
              <input
                type="text"
                name=""
                id=""
                placeholder="Phone No."
                className="w-full sm:w-[527.19px] h-[75.19px] bg-[#FCC4001A] text-[19px] text-[#000000] font-normal focus:outline-none placeholder:text-black pl-[20px]"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Subject"
                className="w-full sm:w-[527.19px] h-[75.19px] bg-[#FCC4001A] text-[19px] text-[#000000] font-normal focus:outline-none placeholder:text-black pl-[20px]"
              />
            </div>
  
            <textarea
              name=""
              id=""
              placeholder="Your Comments"
              className="w-full sm:w-[1119.87px] h-[190.67px] bg-[#FCC4001A] text-[19px] text-[#000000] font-normal focus:outline-none placeholder:text-black pl-[20px] pt-[20px]"
            />
  
            <div className="flex justify-center mt-[20px]">
              <button className="w-full sm:w-[201.98px] h-[60.26px] bg-[#FCC400] text-[19px] text-[#FFFFFF] font-semibold rounded-[23.23px]">
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    );
  };
  
  export default Contact_Body;