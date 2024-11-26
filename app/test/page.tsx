import TestNavigation from "@/app/components/TestNavigation";
import Sidebar from "../components/Sidebar";
import ExamList from "../components/ExamList";

export default function TestPage() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="fixed h-full w-64 text-white">
        <Sidebar />
      </div>
      <div className="flex-1 ml-0 lg:ml-64 mt-6 mx-4 lg:mx-8">
        <TestNavigation />
        <ExamList />
      </div>
    </div>
  );
}
