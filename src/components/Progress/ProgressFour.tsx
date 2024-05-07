import React from "react";

const ProgressFour: React.FC = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-7.5">
        <h3 className="font-medium text-black dark:text-white">
          Progress Style 4
        </h3>
      </div>

      <div className="p-4 sm:p-6 xl:p-10">
        <div className="flex max-w-[470px] flex-col gap-7">
          <div className="relative h-2.5 w-full rounded-full bg-stroke dark:bg-strokedark">
            <div className="absolute left-0 h-full w-10/12 rounded-full bg-primary"></div>
          </div>

          <div className="relative h-2.5 w-full rounded-full bg-stroke dark:bg-strokedark">
            <div className="absolute left-0 h-full w-8/12 rounded-full bg-[#3CA745]"></div>
          </div>

          <div className="relative h-2.5 w-full rounded-full bg-stroke dark:bg-strokedark">
            <div className="absolute left-0 h-full w-11/12 rounded-full bg-[#F9C107]"></div>
          </div>

          <div className="relative h-2.5 w-full rounded-full bg-stroke dark:bg-strokedark">
            <div className="absolute left-0 h-full w-4/12 rounded-full bg-[#DC3545]"></div>
          </div>

          <div className="relative h-2.5 w-full rounded-full bg-stroke dark:bg-strokedark">
            <div className="absolute left-0 h-full w-3/12 rounded-full bg-[#3BA2B8]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressFour;
