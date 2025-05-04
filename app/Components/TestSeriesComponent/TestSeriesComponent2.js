"use client";
import { useEffect, useState } from "react";

const TestSeriesComponent2 = () => {
  const categories = [
    "Teaching Exams", "SSC", "Railways", "Banking & Insurance", "Civil Services",
    "Police Exams", "TGT/PGT Exams", "ITI Exams",
    "Teaching Exams", "SSC", "Railways", "Banking & Insurance", "Civil Services"
  ];

  const [isOpen, setIsOpen] = useState(false);

  // Disable scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block bg-[#F8F3E9] w-full px-6 py-8 sm:w-[240px]">
        <h3 className="font-bold mb-4 text-sm">ALL</h3>
        <ul className="space-y-2 text-[13px] text-[#333]">
          {categories.map((cat, index) => (
            <li key={index}>{cat}</li>
          ))}
        </ul>
      </div>

      {/* Mobile Floating Button */}
      <div className="fixed bottom-4 left-4 lg:hidden z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#603913] text-white text-sm px-4 py-2 rounded-md shadow-md"
        >
          View Categories
        </button>
      </div>

      {/* Drawer for Mobile */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
          isOpen ? 'bg-[#11111124] backdrop-blur-sm' : 'pointer-events-none'
        }`}
      >
        <div
          className={`absolute right-0 top-0 h-full bg-[#F8F3E9] w-[75%] max-w-[300px] p-6 overflow-y-auto transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-sm">ALL</h3>
            <button onClick={() => setIsOpen(false)} className="text-xl">&times;</button>
          </div>
          <ul className="space-y-3 text-[13px] text-[#333]">
            {categories.map((cat, index) => (
              <li key={index}>{cat}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TestSeriesComponent2;