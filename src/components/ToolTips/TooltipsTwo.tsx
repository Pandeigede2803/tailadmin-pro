import React from "react";

const TooltipsOne: React.FC = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-7.5">
        <h3 className="font-medium text-black dark:text-white">
          Tooltips Style 1
        </h3>
      </div>

      <div className="p-4 sm:p-5 xl:p-7.5">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 sm:w-1/2 xl:w-1/4">
            <div className="mb-14">
              <div className="group relative inline-block">
                <button className="inline-flex rounded-md bg-primary px-4.5 py-2 font-medium text-white">
                  Tooltip on top
                </button>
                <div className="absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded bg-black px-4.5 py-1.5 text-sm font-medium text-white opacity-0 group-hover:opacity-100">
                  <span className="absolute bottom-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-black"></span>
                  Tooltip Text
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 xl:w-1/4">
            <div className="mb-14">
              <div className="group relative inline-block">
                <button className="inline-flex rounded-md bg-primary px-4.5 py-2 font-medium text-white">
                  Tooltip on right
                </button>
                <div className="absolute left-full top-1/2 z-20 ml-3 -translate-y-1/2 whitespace-nowrap rounded bg-black px-4.5 py-1.5 text-sm font-medium text-white opacity-0 group-hover:opacity-100">
                  <span className="absolute left-[-3px] top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 rounded-sm bg-black"></span>
                  Tooltip Text
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 xl:w-1/4">
            <div className="mb-14">
              <div className="group relative inline-block">
                <button className="inline-flex rounded-md bg-primary px-4.5 py-2 font-medium text-white">
                  Tooltip on bottom
                </button>
                <div className="absolute left-1/2 top-full z-20 mt-3 -translate-x-1/2 whitespace-nowrap rounded bg-black px-4.5 py-1.5 text-sm font-medium text-white opacity-0 group-hover:opacity-100">
                  <span className="absolute left-1/2 top-[-3px] -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-black"></span>
                  Tooltip Text
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 xl:w-1/4">
            <div className="mb-14 text-right sm:text-left">
              <div className="group relative inline-block">
                <button className="inline-flex rounded-md bg-primary px-4.5 py-2 font-medium text-white">
                  Tooltip on left
                </button>
                <div className="absolute right-full top-1/2 z-20 mr-3 -translate-y-1/2 whitespace-nowrap rounded bg-black px-4.5 py-1.5 text-sm font-medium text-white opacity-0 group-hover:opacity-100">
                  <span className="absolute right-[-3px] top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 rounded-sm bg-black"></span>
                  Tooltip Text
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TooltipsOne;
