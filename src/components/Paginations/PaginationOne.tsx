import React from "react";
import Link from "next/link";

const PaginationOne: React.FC = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-7.5">
        <h3 className="font-medium text-black dark:text-white">
          Pagination Style 1
        </h3>
      </div>

      <div className="p-4 sm:p-6 xl:p-7.5">
        <nav>
          <ul className="flex flex-wrap items-center">
            <li>
              <Link
                className="flex h-8 w-8 items-center justify-center rounded hover:bg-primary hover:text-white"
                href="#"
              >
                <svg
                  className="fill-current"
                  width="8"
                  height="16"
                  viewBox="0 0 8 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.17578 15.1156C7.00703 15.1156 6.83828 15.0593 6.72578 14.9187L0.369531 8.44995C0.116406 8.19683 0.116406 7.80308 0.369531 7.54995L6.72578 1.0812C6.97891 0.828076 7.37266 0.828076 7.62578 1.0812C7.87891 1.33433 7.87891 1.72808 7.62578 1.9812L1.71953 7.99995L7.65391 14.0187C7.90703 14.2718 7.90703 14.6656 7.65391 14.9187C7.48516 15.0312 7.34453 15.1156 7.17578 15.1156Z"
                    fill=""
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center justify-center rounded px-3 py-1.5 font-medium hover:bg-primary hover:text-white"
                href="#"
              >
                1
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center justify-center rounded px-3 py-1.5 font-medium hover:bg-primary hover:text-white"
                href="#"
              >
                2
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center justify-center rounded px-3 py-1.5 font-medium hover:bg-primary hover:text-white"
                href="#"
              >
                3
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center justify-center rounded px-3 py-1.5 font-medium hover:bg-primary hover:text-white"
                href="#"
              >
                4
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center justify-center rounded px-3 py-1.5 font-medium hover:bg-primary hover:text-white"
                href="#"
              >
                5
              </Link>
            </li>
            <li>
              <Link
                className="flex h-9 w-7.5 items-center justify-center rounded px-3 py-1.5 font-medium hover:bg-primary hover:text-white"
                href="#"
              >
                <svg
                  className="fill-current"
                  width="10"
                  height="3"
                  viewBox="0 0 10 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.927734 2.06738C1.41992 2.06738 1.8164 1.66406 1.8164 1.17871C1.8164 0.686523 1.41992 0.290039 0.927734 0.290039C0.442383 0.290039 0.0390625 0.686523 0.0390625 1.17871C0.0390625 1.66406 0.442383 2.06738 0.927734 2.06738ZM4.99998 2.06738C5.49217 2.06738 5.88865 1.66406 5.88865 1.17871C5.88865 0.686523 5.49217 0.290039 4.99998 0.290039C4.51463 0.290039 4.11131 0.686523 4.11131 1.17871C4.11131 1.66406 4.51463 2.06738 4.99998 2.06738ZM9.07224 2.06738C9.56443 2.06738 9.96091 1.66406 9.96091 1.17871C9.96091 0.686523 9.56443 0.290039 9.07224 0.290039C8.58689 0.290039 8.18357 0.686523 8.18357 1.17871C8.18357 1.66406 8.58689 2.06738 9.07224 2.06738Z"
                    fill=""
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center justify-center rounded px-3 py-1.5 font-medium hover:bg-primary hover:text-white"
                href="#"
              >
                10
              </Link>
            </li>
            <li>
              <Link
                className="flex h-8 w-8 items-center justify-center rounded hover:bg-primary hover:text-white"
                href="#"
              >
                <svg
                  className="fill-current"
                  width="8"
                  height="16"
                  viewBox="0 0 8 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.819531 15.1156C0.650781 15.1156 0.510156 15.0593 0.369531 14.9468C0.116406 14.6937 0.116406 14.3 0.369531 14.0468L6.27578 7.99995L0.369531 1.9812C0.116406 1.72808 0.116406 1.33433 0.369531 1.0812C0.622656 0.828076 1.01641 0.828076 1.26953 1.0812L7.62578 7.54995C7.87891 7.80308 7.87891 8.19683 7.62578 8.44995L1.26953 14.9187C1.15703 15.0312 0.988281 15.1156 0.819531 15.1156Z"
                    fill=""
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PaginationOne;
