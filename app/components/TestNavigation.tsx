"use client";

import Link from "next/link";
import { FC } from "react";

interface TestTab {
  label: string;
  count: number;
  isActive?: boolean;
}

const TestNavigation: FC = () => {
  const tabs: TestTab[] = [
    { label: "All", count: 100, isActive: true },
    { label: "Full length", count: 30 },
    { label: "Sectional", count: 50 },
    { label: "Previous", count: 20 },
  ];

  const examTypes = [
    { label: "GATE XE", isActive: true },
    { label: "CFTRI", isActive: false },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
        <Link href="/course" className="flex items-center gap-2 text-gray-700">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="font-medium">GATE XE</span>
        </Link>

        <div className="flex flex-wrap gap-2 mt-2 lg:mt-0">
          {examTypes.map((type) => (
            <button
              key={type.label}
              className={`px-4 py-1.5 rounded-full text-sm ${
                type.isActive
                  ? "bg-purple-900 text-white"
                  : "bg-gray-50 text-gray-700"
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 rounded-full p-1 flex gap-2 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-colors ${
              tab.isActive
                ? "bg-purple-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <span>{tab.label}</span>
            <span
              className={`px-2 py-0.5 rounded-full text-xs ${
                tab.isActive ? "bg-white text-purple-600" : "bg-gray-100"
              }`}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TestNavigation;
