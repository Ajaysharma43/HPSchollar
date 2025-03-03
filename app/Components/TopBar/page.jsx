import { SlEnvolope } from "react-icons/sl";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";


const TopBar = () => {
  return (
    <>
      <nav className="flex flex-wrap justify-center gap-[50%] pt-3 pb-3 text-white bg-[#292929] p-2">
        <section className="flex gap-1 flex-wrap">
          <div className="flex flex-wrap break-words whitespace-pre-wrap">
            <span className=" m-1">
              <MdOutlinePhoneIphone size={20} />
            </span>
            <h1>+91 9000087654</h1>
          </div>
          <span className="bg-white w-[1px] h-[15px] mt-1"></span>
          <div className="flex flex-wrap">
            <span className="m-1">
              <SlEnvolope size={20} />
            </span>
            <h1>himsanskrit@gmail.com</h1>
          </div>
        </section>

        <section className="flex gap-1">
          <div className="flex">
            <span className=" m-1"><FaUser/></span>
            <h1>Login</h1>
          </div>
          <div className="bg-white w-[1px] h-[15px] mt-1"></div>
          <div className="flex">
          <span className="m-1"><HiOutlinePencilSquare/></span>
          <h1>Register</h1>
          </div>
        </section>
      </nav>
    </>
  );
};

export default TopBar;
