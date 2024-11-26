"use client";

import React from "react";
import CourseNavbar from "../components/CourseNavbar";
import FilterCourse from "../components/FilterCourse";
import CourseGrid from "../components/CourseGrid";

const CoursePage = () => {
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <CourseNavbar />
      <div className="flex flex-col lg:flex-row">
        <div
          className={`
          fixed lg:sticky lg:top-0 left-0 h-[calc(100vh-64px)] z-50 transform transition-transform duration-300 ease-in-out
          ${
            isFilterOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
        >
          <FilterCourse />
        </div>

        {isFilterOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsFilterOpen(false)}
          />
        )}

        <div className="flex-1">
          <button
            className="lg:hidden fixed bottom-4 right-4 z-50 bg-purple-600 text-white p-3 rounded-full shadow-lg"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <CourseGrid />
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
