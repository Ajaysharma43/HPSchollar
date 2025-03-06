import Banner from "@/public/Assests/Blog/banner-bg 1.png"
import Image from "next/image";
const Blog_Header = () => {
    return(
        <>
        <div style={{backgroundImage : `url("${Banner.src}")`}} className="bg-cover bg-no-repeat">
            hello
        </div>
        </>
    )
}

export default Blog_Header;