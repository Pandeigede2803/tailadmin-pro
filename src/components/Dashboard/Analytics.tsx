"use client";
import React, { useEffect } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import ChartFour from "../Charts/ChartFour";
import DataStats from "../DataStats/DataStats";
import ChartThree from "../Charts/ChartThree";
import TopContent from "../TopContent";
import TopChannels from "../TopChannels";
import TableTwo from "../Tables/TableTwo";

// without this the component renders on server and throws an error
import dynamic from "next/dynamic";

const MapTwo = dynamic(() => import("../Maps/MapTwo"), {
  ssr: false,
});

const Analytics: React.FC = () => {
  useEffect(() => {
    // Init flatpickr
    const fp = flatpickr(".datepicker", {
      mode: "range",
      static: true,
      monthSelectorType: "static",
      dateFormat: "M j, Y",
      defaultDate: [new Date().setDate(new Date().getDate() - 6), new Date()],
      prevArrow:
        '<svg className="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
      nextArrow:
        '<svg className="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
      onReady: (selectedDates: Date[], dateStr: string, instance: any) => {
        instance.element.value = dateStr.replace("to", "-");
        const customClass = instance.element.getAttribute("data-class");
        instance.calendarContainer.classList.add(customClass!);
        selectedDates;
      },
      onChange: (selectedDates: Date[], dateStr: string, instance: any) => {
        instance.element.value = dateStr.replace("to", "-");
        selectedDates;
      },
    });

    return () => {
      (fp as flatpickr.Instance).destroy();
    };
  }, []);

  return (
    <>
      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12 flex flex-wrap items-center justify-between gap-3">
          {/* <!-- Datepicker built with flatpickr --> */}
          <div className="relative">
            <input
              className="datepicker w-[120%] rounded border border-stroke bg-white py-2 pl-10 pr-4 text-sm font-medium shadow-card-2 focus-visible:outline-none dark:border-strokedark dark:bg-boxdark"
              placeholder="Select dates"
              data-class="flatpickr-right"
            />
            <div className="pointer-events-none absolute inset-0 left-4 right-auto flex items-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.75 3.75C3.33579 3.75 3 4.08579 3 4.5V15C3 15.4142 3.33579 15.75 3.75 15.75H14.25C14.6642 15.75 15 15.4142 15 15V4.5C15 4.08579 14.6642 3.75 14.25 3.75H3.75ZM1.5 4.5C1.5 3.25736 2.50736 2.25 3.75 2.25H14.25C15.4926 2.25 16.5 3.25736 16.5 4.5V15C16.5 16.2426 15.4926 17.25 14.25 17.25H3.75C2.50736 17.25 1.5 16.2426 1.5 15V4.5Z"
                  fill="#64748B"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 0.75C12.4142 0.75 12.75 1.08579 12.75 1.5V4.5C12.75 4.91421 12.4142 5.25 12 5.25C11.5858 5.25 11.25 4.91421 11.25 4.5V1.5C11.25 1.08579 11.5858 0.75 12 0.75Z"
                  fill="#64748B"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 0.75C6.41421 0.75 6.75 1.08579 6.75 1.5V4.5C6.75 4.91421 6.41421 5.25 6 5.25C5.58579 5.25 5.25 4.91421 5.25 4.5V1.5C5.25 1.08579 5.58579 0.75 6 0.75Z"
                  fill="#64748B"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.5 7.5C1.5 7.08579 1.83579 6.75 2.25 6.75H15.75C16.1642 6.75 16.5 7.08579 16.5 7.5C16.5 7.91422 16.1642 8.25 15.75 8.25H2.25C1.83579 8.25 1.5 7.91422 1.5 7.5Z"
                  fill="#64748B"
                />
              </svg>
            </div>
          </div>
          <div className="relative z-20 inline-block rounded bg-white shadow-card-2 dark:bg-boxdark">
            <select
              name=""
              id=""
              className="relative z-20 inline-flex appearance-none rounded border border-stroke bg-transparent py-2 pl-4 pr-9 text-sm font-medium outline-none dark:border-strokedark"
            >
              <option value="" className="dark:bg-boxdark">
                Yearly
              </option>
              <option value="" className="dark:bg-boxdark">
                Monthly
              </option>
            </select>
            <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.96967 6.21967C4.26256 5.92678 4.73744 5.92678 5.03033 6.21967L9 10.1893L12.9697 6.21967C13.2626 5.92678 13.7374 5.92678 14.0303 6.21967C14.3232 6.51256 14.3232 6.98744 14.0303 7.28033L9.53033 11.7803C9.23744 12.0732 8.76256 12.0732 8.46967 11.7803L3.96967 7.28033C3.67678 6.98744 3.67678 6.51256 3.96967 6.21967Z"
                  fill="#64748B"
                />
              </svg>
            </span>
          </div>
        </div>
        <ChartFour />
        <DataStats />
        <MapTwo />
        <div className="col-span-12 xl:col-span-6">
          {/* <!-- ====== Top Content Start --> */}
          <TopContent />
          {/* <!-- ====== Top Content End --> */}

          {/* <!-- ====== Top Channels Start --> */}
          <TopChannels />
          {/* <!-- ====== Top Channels End --> */}
        </div>
        <ChartThree />

        {/* <!-- ====== Table Two Start --> */}
        <div className="col-span-12 xl:col-span-7">
          <TableTwo />
        </div>
        {/* <!-- ====== Table Two End --> */}
      </div>
    </>
  );
};

export default Analytics;
