import React from "react";
import DropdownDefault from "./Dropdowns/DropdownDefault";

const TopContent: React.FC = () => {
  return (
    <div className="mb-4 rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:mb-6 md:p-6 xl:p-7.5 2xl:mb-7.5">
      <div className="mb-7 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-black dark:text-white">
            Top Content
          </h3>
        </div>

        <div>
          <DropdownDefault />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-10 py-2">
          <div className="col-span-6">
            <p className="text-sm">URL</p>
          </div>
          <div className="col-span-2">
            <p className="text-center text-sm">Views</p>
          </div>
          <div className="col-span-2">
            <p className="text-right text-sm">Uniques</p>
          </div>
        </div>
        <div className="relative z-1 grid grid-cols-10 py-2">
          <span className="absolute left-0 top-0 -z-1 h-full w-[74%] rounded bg-gray dark:bg-meta-4"></span>
          <div className="col-span-6 pl-3.5">
            <p className="text-sm">/</p>
          </div>
          <div className="col-span-2">
            <p className="text-center text-sm">2.5k</p>
          </div>
          <div className="col-span-2">
            <p className="text-right text-sm">2.1k</p>
          </div>
        </div>
        <div className="relative z-1 grid grid-cols-10 py-2">
          <span className="absolute left-0 top-0 -z-1 h-full w-[38%] rounded bg-gray dark:bg-meta-4"></span>
          <div className="col-span-6 pl-3.5">
            <p className="text-sm">/blog/</p>
          </div>
          <div className="col-span-2">
            <p className="text-center text-sm">376</p>
          </div>
          <div className="col-span-2">
            <p className="text-right text-sm">139</p>
          </div>
        </div>
        <div className="relative z-1 grid grid-cols-10 py-2">
          <span className="absolute left-0 top-0 -z-1 h-full w-[55%] rounded bg-gray dark:bg-meta-4"></span>
          <div className="col-span-6 pl-3.5">
            <p className="text-sm">/reserve/success</p>
          </div>
          <div className="col-span-2">
            <p className="text-center text-sm">468</p>
          </div>
          <div className="col-span-2">
            <p className="text-right text-sm">290</p>
          </div>
        </div>
        <div className="relative z-1 grid grid-cols-10 py-2">
          <span className="absolute left-0 top-0 -z-1 h-full w-[20%] rounded bg-gray dark:bg-meta-4"></span>
          <div className="col-span-6 pl-3.5">
            <p className="text-sm">/product/product-details</p>
          </div>
          <div className="col-span-2">
            <p className="text-center text-sm">298</p>
          </div>
          <div className="col-span-2">
            <p className="text-right text-sm">176</p>
          </div>
        </div>
        <div className="relative z-1 grid grid-cols-10 py-2">
          <span className="absolute left-0 top-0 -z-1 h-full w-[27%] rounded bg-gray dark:bg-meta-4"></span>
          <div className="col-span-6 pl-3.5">
            <p className="text-sm">/blog/digital-marketing</p>
          </div>
          <div className="col-span-2">
            <p className="text-center text-sm">179</p>
          </div>
          <div className="col-span-2">
            <p className="text-right text-sm">57</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContent;
