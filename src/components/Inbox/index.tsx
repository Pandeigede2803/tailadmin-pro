"use client";
import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DropdownDefault from "@/components/Dropdowns/DropdownDefault";
import InboxMenuList from "@/components/Inbox/InboxMenuList";
import InboxList from "@/components/Inbox/InboxList";

const Inbox: React.FC = () => {
  const [inboxSidebarToggle, setInboxSidebarToggle] = useState(false);

  return (
    <>
      <Breadcrumb pageName="Inbox" />

      <div className="h-[calc(100vh-186px)] overflow-hidden sm:h-[calc(100vh-174px)]">
        <div className="h-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark lg:flex">
          <div
            className={`fixed bottom-0 top-22.5 z-999 flex w-[230px] -translate-x-[120%] flex-col rounded-md border border-stroke bg-white dark:border-strokedark dark:bg-boxdark lg:static lg:w-1/5 lg:translate-x-0 lg:border-none ${
              inboxSidebarToggle && "!translate-x-0 duration-300 ease-linear"
            }`}
          >
            <button
              onClick={() => setInboxSidebarToggle(!inboxSidebarToggle)}
              className={`absolute -right-20 z-99999 block rounded-md border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden ${
                inboxSidebarToggle && "!-right-9"
              }`}
            >
              <svg
                className="h-5 w-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path d="M 22.1875 2.28125 L 20.78125 3.71875 L 25.0625 8 L 4 8 L 4 10 L 25.0625 10 L 20.78125 14.28125 L 22.1875 15.71875 L 28.90625 9 Z M 9.8125 16.28125 L 3.09375 23 L 9.8125 29.71875 L 11.21875 28.28125 L 6.9375 24 L 28 24 L 28 22 L 6.9375 22 L 11.21875 17.71875 Z" />
              </svg>
            </button>

            <div className="px-4 pt-4">
              <button className="flex w-full rounded-md bg-primary px-5.5 py-2.5 font-medium text-white">
                Compose
              </button>
            </div>

            <div className="no-scrollbar max-h-full overflow-auto py-6">
              <InboxMenuList />
            </div>
          </div>
          <div className="flex h-full flex-col border-l border-stroke dark:border-strokedark lg:w-4/5">
            {/* <!-- ====== Inbox List Start --> */}
            <div className="flex flex-col-reverse justify-between gap-6 py-4.5 pl-4 pr-4 sm:flex-row lg:pl-10 lg:pr-7.5">
              <div className="flex items-center gap-4">
                <label
                  htmlFor="checkboxAll"
                  className="flex cursor-pointer select-none items-center font-medium"
                >
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="checkboxAll"
                      className="tableCheckbox sr-only"
                    />
                    <div className="box flex h-5 w-5 items-center justify-center rounded-[3px] border-[.5px] border-stroke bg-gray-2 text-white dark:border-strokedark dark:bg-boxdark-2">
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

                <button>
                  <svg
                    className="fill-danger"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.753 2.47499H11.5874V1.99687C11.5874 1.15312 10.9124 0.478119 10.0687 0.478119H7.90303C7.05928 0.478119 6.38428 1.15312 6.38428 1.99687V2.47499H4.21865C3.40303 2.47499 2.72803 3.14999 2.72803 3.96562V4.80937C2.72803 5.42812 3.09365 5.93437 3.62803 6.15937L4.07803 15.8906C4.13428 16.8187 4.86553 17.5219 5.79365 17.5219H12.1218C13.0499 17.5219 13.8093 16.7906 13.8374 15.8906L14.3437 6.13124C14.878 5.90624 15.2437 5.37187 15.2437 4.78124V3.93749C15.2437 3.14999 14.5687 2.47499 13.753 2.47499ZM7.67803 1.99687C7.67803 1.85624 7.79053 1.74374 7.93115 1.74374H10.0968C10.2374 1.74374 10.3499 1.85624 10.3499 1.99687V2.47499H7.70615V1.99687H7.67803ZM4.02178 3.96562C4.02178 3.85312 4.10615 3.74062 4.24678 3.74062H13.753C13.8655 3.74062 13.978 3.82499 13.978 3.96562V4.80937C13.978 4.92187 13.8937 5.03437 13.753 5.03437H4.24678C4.13428 5.03437 4.02178 4.94999 4.02178 4.80937V3.96562ZM12.1499 16.2562H5.8499C5.59678 16.2562 5.3999 16.0594 5.3999 15.8344L4.9499 6.29999H13.078L12.628 15.8344C12.5999 16.0594 12.403 16.2562 12.1499 16.2562Z"
                      fill=""
                    />
                    <path
                      d="M8.9999 8.74686C8.6624 8.74686 8.35303 9.02811 8.35303 9.39373V13.7531C8.35303 14.0906 8.63428 14.4 8.9999 14.4C9.3374 14.4 9.64678 14.1187 9.64678 13.7531V9.36561C9.64678 9.02811 9.3374 8.74686 8.9999 8.74686Z"
                      fill=""
                    />
                    <path
                      d="M11.6157 9.28124C11.2782 9.25311 10.9688 9.53436 10.9407 9.87186L10.772 13.1062C10.7438 13.4437 11.0251 13.7531 11.3626 13.7812H11.3907C11.7282 13.7812 12.0095 13.5281 12.0095 13.1906L12.1782 9.95624C12.2345 9.59061 11.9532 9.30936 11.6157 9.28124Z"
                      fill=""
                    />
                    <path
                      d="M6.35624 9.28124C6.01874 9.30936 5.73749 9.59061 5.76561 9.95624L5.96249 13.2187C5.99061 13.5562 6.27186 13.8094 6.58124 13.8094H6.60936C6.94686 13.7812 7.22811 13.5 7.19999 13.1344L7.03124 9.87186C7.00311 9.53436 6.69374 9.25311 6.35624 9.28124Z"
                      fill=""
                    />
                  </svg>
                </button>

                <button>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.2425 11.024C16.3108 10.6923 16.1139 10.3513 15.7681 10.2587C15.4364 10.1904 15.0954 10.3872 15.0028 10.733C14.5958 12.5593 13.455 14.1273 11.8475 15.0554C8.65669 16.8976 4.58423 15.8064 2.74204 12.6156C0.899853 9.42483 1.99107 5.35236 5.18183 3.51018C7.54446 2.14611 10.4688 2.3738 12.5973 4.03532L11.1853 4.23348C10.8227 4.28044 10.5904 4.60939 10.6477 4.93357C10.6655 5.0207 10.6833 5.10784 10.7115 5.15655C10.838 5.37576 11.0723 5.50031 11.3478 5.47117L14.2729 5.08139C14.6355 5.03442 14.8678 4.70547 14.8105 4.38129L14.4207 1.45617C14.3738 1.09357 14.0448 0.861306 13.7206 0.918566C13.358 0.965531 13.1258 1.29449 13.183 1.61866L13.3428 3.02033C10.8189 1.06754 7.35007 0.796926 4.52466 2.42818C0.749331 4.60786 -0.572129 9.46278 1.62162 13.2625C3.81537 17.0622 8.65622 18.3593 12.4559 16.1655C14.3801 15.0546 15.7672 13.182 16.2425 11.024Z"
                      fill="#98A6AD"
                    />
                  </svg>
                </button>

                <div className="text-right">
                  <DropdownDefault />
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for user, email address..."
                  className="block w-full bg-transparent pl-7 pr-25 font-medium outline-none"
                />
                <span className="absolute left-0 top-1/2 -translate-y-1/2">
                  <svg
                    className="fill-[#637381] hover:fill-primary"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.25 3C5.3505 3 3 5.3505 3 8.25C3 11.1495 5.3505 13.5 8.25 13.5C11.1495 13.5 13.5 11.1495 13.5 8.25C13.5 5.3505 11.1495 3 8.25 3ZM1.5 8.25C1.5 4.52208 4.52208 1.5 8.25 1.5C11.9779 1.5 15 4.52208 15 8.25C15 11.9779 11.9779 15 8.25 15C4.52208 15 1.5 11.9779 1.5 8.25Z"
                      fill=""
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.9572 11.9572C12.2501 11.6643 12.7249 11.6643 13.0178 11.9572L16.2803 15.2197C16.5732 15.5126 16.5732 15.9874 16.2803 16.2803C15.9874 16.5732 15.5126 16.5732 15.2197 16.2803L11.9572 13.0178C11.6643 12.7249 11.6643 12.2501 11.9572 11.9572Z"
                      fill=""
                    />
                  </svg>
                </span>
                <button className="absolute right-0 top-1/2 -translate-y-1/2">
                  <svg
                    className="fill-[#637381] hover:fill-primary"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_3018_1095)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.25 3C8.25 3.41421 7.91421 3.75 7.5 3.75L2.25 3.75C1.83578 3.75 1.5 3.41421 1.5 3C1.5 2.58579 1.83578 2.25 2.25 2.25L7.5 2.25C7.91421 2.25 8.25 2.58579 8.25 3Z"
                        fill=""
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.5 3C16.5 3.41421 16.1642 3.75 15.75 3.75L10.5 3.75C10.0858 3.75 9.75 3.41421 9.75 3C9.75 2.58579 10.0858 2.25 10.5 2.25L15.75 2.25C16.1642 2.25 16.5 2.58579 16.5 3Z"
                        fill=""
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.75 9C9.75 9.41421 9.41421 9.75 9 9.75L2.25 9.75C1.83579 9.75 1.5 9.41421 1.5 9C1.5 8.58579 1.83579 8.25 2.25 8.25L9 8.25C9.41421 8.25 9.75 8.58579 9.75 9Z"
                        fill=""
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.5 9C16.5 9.41421 16.1642 9.75 15.75 9.75L12 9.75C11.5858 9.75 11.25 9.41421 11.25 9C11.25 8.58579 11.5858 8.25 12 8.25L15.75 8.25C16.1642 8.25 16.5 8.58579 16.5 9Z"
                        fill=""
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.75 15C6.75 15.4142 6.41421 15.75 6 15.75L2.25 15.75C1.83578 15.75 1.5 15.4142 1.5 15C1.5 14.5858 1.83578 14.25 2.25 14.25L6 14.25C6.41421 14.25 6.75 14.5858 6.75 15Z"
                        fill=""
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.5 15C16.5 15.4142 16.1642 15.75 15.75 15.75L9 15.75C8.58579 15.75 8.25 15.4142 8.25 15C8.25 14.5858 8.58579 14.25 9 14.25L15.75 14.25C16.1642 14.25 16.5 14.5858 16.5 15Z"
                        fill=""
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.5 -3.27835e-08C7.91421 -1.46777e-08 8.25 0.335786 8.25 0.75L8.25 5.25C8.25 5.66421 7.91421 6 7.5 6C7.08579 6 6.75 5.66421 6.75 5.25L6.75 0.75C6.75 0.335786 7.08579 -5.08894e-08 7.5 -3.27835e-08Z"
                        fill=""
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 6C12.4142 6 12.75 6.33579 12.75 6.75L12.75 11.25C12.75 11.6642 12.4142 12 12 12C11.5858 12 11.25 11.6642 11.25 11.25L11.25 6.75C11.25 6.33579 11.5858 6 12 6Z"
                        fill=""
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6 12C6.41421 12 6.75 12.3358 6.75 12.75L6.75 17.25C6.75 17.6642 6.41421 18 6 18C5.58579 18 5.25 17.6642 5.25 17.25L5.25 12.75C5.25 12.3358 5.58579 12 6 12Z"
                        fill=""
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3018_1095">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(18) rotate(90)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>

            <div className="h-full">
              <InboxList />
            </div>

            <div className="flex items-center justify-between border-t border-stroke p-4 dark:border-strokedark sm:px-6">
              <p className="text-base font-medium text-black dark:text-white md:text-lg">
                1-5 of 29
              </p>
              <div className="flex items-center justify-end space-x-3">
                <button className="flex h-7.5 w-7.5 items-center justify-center rounded border border-stroke bg-whiten hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:bg-whiten/30">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.25 10C14.8023 10 15.25 9.55228 15.25 9C15.25 8.44771 14.8023 8 14.25 8L14.25 10ZM3.75 9L3.04289 8.29289C2.65237 8.68342 2.65237 9.31658 3.04289 9.70711L3.75 9ZM8.29289 14.9571C8.68342 15.3476 9.31658 15.3476 9.70711 14.9571C10.0976 14.5666 10.0976 13.9334 9.70711 13.5429L8.29289 14.9571ZM9.7071 4.45711C10.0976 4.06658 10.0976 3.43342 9.7071 3.04289C9.31658 2.65237 8.68342 2.65237 8.29289 3.04289L9.7071 4.45711ZM14.25 8L3.75 8L3.75 10L14.25 10L14.25 8ZM9.70711 13.5429L4.4571 8.29289L3.04289 9.70711L8.29289 14.9571L9.70711 13.5429ZM4.4571 9.70711L9.7071 4.45711L8.29289 3.04289L3.04289 8.29289L4.4571 9.70711Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <button className="flex h-7.5 w-7.5 items-center justify-center rounded border border-stroke bg-whiten hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:bg-whiten/30">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.75 8C3.19772 8 2.75 8.44772 2.75 9C2.75 9.55229 3.19772 10 3.75 10V8ZM14.25 9L14.9571 9.70711C15.3476 9.31658 15.3476 8.68342 14.9571 8.29289L14.25 9ZM9.70711 3.04289C9.31658 2.65237 8.68342 2.65237 8.29289 3.04289C7.90237 3.43342 7.90237 4.06658 8.29289 4.45711L9.70711 3.04289ZM8.29289 13.5429C7.90237 13.9334 7.90237 14.5666 8.29289 14.9571C8.68342 15.3476 9.31658 15.3476 9.70711 14.9571L8.29289 13.5429ZM3.75 10H14.25V8H3.75V10ZM8.29289 4.45711L13.5429 9.70711L14.9571 8.29289L9.70711 3.04289L8.29289 4.45711ZM13.5429 8.29289L8.29289 13.5429L9.70711 14.9571L14.9571 9.70711L13.5429 8.29289Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* // <!-- ====== Inbox List End --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Inbox;
