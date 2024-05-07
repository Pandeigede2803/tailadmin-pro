import React from "react";
import Link from "next/link";
import CheckMark from "../CheckMarks/CheckMark";
import CloseMark from "../CloseMarks/CloseMark";

const PricingTableTwo: React.FC = () => {
  return (
    <div className="relative z-10 overflow-hidden rounded-sm border border-stroke bg-white p-11 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="w-full overflow-x-auto">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="w-1/4 min-w-[200px] px-5"></th>
              <th className="w-1/4 min-w-[200px] px-5">
                <div className="mb-10 text-left">
                  <span className="mb-3.5 block text-xl font-bold text-black dark:text-white">
                    Starter
                  </span>
                  <h4 className="mb-4">
                    <span className="text-[28px] font-bold text-black dark:text-white lg:text-[32px]">
                      $59
                    </span>
                    <span className="font-medium">Per Month</span>
                  </h4>
                  <p className="mb-6 text-base font-medium">
                    Best suited for freelancers who works individually.
                  </p>
                  <Link
                    href="#"
                    className="block w-full rounded-md bg-primary p-3 text-center font-medium text-white transition hover:bg-opacity-90"
                  >
                    Purchase Now
                  </Link>
                </div>
              </th>
              <th className="w-1/4 min-w-[200px] px-5">
                <div className="mb-10 text-left">
                  <span className="mb-3.5 block text-xl font-bold text-black dark:text-white">
                    Agency
                  </span>
                  <h4 className="mb-4">
                    <span className="text-[28px] font-bold text-black dark:text-white lg:text-[32px]">
                      $99
                    </span>
                    <span className="font-medium">Per Month</span>
                  </h4>
                  <p className="mb-6 font-medium">
                    Best suited for agencies and small business.
                  </p>
                  <Link
                    href="#"
                    className="block w-full rounded-md bg-[#13C296] p-3 text-center font-medium text-white transition hover:bg-opacity-90"
                  >
                    Purchase Now
                  </Link>
                </div>
              </th>
              <th className="w-1/4 min-w-[200px] px-5">
                <div className="mb-10 text-left">
                  <span className="mb-3.5 block text-xl font-bold text-black dark:text-white">
                    Extended
                  </span>
                  <h4 className="mb-4">
                    <span className="text-[28px] font-bold text-black dark:text-white lg:text-[32px]">
                      $149
                    </span>
                    <span className="font-medium">Per Month</span>
                  </h4>
                  <p className="mb-6 font-medium">
                    Best suited for agencies and large business.
                  </p>
                  <Link
                    href="#"
                    className="block w-full rounded-md bg-primary p-3 text-center font-medium text-white transition hover:bg-opacity-90"
                  >
                    Purchase Now
                  </Link>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <h5 className="font-medium text-black dark:text-white">
                  Key Features
                </h5>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <h5 className="text-center font-medium text-black dark:text-white">
                  Features Limits
                </h5>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <h5 className="text-center font-medium text-black dark:text-white">
                  Features Limits
                </h5>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <h5 className="text-center font-medium text-black dark:text-white">
                  Features Limits
                </h5>
              </td>
            </tr>
            <tr>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="font-medium">Seats</p>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="text-center font-medium">1 Developer</p>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="text-center font-medium">5 Developer</p>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="text-center font-medium">20 Developer</p>
              </td>
            </tr>
            <tr>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="font-medium">Domains/Products</p>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="text-center font-medium">5 Products</p>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="text-center font-medium">5 Products</p>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="text-center font-medium">5 Products</p>
              </td>
            </tr>
            <tr>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="font-medium">Email Support</p>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="text-center font-medium">6 Months</p>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="text-center font-medium">6 Months</p>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="text-center font-medium">6 Months</p>
              </td>
            </tr>
            <tr>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="font-medium">All Pro Components</p>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="flex justify-center text-center">
                  <CheckMark />
                </p>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="flex justify-center text-center">
                  <CheckMark />
                </p>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="flex justify-center text-center">
                  <CheckMark />
                </p>
              </td>
            </tr>
            <tr>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="font-medium">Design Source Files</p>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="flex justify-center text-center">
                  <CloseMark />
                </p>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="flex justify-center text-center">
                  <CheckMark />
                </p>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="flex justify-center text-center">
                  <CheckMark />
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <span className="absolute left-0 top-0 -z-1">
          <svg
            width="213"
            height="188"
            viewBox="0 0 213 188"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="75" cy="50" r="138" fill="url(#paint0_linear)" />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="75"
                y1="-88"
                x2="75"
                y2="188"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3056D3" stopOpacity="0.15" />
                <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="absolute left-11 top-30 -z-1">
          <svg
            width="50"
            height="109"
            viewBox="0 0 50 109"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="47.71"
              cy="107.259"
              r="1.74121"
              transform="rotate(180 47.71 107.259)"
              fill="#3056D3"
            />
            <circle
              cx="47.71"
              cy="91.9355"
              r="1.74121"
              transform="rotate(180 47.71 91.9355)"
              fill="#3056D3"
            />
            <circle
              cx="47.71"
              cy="76.6133"
              r="1.74121"
              transform="rotate(180 47.71 76.6133)"
              fill="#3056D3"
            />
            <circle
              cx="47.71"
              cy="47.0132"
              r="1.74121"
              transform="rotate(180 47.71 47.0132)"
              fill="#3056D3"
            />
            <circle
              cx="47.71"
              cy="16.7158"
              r="1.74121"
              transform="rotate(180 47.71 16.7158)"
              fill="#3056D3"
            />
            <circle
              cx="47.71"
              cy="61.6392"
              r="1.74121"
              transform="rotate(180 47.71 61.6392)"
              fill="#3056D3"
            />
            <circle
              cx="47.71"
              cy="32.0386"
              r="1.74121"
              transform="rotate(180 47.71 32.0386)"
              fill="#3056D3"
            />
            <circle
              cx="47.71"
              cy="1.74121"
              r="1.74121"
              transform="rotate(180 47.71 1.74121)"
              fill="#3056D3"
            />
            <circle
              cx="32.3877"
              cy="107.259"
              r="1.74121"
              transform="rotate(180 32.3877 107.259)"
              fill="#3056D3"
            />
            <circle
              cx="32.3877"
              cy="91.9355"
              r="1.74121"
              transform="rotate(180 32.3877 91.9355)"
              fill="#3056D3"
            />
            <circle
              cx="32.3877"
              cy="76.6133"
              r="1.74121"
              transform="rotate(180 32.3877 76.6133)"
              fill="#3056D3"
            />
            <circle
              cx="32.3877"
              cy="47.0132"
              r="1.74121"
              transform="rotate(180 32.3877 47.0132)"
              fill="#3056D3"
            />
            <circle
              cx="32.3877"
              cy="16.7158"
              r="1.74121"
              transform="rotate(180 32.3877 16.7158)"
              fill="#3056D3"
            />
            <circle
              cx="32.3877"
              cy="61.6392"
              r="1.74121"
              transform="rotate(180 32.3877 61.6392)"
              fill="#3056D3"
            />
            <circle
              cx="32.3877"
              cy="32.0386"
              r="1.74121"
              transform="rotate(180 32.3877 32.0386)"
              fill="#3056D3"
            />
            <circle
              cx="32.3877"
              cy="1.74121"
              r="1.74121"
              transform="rotate(180 32.3877 1.74121)"
              fill="#3056D3"
            />
            <circle
              cx="17.0654"
              cy="107.259"
              r="1.74121"
              transform="rotate(180 17.0654 107.259)"
              fill="#3056D3"
            />
            <circle
              cx="17.0654"
              cy="91.9355"
              r="1.74121"
              transform="rotate(180 17.0654 91.9355)"
              fill="#3056D3"
            />
            <circle
              cx="17.0654"
              cy="76.6133"
              r="1.74121"
              transform="rotate(180 17.0654 76.6133)"
              fill="#3056D3"
            />
            <circle
              cx="17.0654"
              cy="47.0132"
              r="1.74121"
              transform="rotate(180 17.0654 47.0132)"
              fill="#3056D3"
            />
            <circle
              cx="17.0654"
              cy="16.7158"
              r="1.74121"
              transform="rotate(180 17.0654 16.7158)"
              fill="#3056D3"
            />
            <circle
              cx="17.0654"
              cy="61.6392"
              r="1.74121"
              transform="rotate(180 17.0654 61.6392)"
              fill="#3056D3"
            />
            <circle
              cx="17.0654"
              cy="32.0386"
              r="1.74121"
              transform="rotate(180 17.0654 32.0386)"
              fill="#3056D3"
            />
            <circle
              cx="17.0654"
              cy="1.74121"
              r="1.74121"
              transform="rotate(180 17.0654 1.74121)"
              fill="#3056D3"
            />
            <circle
              cx="1.74121"
              cy="107.259"
              r="1.74121"
              transform="rotate(180 1.74121 107.259)"
              fill="#3056D3"
            />
            <circle
              cx="1.74121"
              cy="91.9355"
              r="1.74121"
              transform="rotate(180 1.74121 91.9355)"
              fill="#3056D3"
            />
            <circle
              cx="1.74121"
              cy="76.6133"
              r="1.74121"
              transform="rotate(180 1.74121 76.6133)"
              fill="#3056D3"
            />
            <circle
              cx="1.74121"
              cy="47.0132"
              r="1.74121"
              transform="rotate(180 1.74121 47.0132)"
              fill="#3056D3"
            />
            <circle
              cx="1.74121"
              cy="16.7158"
              r="1.74121"
              transform="rotate(180 1.74121 16.7158)"
              fill="#3056D3"
            />
            <circle
              cx="1.74121"
              cy="61.6392"
              r="1.74121"
              transform="rotate(180 1.74121 61.6392)"
              fill="#3056D3"
            />
            <circle
              cx="1.74121"
              cy="32.0386"
              r="1.74121"
              transform="rotate(180 1.74121 32.0386)"
              fill="#3056D3"
            />
            <circle
              cx="1.74121"
              cy="1.74121"
              r="1.74121"
              transform="rotate(180 1.74121 1.74121)"
              fill="#3056D3"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default PricingTableTwo;
