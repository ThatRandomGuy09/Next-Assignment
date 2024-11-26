import Sidebar from "./components/Sidebar";
import TestCard from "./components/TestCard";
import TestSeries from "./components/TestSeries";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      <div className="lg:fixed lg:h-screen">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col lg:flex-row lg:ml-64">
        <div className="w-full lg:fixed lg:w-[500px] lg:left-64 lg:top-0 lg:h-screen p-4 lg:p-8 border-b lg:border-b-0 lg:border-r border-gray-200 lg:overflow-y-auto">
          <h1 className="text-2xl font-medium mb-6 mt-12 lg:mt-0">
            My Test Series
          </h1>
          <div className="space-y-4">
            <TestCard
              title="GATE XE"
              description="Fluid Mechanics, Food Technology, Math, General Aptitude."
              progress={80}
              image="/TestImg-1.png"
            />
            <TestCard
              title="CFTRI"
              description="Central Food Technology research Institute 2025"
              progress={80}
              image="/TestImg-2.png"
            />
          </div>
        </div>

        <div className="flex-1 p-4 lg:p-8 lg:ml-[500px]">
          <div className="flex justify-end mb-4 lg:mb-6 gap-2">
            <button className="px-3 py-1.5 lg:px-4 lg:py-2 bg-purple-900 text-white rounded-full text-sm lg:text-base">
              GATE XE
            </button>
            <button className="px-3 py-1.5 lg:px-4 lg:py-2 bg-white text-gray-600 rounded-full text-sm lg:text-base">
              CFTRI
            </button>
          </div>
          <TestSeries />
        </div>
      </div>
    </div>
  );
}
