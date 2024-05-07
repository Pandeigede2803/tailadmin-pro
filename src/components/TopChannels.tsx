import React from "react";
import DropdownDefault from "./Dropdowns/DropdownDefault";

const TopChannels: React.FC = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-7.5">
      <div className="mb-7 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-black dark:text-white">
            Top Channels
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
            <p className="text-sm">Google</p>
          </div>
          <div className="col-span-2">
            <p className="text-center text-sm">4.2k</p>
          </div>
          <div className="col-span-2">
            <p className="text-right text-sm">3.9k</p>
          </div>
        </div>
        <div className="relative z-1 grid grid-cols-10 py-2">
          <span className="absolute left-0 top-0 -z-1 h-full w-[66%] rounded bg-gray dark:bg-meta-4"></span>
          <div className="col-span-6 pl-3.5">
            <p className="text-sm">Github</p>
          </div>
          <div className="col-span-2">
            <p className="text-center text-sm">1.9k</p>
          </div>
          <div className="col-span-2">
            <p className="text-right text-sm">509</p>
          </div>
        </div>
        <div className="relative z-1 grid grid-cols-10 py-2">
          <span className="absolute left-0 top-0 -z-1 h-full w-[58%] rounded bg-gray dark:bg-meta-4"></span>
          <div className="col-span-6 pl-3.5">
            <p className="text-sm">Producthunt</p>
          </div>
          <div className="col-span-2">
            <p className="text-center text-sm">1.5k</p>
          </div>
          <div className="col-span-2">
            <p className="text-right text-sm">986</p>
          </div>
        </div>
        <div className="relative z-1 grid grid-cols-10 py-2">
          <span className="absolute left-0 top-0 -z-1 h-full w-[48%] rounded bg-gray dark:bg-meta-4"></span>
          <div className="col-span-6 pl-3.5">
            <p className="text-sm">Facebook</p>
          </div>
          <div className="col-span-2">
            <p className="text-center text-sm">974</p>
          </div>
          <div className="col-span-2">
            <p className="text-right text-sm">639</p>
          </div>
        </div>
        <div className="relative z-1 grid grid-cols-10 py-2">
          <span className="absolute left-0 top-0 -z-1 h-full w-[39%] rounded bg-gray dark:bg-meta-4"></span>
          <div className="col-span-6 pl-3.5">
            <p className="text-sm">Twitter</p>
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

export default TopChannels;
