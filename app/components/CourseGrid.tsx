"use client";

import { FC } from "react";
import CourseCard from "./CourseCard";

const CourseGrid: FC = () => {
  const courses = [
    {
      title: "GATE XE",
      description:
        "Fluid Mechanics, Food Technology, Eng. Math, General Aptitude",
      image: "/TestImg-1.png",
      price: 29999,
      originalPrice: 39999,
      discount: 25,
    },
    {
      title: "GATE XE",
      description:
        "Thermodynamics, Food Technology, Eng. Math, General Aptitude",
      image: "/i-2.png",
      price: 29999,
      originalPrice: 39999,
      discount: 25,
    },
    {
      title: "GATE XL",
      description: "Microbiology, Food Technology, Chemistry, General Aptitude",
      image: "/i-3.png",
      price: 29999,
      originalPrice: 39999,
      discount: 25,
    },
    {
      title: "GATE XL",
      description: "Biochemistry, Food Technology, Chemistry, General Aptitude",
      image: "/i-7.png",
      price: 29999,
      originalPrice: 39999,
      discount: 25,
    },
    {
      title: "CFTRI",
      description: "Central Food Technology research Institute 2025",
      image: "/TestImg-2.png",
      price: 29999,
      originalPrice: 39999,
      discount: 25,
    },
    {
      title: "NIN",
      description: "National Institute of Nutrition 2025",
      image: "/i-5.png",
      price: 29999,
      originalPrice: 39999,
      discount: 25,
    },
    {
      title: "CUET- MTQP06",
      description: "Food Engineering and Technology",
      image: "/i-6.png",
      price: 29999,
      originalPrice: 39999,
      discount: 25,
    },
    {
      title: "CUET- SCQP12",
      description: "Food Science and Technology",
      image: "/i-8.png",
      price: 29999,
      originalPrice: 39999,
      discount: 25,
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-4 lg:px-6 py-4 lg:py-6">
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <button className="px-4 py-2 bg-black text-white rounded-full text-sm flex items-center justify-center gap-2 whitespace-nowrap">
          Course Filters
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search entrance test, competitive exams"
            className="w-full px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-purple-600"
          />
          <svg
            className="w-5 h-5 absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default CourseGrid;
