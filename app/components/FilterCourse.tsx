"use client";

import Image from "next/image";
import { FC } from "react";

const FilterCourse: FC = () => {
  const entranceExams = [
    { id: "all", label: "All Exams", isSelected: true },
    { id: "cftri", label: "CFTRI", isSelected: false },
    { id: "gate", label: "GATE", isSelected: false },
    { id: "cuet", label: "CUET", isSelected: false },
    { id: "ugc", label: "UGC NET", isSelected: false },
    { id: "nin", label: "NIN", isSelected: false },
    { id: "icar", label: "ICAR", isSelected: false },
    { id: "mba", label: "MBA (GDPI)", isSelected: false },
  ];

  const competitiveExams = [
    { id: "comp-all", label: "All Exams", isSelected: false },
    { id: "jae", label: "JAE-SPA", isSelected: false },
    { id: "cgpdtm", label: "CGPDTM", isSelected: false },
    { id: "cfso", label: "CFSO", isSelected: false },
    { id: "fci", label: "FCI", isSelected: false },
  ];

  return (
    <div className="bg-white h-full w-[280px] p-4 lg:p-6 overflow-y-auto">
      <div className="flex items-center gap-2 mb-6">
        <Image
          src="/Filter.png"
          alt="Filter"
          width={20}
          height={20}
          className="w-5 h-5"
        />
        <span className="font-medium">Filter Course</span>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-medium mb-3">Entrance Exam</h3>
        <div className="space-y-3">
          {entranceExams.map((exam) => (
            <label key={exam.id} className="flex items-center gap-2">
              <input
                type="radio"
                name="entrance"
                className="w-4 h-4 text-[#7A1DC5] border-gray-300 focus:ring-[#7A1DC5]"
                checked={exam.isSelected}
                onChange={() => {}}
              />
              <span
                className={`text-sm ${
                  exam.id === "all" ? "text-[#7A1DC5]" : "text-gray-600"
                }`}
              >
                {exam.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-3">Competitive Exams</h3>
        <div className="space-y-3">
          {competitiveExams.map((exam) => (
            <label key={exam.id} className="flex items-center gap-2">
              <input
                type="radio"
                name="competitive"
                className="w-4 h-4 text-[#7A1DC5] border-gray-300 focus:ring-[#7A1DC5]"
                checked={exam.isSelected}
                onChange={() => {}}
              />
              <span className="text-sm text-gray-600">{exam.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterCourse;
