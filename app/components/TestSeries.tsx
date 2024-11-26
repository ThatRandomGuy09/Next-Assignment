"use client";
import { FC } from "react";

interface TestItem {
  title: string;
  questions: number;
  marks: number;
  duration: number;
  language: string;
  isLive?: boolean;
  liveIn?: string;
  score?: number;
  rank?: number;
  syllabus?: string;
}

const TestSeries: FC = () => {
  const liveTests: TestItem[] = [
    {
      title: "FLT 1: Food Technology",
      questions: 100,
      marks: 100,
      duration: 60,
      language: "English",
      isLive: false,
      liveIn: "2 days",
      syllabus: "#",
    },
    {
      title: "FLT 1: Food Technology",
      questions: 100,
      marks: 100,
      duration: 60,
      language: "English",
      isLive: true,
      syllabus: "#",
    },
  ];

  const previousAttempts: TestItem[] = [
    {
      title: "FLT 1: Food Technology",
      questions: 100,
      marks: 100,
      duration: 60,
      language: "English",
      score: 50,
      rank: 90,
      syllabus: "#",
    },
    {
      title: "FLT 1: Food Technology",
      questions: 100,
      marks: 100,
      duration: 60,
      language: "English",
      score: 50,
      rank: 150,
      syllabus: "#",
    },
  ];

  return (
    <div className="max-w-full lg:max-w-3xl font-satoshi">
      <section className="mb-6 lg:mb-8">
        <h2 className="text-lg lg:text-xl font-medium mb-3 lg:mb-4">
          Live Test
        </h2>
        <div className="space-y-3 lg:space-y-4">
          {liveTests.map((test, index) => (
            <div key={index} className="bg-white rounded-xl p-4 lg:p-6">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3 lg:mb-4">
                <div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="bg-purple-900 text-white text-xs px-2 py-1 rounded">
                      Full Length
                    </span>
                    {test.isLive && (
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                        Live
                      </span>
                    )}
                  </div>
                  <h3 className="font-medium text-sm lg:text-base">
                    {test.title}
                  </h3>
                </div>
                {test.liveIn && (
                  <span className="text-red-500 text-xs lg:text-sm mt-2 lg:mt-0">
                    Will be live in {test.liveIn}
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-4 lg:gap-8 text-xs lg:text-sm text-gray-600 mb-3">
                <span>{test.questions} Questions</span>
                <span>{test.marks} Marks</span>
                <span>{test.duration} Min</span>
                <span>{test.language}</span>
              </div>

              <div className="flex items-center justify-between">
                <button
                  className="text-blue-600 text-xs lg:text-sm flex items-center gap-1 hover:underline"
                  onClick={() => window.open(test.syllabus, "_blank")}
                >
                  <span>View Syllabus</span>
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {test.isLive && (
                  <button className="bg-purple-600 text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg text-xs lg:text-sm hover:bg-purple-700 transition-colors">
                    Start Test
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg lg:text-xl font-medium mb-3 lg:mb-4">
          Reattempt to perform better
        </h2>
        <div className="space-y-3 lg:space-y-4">
          {previousAttempts.map((test, index) => (
            <div key={index} className="bg-white rounded-xl p-4 lg:p-6">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3 lg:mb-4">
                <div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="bg-purple-900 text-white text-xs px-2 py-1 rounded">
                      Full Length
                    </span>
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                      Score: {test.score}/100 | Rank: {test.rank}
                    </span>
                  </div>
                  <h3 className="font-medium text-sm lg:text-base">
                    {test.title}
                  </h3>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 lg:gap-8 text-xs lg:text-sm text-gray-600 mb-3">
                <span>{test.questions} Questions</span>
                <span>{test.marks} Marks</span>
                <span>{test.duration} Min</span>
                <span>{test.language}</span>
              </div>

              <div className="flex items-center justify-between">
                <button
                  className="text-blue-600 text-xs lg:text-sm flex items-center gap-1 hover:underline"
                  onClick={() => window.open(test.syllabus, "_blank")}
                >
                  <span>View Syllabus</span>
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <button className="border border-purple-600 text-purple-600 px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg text-xs lg:text-sm hover:bg-purple-50 transition-colors">
                  Reattempt
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TestSeries;
