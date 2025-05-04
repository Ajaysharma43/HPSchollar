"use client";
import Image from "next/image";
import Image1 from '@/public/Assests/TestSeries/SSC_All_1594144442 1.png';

const TestSeriesComponent1 = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 py-6">
      {/* Search Input */}
      <div className="flex items-center border border-[#c9c9c9] rounded-sm px-3 py-2 w-full sm:w-[653px] bg-[#F8F3E9]">
        <input
          type="text"
          placeholder="Search For Your Exam"
          className="w-full bg-transparent focus:outline-none text-sm"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 text-[#603913]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
          />
        </svg>
      </div>
      <p className="text-xs text-[#666] mt-2">814+ Exams Covered. Which Exam Are You Preparing For?</p>

      {/* Test Series Cards */}
      <div className="space-y-10 mt-6">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="border-b border-dashed pb-8">
            <div className="flex gap-6 items-start">
              <Image src={Image1} alt="ssc" width={70} height={70} className="object-contain" />
              <div className="space-y-2">
                <h3 className="font-bold text-sm sm:text-base">
                  SSC CGL (Tier I & Tier II) Mock Test 2024
                </h3>
                <p className="text-xs text-[#333]">
                  995 Total Tests <span className="text-[#FDC107] font-semibold">| 7 Free Tests</span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-2 gap-[100px] text-[13px] text-[#444]">
                  <p>• 2 Mission CGL</p>
                  <p>• 14 Static GK</p>
                  <p>• 66 Current Affairs</p>
                  <p>• 2 Mission CGL</p>
                  <p>• 14 Static GK</p>
                  <p>• 66 Current Affairs</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestSeriesComponent1;