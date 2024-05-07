import React from "react";

const ProgressTwo: React.FC = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-7.5">
        <h3 className="font-medium text-black dark:text-white">
          Progress Style 2
        </h3>
      </div>

      <div className="p-4 sm:p-6 xl:p-10">
        <div className="flex max-w-[470px] flex-col gap-10 pt-5 xl:pt-4">
          <div className="relative h-2.5 w-full rounded-full bg-stroke dark:bg-strokedark">
            <div className="absolute left-0 h-full w-9/12 rounded-full bg-primary">
              <span className="absolute -right-4 bottom-full z-1 mb-2 inline-block rounded-sm bg-primary px-2 py-1 text-xs font-bold text-white">
                <span className="absolute -bottom-1 left-1/2 -z-1 h-2 w-2 -translate-x-1/2 rotate-45 bg-primary"></span>
                75%
              </span>
            </div>
          </div>

          <div className="relative h-2.5 w-full rounded-full bg-stroke dark:bg-strokedark">
            <div className="absolute left-0 h-full w-1/2 rounded-full bg-primary">
              <span className="absolute -right-4 bottom-full z-1 mb-2 inline-block rounded-sm bg-primary px-2 py-1 text-xs font-bold text-white">
                <span className="absolute -bottom-1 left-1/2 -z-1 h-2 w-2 -translate-x-1/2 rotate-45 bg-primary"></span>
                50%
              </span>
            </div>
          </div>

          <div className="relative h-2.5 w-full rounded-full bg-stroke dark:bg-strokedark">
            <div className="absolute left-0 h-full w-4/5 rounded-full bg-primary">
              <span className="absolute -right-4 bottom-full z-1 mb-2 inline-block rounded-sm bg-primary px-2 py-1 text-xs font-bold text-white">
                <span className="absolute -bottom-1 left-1/2 -z-1 h-2 w-2 -translate-x-1/2 rotate-45 bg-primary"></span>
                80%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTwo;
