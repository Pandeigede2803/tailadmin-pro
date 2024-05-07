import React from "react";

const NotificationsTwo: React.FC = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-7.5">
        <h3 className="font-medium text-black dark:text-white">
          Notifications Style 2
        </h3>
      </div>

      <div className="p-4 sm:p-6 xl:p-10">
        <div className="max-w-[490px] rounded-lg border border-[#F5C5BB] bg-[#FCEDEA] py-4 pl-4 pr-5.5 shadow-2 dark:border-[#EA4E2C] dark:bg-[#1B1B24]">
          <div className="flex items-center justify-between">
            <div className="flex flex-grow items-center gap-5">
              <div className="flex h-15 w-full max-w-15 items-center justify-center rounded-md bg-[#EA4E2C]">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.2021 3.33462C14.7513 3.02546 15.3708 2.86304 16.001 2.86304C16.6312 2.86304 17.2507 3.02546 17.7999 3.33462C18.349 3.64379 18.8092 4.08926 19.136 4.62807L19.1389 4.63282L30.4322 23.4862L30.4403 23.5C30.7605 24.0544 30.9299 24.683 30.9317 25.3233C30.9335 25.9635 30.7676 26.593 30.4505 27.1493C30.1335 27.7055 29.6763 28.169 29.1245 28.4937C28.5727 28.8184 27.9455 28.9929 27.3053 29L27.2943 29.0001L4.69668 29C4.05647 28.993 3.42928 28.8184 2.87748 28.4937C2.32568 28.169 1.86851 27.7055 1.55146 27.1493C1.23441 26.593 1.06853 25.9635 1.07033 25.3233C1.07212 24.683 1.24152 24.0544 1.56168 23.5L1.5698 23.4862L12.8631 4.63282L13.721 5.1467L12.866 4.62807C13.1928 4.08926 13.653 3.64379 14.2021 3.33462ZM14.5773 5.6632C14.5769 5.66391 14.5764 5.66462 14.576 5.66532L3.29013 24.5062C3.14689 24.7567 3.07113 25.0402 3.07032 25.3289C3.0695 25.6199 3.1449 25.906 3.28902 26.1589C3.43313 26.4117 3.64093 26.6224 3.89175 26.77C4.14117 26.9167 4.42447 26.996 4.71376 27H27.2882C27.5775 26.996 27.8608 26.9167 28.1103 26.77C28.3611 26.6224 28.5689 26.4117 28.713 26.1589C28.8571 25.906 28.9325 25.6199 28.9317 25.3289C28.9309 25.0402 28.8551 24.7567 28.7119 24.5062L17.426 5.66532C17.4256 5.66462 17.4251 5.66391 17.4247 5.6632C17.2762 5.41924 17.0676 5.21752 16.8187 5.07739C16.5691 4.93686 16.2875 4.86304 16.001 4.86304C15.7146 4.86304 15.4329 4.93686 15.1833 5.07739C14.9345 5.21752 14.7258 5.41924 14.5773 5.6632Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 11C16.5523 11 17 11.4477 17 12V17.3333C17 17.8856 16.5523 18.3333 16 18.3333C15.4477 18.3333 15 17.8856 15 17.3333V12C15 11.4477 15.4477 11 16 11Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15 22.6666C15 22.1143 15.4477 21.6666 16 21.6666H16.0133C16.5656 21.6666 17.0133 22.1143 17.0133 22.6666C17.0133 23.2189 16.5656 23.6666 16.0133 23.6666H16C15.4477 23.6666 15 23.2189 15 22.6666Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <h4 className="mb-0.5 text-title-xsm font-medium text-black dark:text-[#EA4E2C]">
                  Uh oh, something went wrong
                </h4>
                <p className="text-sm font-medium">
                  Sorry! There was a problem with your request
                </p>
              </div>
            </div>

            <div>
              <button className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-[#637381] hover:text-black dark:bg-meta-4 dark:hover:text-white">
                <svg
                  className="fill-current"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.854423 0.85186C1.2124 0.493879 1.79281 0.493879 2.15079 0.85186L7.0026 5.70368L11.8544 0.85186C12.2124 0.493879 12.7928 0.493879 13.1508 0.85186C13.5088 1.20984 13.5088 1.79024 13.1508 2.14822L8.29897 7.00004L13.1508 11.8519C13.5088 12.2098 13.5088 12.7902 13.1508 13.1482C12.7928 13.5062 12.2124 13.5062 11.8544 13.1482L7.0026 8.2964L2.15079 13.1482C1.79281 13.5062 1.2124 13.5062 0.854423 13.1482C0.496442 12.7902 0.496442 12.2098 0.854423 11.8519L5.70624 7.00004L0.854423 2.14822C0.496442 1.79024 0.496442 1.20984 0.854423 0.85186Z"
                    fill=""
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsTwo;
