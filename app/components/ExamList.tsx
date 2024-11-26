"use client";

import { FC } from "react";
import ExamCard from "./ExamCard";

const ExamList: FC = () => {
  const exams = [
    {
      title: "FLT 1: Food Technology",
      questions: 100,
      marks: 100,
      duration: 60,
      language: "English",
      status: "live",
      syllabus:
        "Fruits and vegetables processing, Plantation crops processing and products, Milk and milk products processing & Processing of animal products",
    },
    {
      title: "FLT 2: Food Technology",
      questions: 100,
      marks: 100,
      duration: 60,
      language: "English",
      status: "reattempt",
      syllabus: "Score: 50/100 | Rank: 40",
    },
    {
      title: "FLT 3: Food Technology",
      questions: 100,
      marks: 100,
      duration: 60,
      language: "English",
      status: "upcoming",
      syllabus: "Upcoming exam details will be provided soon.",
    },
  ];

  return (
    <div className="mt-6 mx-4 lg:mx-8">
      {exams.map((exam, index) => (
        <ExamCard
          key={index}
          {...exam}
          status={exam.status as "reattempt" | "upcoming" | "live"}
        />
      ))}
    </div>
  );
};

export default ExamList;
