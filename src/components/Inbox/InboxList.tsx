import React from "react";
import Start from "../Start";

const InboxList: React.FC = () => {
  return (
    <table className="h-full w-full table-auto">
      <thead>
        <tr className="flex border-y border-stroke dark:border-strokedark">
          <th className="w-[65%] py-6 pl-4 pr-4 lg:pl-10 xl:w-1/4">
            <label
              htmlFor="checkbox-1"
              className="flex cursor-pointer select-none items-center font-medium"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  id="checkbox-1"
                  className="tableCheckbox sr-only"
                />
                <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded-[3px] border-[.5px] border-stroke bg-gray-2 text-white dark:border-strokedark dark:bg-boxdark-2">
                  <span className="opacity-0">
                    <svg width="14" height="14" viewBox="0 0 10 10">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.62796 2.20602C8.79068 2.36874 8.79068 2.63256 8.62796 2.79528L4.04463 7.37861C3.88191 7.54133 3.61809 7.54133 3.45537 7.37861L1.37204 5.29528C1.20932 5.13256 1.20932 4.86874 1.37204 4.70602C1.53476 4.5433 1.79858 4.5433 1.96129 4.70602L3.75 6.49473L8.03871 2.20602C8.20142 2.0433 8.46524 2.0433 8.62796 2.20602Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              Sender
            </label>
          </th>
          <th className="hidden w-3/5 px-4 py-6 xl:block">
            <p className="text-left font-medium">Subject</p>
          </th>
          <th className="w-[35%] py-6 pl-4 pr-4 lg:pr-10 xl:w-[20%]">
            <p className="text-right font-medium">Date</p>
          </th>
        </tr>
      </thead>
      <tbody className="block h-full max-h-full overflow-auto py-4">
        <tr className="flex cursor-pointer items-center hover:bg-whiten dark:hover:bg-boxdark-2">
          <td className="w-[65%] py-4 pl-4 pr-4 lg:pl-10 xl:w-1/4">
            <div className="flex items-center">
              <label
                htmlFor="checkbox-2"
                className="flex cursor-pointer select-none items-center text-sm font-medium sm:text-base"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    id="checkbox-2"
                    className="tableCheckbox sr-only"
                  />
                  <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded-[3px] border-[.5px] border-stroke bg-gray-2 text-white dark:border-strokedark dark:bg-boxdark-2">
                    <span className="opacity-0">
                      <svg width="14" height="14" viewBox="0 0 10 10">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.62796 2.20602C8.79068 2.36874 8.79068 2.63256 8.62796 2.79528L4.04463 7.37861C3.88191 7.54133 3.61809 7.54133 3.45537 7.37861L1.37204 5.29528C1.20932 5.13256 1.20932 4.86874 1.37204 4.70602C1.53476 4.5433 1.79858 4.5433 1.96129 4.70602L3.75 6.49473L8.03871 2.20602C8.20142 2.0433 8.46524 2.0433 8.62796 2.20602Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </label>
              <span className="pr-3">
                <Start />
              </span>
              Musharof Chowdhury
            </div>
          </td>
          <td className="hidden w-3/5 p-4 xl:block">
            <p>Some note & Lorem Ipsum available alteration in some form.</p>
          </td>
          <td className="w-[35%] py-4 pl-4 pr-4 lg:pr-10 xl:w-[20%]">
            <p className="text-right text-xs xl:text-base">17 Oct, 2024</p>
          </td>
        </tr>
        <tr className="flex cursor-pointer items-center hover:bg-whiten dark:hover:bg-boxdark-2">
          <td className="w-[65%] py-4 pl-4 pr-4 lg:pl-10 xl:w-1/4">
            <div className="flex items-center">
              <label
                htmlFor="checkbox-3"
                className="flex cursor-pointer select-none items-center text-sm font-medium sm:text-base"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    id="checkbox-3"
                    className="tableCheckbox sr-only"
                  />
                  <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded-[3px] border-[.5px] border-stroke bg-gray-2 text-white dark:border-strokedark dark:bg-boxdark-2">
                    <span className="opacity-0">
                      <svg width="14" height="14" viewBox="0 0 10 10">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.62796 2.20602C8.79068 2.36874 8.79068 2.63256 8.62796 2.79528L4.04463 7.37861C3.88191 7.54133 3.61809 7.54133 3.45537 7.37861L1.37204 5.29528C1.20932 5.13256 1.20932 4.86874 1.37204 4.70602C1.53476 4.5433 1.79858 4.5433 1.96129 4.70602L3.75 6.49473L8.03871 2.20602C8.20142 2.0433 8.46524 2.0433 8.62796 2.20602Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </label>
              <span className="pr-3">
                <Start />
              </span>
              Naimur Rahman
            </div>
          </td>
          <td className="hidden w-3/5 p-4 xl:block">
            <p>Lorem Ipsum available alteration in some form.</p>
          </td>
          <td className="w-[35%] py-4 pl-4 pr-4 lg:pr-10 xl:w-[20%]">
            <p className="text-right text-xs xl:text-base">25 Nov, 2024</p>
          </td>
        </tr>
        <tr className="flex cursor-pointer items-center hover:bg-whiten dark:hover:bg-boxdark-2">
          <td className="w-[65%] py-4 pl-4 pr-4 lg:pl-10 xl:w-1/4">
            <div className="flex items-center">
              <label
                htmlFor="checkbox-4"
                className="flex cursor-pointer select-none items-center text-sm font-medium sm:text-base"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    id="checkbox-4"
                    className="tableCheckbox sr-only"
                  />
                  <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded-[3px] border-[.5px] border-stroke bg-gray-2 text-white dark:border-strokedark dark:bg-boxdark-2">
                    <span className="opacity-0">
                      <svg width="14" height="14" viewBox="0 0 10 10">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.62796 2.20602C8.79068 2.36874 8.79068 2.63256 8.62796 2.79528L4.04463 7.37861C3.88191 7.54133 3.61809 7.54133 3.45537 7.37861L1.37204 5.29528C1.20932 5.13256 1.20932 4.86874 1.37204 4.70602C1.53476 4.5433 1.79858 4.5433 1.96129 4.70602L3.75 6.49473L8.03871 2.20602C8.20142 2.0433 8.46524 2.0433 8.62796 2.20602Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </label>
              <span className="pr-3">
                <Start />
              </span>
              Juhan Ahamed
            </div>
          </td>
          <td className="hidden w-3/5 p-4 xl:block">
            <p>Lorem Ipsum available alteration in some form.</p>
          </td>
          <td className="w-[35%] py-4 pl-4 pr-4 lg:pr-10 xl:w-[20%]">
            <p className="text-right text-xs xl:text-base">25 Nov, 2024</p>
          </td>
        </tr>
        <tr className="flex cursor-pointer items-center hover:bg-whiten dark:hover:bg-boxdark-2">
          <td className="w-[65%] py-4 pl-4 pr-4 lg:pl-10 xl:w-1/4">
            <div className="flex items-center">
              <label
                htmlFor="checkbox-5"
                className="flex cursor-pointer select-none items-center text-sm font-medium sm:text-base"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    id="checkbox-5"
                    className="tableCheckbox sr-only"
                  />
                  <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded-[3px] border-[.5px] border-stroke bg-gray-2 text-white dark:border-strokedark dark:bg-boxdark-2">
                    <span className="opacity-0">
                      <svg width="14" height="14" viewBox="0 0 10 10">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.62796 2.20602C8.79068 2.36874 8.79068 2.63256 8.62796 2.79528L4.04463 7.37861C3.88191 7.54133 3.61809 7.54133 3.45537 7.37861L1.37204 5.29528C1.20932 5.13256 1.20932 4.86874 1.37204 4.70602C1.53476 4.5433 1.79858 4.5433 1.96129 4.70602L3.75 6.49473L8.03871 2.20602C8.20142 2.0433 8.46524 2.0433 8.62796 2.20602Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </label>
              <span className="pr-3">
                <Start />
              </span>
              Mahbub Hasan
            </div>
          </td>
          <td className="hidden w-3/5 p-4 xl:block">
            <p>Lorem Ipsum available alteration in some form.</p>
          </td>
          <td className="w-[35%] py-4 pl-4 pr-4 lg:pr-10 xl:w-[20%]">
            <p className="text-right text-xs xl:text-base">19 Dec, 2024</p>
          </td>
        </tr>
        <tr className="flex cursor-pointer items-center hover:bg-whiten dark:hover:bg-boxdark-2">
          <td className="w-[65%] py-4 pl-4 pr-4 lg:pl-10 xl:w-1/4">
            <div className="flex items-center">
              <label
                htmlFor="checkbox-6"
                className="flex cursor-pointer select-none items-center text-sm font-medium sm:text-base"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    id="checkbox-6"
                    className="tableCheckbox sr-only"
                  />
                  <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded-[3px] border-[.5px] border-stroke bg-gray-2 text-white dark:border-strokedark dark:bg-boxdark-2">
                    <span className="opacity-0">
                      <svg width="14" height="14" viewBox="0 0 10 10">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.62796 2.20602C8.79068 2.36874 8.79068 2.63256 8.62796 2.79528L4.04463 7.37861C3.88191 7.54133 3.61809 7.54133 3.45537 7.37861L1.37204 5.29528C1.20932 5.13256 1.20932 4.86874 1.37204 4.70602C1.53476 4.5433 1.79858 4.5433 1.96129 4.70602L3.75 6.49473L8.03871 2.20602C8.20142 2.0433 8.46524 2.0433 8.62796 2.20602Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </label>
              <span className="pr-3">
                <Start />
              </span>
              Shafiq Hammad
            </div>
          </td>
          <td className="hidden w-3/5 p-4 xl:block">
            <p>Lorem Ipsum available alteration in some form.</p>
          </td>
          <td className="w-[35%] py-4 pl-4 pr-4 lg:pr-10 xl:w-[20%]">
            <p className="text-right text-xs xl:text-base">20 Dec, 2024</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default InboxList;
