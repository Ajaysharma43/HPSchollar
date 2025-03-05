import Image1 from "@/public/Assests/Homapage/home1-lastestnews-1 1.png"
import Image2 from "@/public/Assests/Homapage/home1-lastestnews-2 1.png"
import Image3 from "@/public/Assests/Homapage/bg16 1.png"
import { RiMessage2Line } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image"
const Blog_Component = () => {
    return(
        <>
        <div className="flex flex-col justify-center items-center">
            <div>
                <Image src={Image1} width={384.52} height={356.27} alt="no image"/>
            </div>
            <div className="w-[343.41px] h-[232.06px] rounded-lg shadow-2xl relative bottom-[100px] bg-[#FFFFFF] p-6">
                <div className="flex justify-center gap-2 pb-2">
                    <div className="flex">
                        <span><FaRegUserCircle size={20} color="#FCC400"/></span>
                        <h1 className="text-[16.76px] text-[#696969] font-normal capitalize">By admin</h1>
                    </div>
                    <div className="flex">
                        <span><RiMessage2Line size={20} color="#FCC400"/></span>
                    <h1 className="text-[16.76px] text-[#696969] font-normal capitalize">1 comment</h1>
                    </div>
                </div>
                <div className="border-b-2 border-[#D5D5D5]">
                    <p className="text-[19.72px] text-[#292929] leading-[33.53px] font-semibold">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="flex justify-center gap-[100px] p-4">
                    <div><button className="text-[17.75px] text-[#FCC400] font-normal capitalize">Read more</button></div>
                    <div><span><FaArrowRightLong/></span></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Blog_Component