"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ProgressOne from "@/components/Progress/ProgressOne";
import ProgressTwo from "@/components/Progress/ProgressTwo";
import ProgressThree from "@/components/Progress/ProgressThree";
import ProgressFour from "@/components/Progress/ProgressFour";

const Progress: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Progress" />

      <div className="flex flex-col gap-7.5">
        <ProgressOne />
        <ProgressTwo />
        <ProgressThree />
        <ProgressFour />
      </div>
    </>
  );
};

export default Progress;
