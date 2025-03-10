import Banner from "@/public/Assests/Blog/blog-lastestnews-1 1.png";
import Image from "next/image";
const BlogDetailBody2 = () => {
  return (
    <>
      <div className="grid gap-[20px]">
        <div className="grid gap-[10px]">
          <h1 className="text-[50px] text-[#000000] font-bold">CATEGORIES</h1>
          <h3 className="text-[32px] text-[#696969] font-normal">Blog</h3>
          <h3 className="text-[32px] text-[#696969] font-normal">Courses</h3>
          <h3 className="text-[32px] text-[#696969] font-normal">Brand</h3>
          <h3 className="text-[32px] text-[#696969] font-normal">Technology</h3>
          <h3 className="text-[32px] text-[#696969] font-normal">Campus</h3>
        </div>

        <div>
          <h1 className="text-[50px] text-[#000000] font-bold">LATEST NEWS</h1>
          <div className="grid gap-[20px]">
            <div className="w-[360.17px] flex gap-4">
              <div>
                <Image
                  src={Banner}
                  width={121.83}
                  height={105.06}
                  alt="no image"
                />
              </div>
              <div>
                <p className="text-[21px] leading-[30.4px] text-[#696969] font-semibold">
                  Class Aptent Socios Litora Torquent
                </p>
                <p className="text-[15px] leading-[30.4px] text-[#FDC107] font-semibold">
                  12 June, 2018
                </p>
              </div>
            </div>
            <div className="w-[360.17px] flex gap-4">
              <div>
                <Image
                  src={Banner}
                  width={121.83}
                  height={105.06}
                  alt="no image"
                />
              </div>
              <div>
                <p className="text-[21px] leading-[30.4px] text-[#696969] font-semibold">
                  Class Aptent Socios Litora Torquent
                </p>
                <p className="text-[15px] leading-[30.4px] text-[#FDC107] font-semibold">
                  12 June, 2018
                </p>
              </div>
            </div>
            <div className="w-[360.17px] flex gap-4">
              <div>
                <Image
                  src={Banner}
                  width={121.83}
                  height={105.06}
                  alt="no image"
                />
              </div>
              <div>
                <p className="text-[21px] leading-[30.4px] text-[#696969] font-semibold">
                  Class Aptent Socios Litora Torquent
                </p>
                <p className="text-[15px] leading-[30.4px] text-[#FDC107] font-semibold">
                  12 June, 2018
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailBody2;
