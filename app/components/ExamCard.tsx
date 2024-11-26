"use client";

import { FC } from "react";

interface ExamCardProps {
  title: string;
  questions: number;
  marks: number;
  duration: number;
  language: string;
  status: "live" | "reattempt" | "upcoming";
  syllabus: string;
}

const ExamCard: FC<ExamCardProps> = ({
  title,
  questions,
  marks,
  duration,
  language,
  status,
  syllabus,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <span className="text-sm font-medium bg-purple-600 text-white rounded-full px-2 py-1 mr-2">
            Full Length
          </span>
          {status === "live" && (
            <span className="text-sm font-medium text-red-600 bg-red-100 rounded-full px-2 py-1 mr-2">
              Live
            </span>
          )}
          {status === "reattempt" && (
            <span className="text-sm font-medium text-purple-600 bg-purple-100 rounded-full px-2 py-1 mr-2">
              Reattempt
            </span>
          )}
        </div>
        <button className="bg-purple-600 text-white rounded-full px-4 py-1">
          {status === "live" ? "Starts Now" : "Reattempt"}
        </button>
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">
        {questions} Questions | {marks} Marks | {duration} Minutes | {language}
      </p>
      <p className="text-gray-500 mt-2">{syllabus}</p>
      <button className="text-purple-600 mt-2">View Syllabus</button>
    </div>
  );
};

export default ExamCard;
