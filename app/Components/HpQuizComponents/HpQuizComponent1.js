"use client";
import { useState } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import Image1 from '@/public/Assests/HimchalGK/image 4.png';

const faqs = [
    "How long is the course?",
    "What topics are covered?",
    "Is there a certificate after completion?",
    "Can I access quizzes on mobile?",
    "Are these quizzes free?",
    "How often is the content updated?",
];

const HpQuizComponent1 = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="px-4 sm:px-6 lg:px-16 py-10 max-w-screen-xl mx-auto mb-[100px]">
            {/* Heading */}
            <h1 className="text-[20px] sm:text-[24px] font-bold mb-4">
                Quiz Of Himachal Pradesh
            </h1>

            {/* Paragraphs */}
            {/* Paragraphs */}
            <div className="space-y-6 text-[15px] text-[#444] leading-[26px] text-justify mb-10">
                <p>
                    It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout.
                    The Point Of Using Lorem Ipsum Is That It Has A More-Or-Less Normal Distribution Of Letters, &nbsp;
                    It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout.
                    The Point Of Using Lorem Ipsum Is That It Has A More-Or-Less Normal Distribution Of Letters,
                </p>
                <p>
                    It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout.
                    The Point Of Using Lorem Ipsum Is That It Has A More-Or-Less Normal Distribution Of Letters, &nbsp;
                    It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout.
                    The Point Of Using Lorem Ipsum Is That It Has A More-Or-Less Normal Distribution Of Letters,
                </p>
            </div>


            {/* Image */}
            <div className="w-full h-full mb-10">
                <Image
                    src={Image1}
                    height={434}
                    alt="Quiz Illustration"
                    className="w-full h-full md:h-[454.42px]"
                />
            </div>

            {/* FAQ Heading */}
            <h2 className="text-[20px] sm:text-[24px] font-bold text-center mb-6">
                Frequently Asked Questions (FAQs)
            </h2>

            {/* FAQ Accordion */}
            <div className="space-y-4">
                {faqs.map((question, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <div
                            key={index}
                            className="border border-[#DADCE0] rounded-[8px] bg-white px-4 py-3 transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex w-full justify-between items-center cursor-pointer text-[14px] font-medium text-[#444] group transition-all"
                            >
                                <span className={`transition-colors ${isOpen ? "text-[#1A73E8] font-semibold" : ""}`}>
                                    {question}
                                </span>
                                <span
                                    className={`w-6 h-6 flex items-center justify-center text-[18px] text-white bg-[#0086FC] rounded-full transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                        }`}
                                >
                                    <IoIosArrowDown />
                                </span>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[200px] mt-3" : "max-h-0 mt-0"
                                    }`}
                            >
                                <p className="text-[13px] text-[#5F6368] leading-relaxed">
                                    Elit ante eros id sem rhoncus, varius tempor augue aliquet. Quisque fringilla
                                    congue faucibus. Mauris dui nisl, malesuada non est non, laoreet mollis diam.
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HpQuizComponent1;
