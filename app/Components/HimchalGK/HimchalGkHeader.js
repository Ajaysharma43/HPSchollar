import Banner from "@/public/Assests/HimchalGK/banner-bg 2 (1).png"
import { FaGreaterThan } from "react-icons/fa6";
const HimachalGkHeader = () => {
    return(
        <>
        <div style={{backgroundImage : `url("${Banner.src}")`}} className="bg-cover bg-no-repeat text-center pt-[100px] pb-[100px]">
                    <h1 className="text-[50px] text-[#FFFFFF] font-semibold uppercase">GK of Himachal </h1> 
                    
                    <div className="flex justify-center gap-2">
                        <h1 className="text-[20px] text-[#FFFFFF] font-normal capitalize">home</h1>
                        <h1 className="text-[20px] text-[#FFFFFF] font-normal  mt-[5px]"><FaGreaterThan/></h1>
                        <h1 className="text-[20px] text-[#FDC107] font-normal capitalize">GK of Himachal</h1>
                    </div>
                </div>
        </>
    )
}

export default HimachalGkHeader;