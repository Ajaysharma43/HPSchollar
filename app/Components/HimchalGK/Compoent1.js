"use client";
import { useState } from "react";
import Image from "next/image";
import Image1 from "@/public/Assests/HimchalGK/image 4.png";
import Image2 from '@/public/Assests/HimchalGK/ashwini-chaudhary-monty-EEsqZyA8b0E-unsplash.jpg'
import Image3 from '@/public/Assests/HimchalGK/naman-pandey-y3nWJ-QznP4-unsplash.jpg'
import Image4 from '@/public/Assests/HimchalGK/rishabh-pandoh-m1PFxGQ-5x0-unsplash.jpg'
import { GrNext , GrPrevious  } from "react-icons/gr";

const Component1 = () => {
    const images = [Image1, Image2, Image3 , Image4];
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="w-full px-0 sm:px-4 lg:px-6 py-6">
            <div className="max-w-3xl">
                {/* Section Title */}
                <h2 className="text-[22px] sm:text-[24px] font-bold mb-4">
                    GK Of Himachal Pradesh
                </h2>

                {/* Manual Image Slider */}
                <div className="relative w-full h-[200px] sm:h-[280px] md:h-[320px] lg:h-[360px] overflow-hidden mb-6">
                    <Image
                        src={images[current]}
                        alt={`Slide ${current + 1}`}
                        fill
                        className="object-cover"
                    />

                   {/* Prev Button */}
                             <button
                               onClick={prevSlide}
                               className="absolute top-1/2 transform -translate-y-1/2 z-10 w-[61.69px] h-[76.79px]"
                             >
                               <div
                                 className="flex items-center justify-center sm:w-[61.69px] sm:h-[76.79px] w-[31.69px] h-[46.79px] bg-[#FFFFFF5E] text-[#FDC107] text-[18px] sm:text-[28px] font-bold"
                               >
                                 <GrPrevious/>
                               </div>
                             </button>
                   
                             {/* Next Button */}
                             <button
                               onClick={nextSlide}
                               className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10"
                             >
                               <div
                                 className="flex items-center justify-center sm:w-[61.69px] sm:h-[76.79px] w-[31.69px] h-[46.79px] bg-[#FFFFFF5E] text-[#FDC107] text-[18px] sm:text-[28px] font-bold"
                               >
                                 <GrNext/>
                               </div>
                             </button>

                </div>

                {/* Intro Paragraph */}
                <p className="text-[14px] text-[#444] mb-6 leading-relaxed">
                    It is a long established fact that a reader will be distracted by the readable content
                    of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to using &apos;Content here, content
                    here&apos;, making it look like readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem
                    ipsum&apos; will uncover many web sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>


                {/* GK Topics */}
                <div className="space-y-5">
                    {/* Topic 1 */}
                    <div>
                        <h4 className="font-bold text-[15px] mb-1">
                            HP GK - Himachal Pradesh General Knowledge: Organisation Of H.P
                        </h4>
                        <p className="text-[14px] text-[#444]">
                            It is a long established fact that a reader will be distracted by the readable content
                            of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters.
                        </p>
                    </div>

                    {/* Topic 2 */}
                    <div>
                        <h4 className="font-bold text-[15px] mb-1">
                            HP GK - Himachal Pradesh General Knowledge: Rivers
                        </h4>
                        <p className="text-[14px] text-[#444]">
                            It is a long established fact that a reader will be distracted by the readable content
                            of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters.
                        </p>
                    </div>

                    {/* Topic 3 */}
                    <div>
                        <h4 className="font-bold text-[15px] mb-1">
                            HP GK - Himachal Pradesh General Knowledge: Districts
                        </h4>
                        <p className="text-[14px] text-[#444]">
                            It is a long established fact that a reader will be distracted by the readable content
                            of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Component1;
