"use client";
import { useState } from "react";
import Image from "next/image";
import Image1 from "@/public/Assests/HimchalGK/image 4.png"; // Add more images if needed

const Component1 = () => {
    const images = [Image1, Image1, Image1]; // Add real images here
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

                    {/* Left Button */}

                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 w-[61.69px] h-[76.79px]"
                    >
                        <div
                            className="flex items-center justify-center"
                            style={{
                                width: "61.69px",
                                height: "76.79px",
                                backgroundColor: "#FFFFFF5E",
                                borderRadius: "8px", // slight rounding
                                color: "#FDC107",
                                fontSize: "28px"
                            }}
                        >
                            ‹
                        </div>
                    </button>

                    {/* Right Button */}
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10"
                    >
                        <div
                            className="flex items-center justify-center"
                            style={{
                                width: "61.69px",
                                height: "76.79px",
                                backgroundColor: "#FFFFFF5E",
                                borderRadius: "8px",
                                color: "#FDC107",
                                fontSize: "28px"
                            }}
                        >
                            ›
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
