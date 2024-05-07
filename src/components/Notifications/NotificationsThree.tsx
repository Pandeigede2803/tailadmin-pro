import React from "react";

const NotificationsThree: React.FC = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-7.5">
        <h3 className="font-medium text-black dark:text-white">
          Notifications Style 3
        </h3>
      </div>

      <div className="p-4 sm:p-6 xl:p-10">
        <div className="max-w-[557px] rounded-lg border border-stroke py-6 pl-4 pr-5.5 dark:border-strokedark dark:bg-meta-4 sm:pl-6">
          <div className="flex justify-between">
            <div className="flex flex-grow gap-6">
              <div>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.0163 29.4375C10.5476 29.4375 10.0788 29.2031 9.75071 28.8281C9.14133 28.125 9.32883 27.2344 9.42258 26.8125L12.0945 15.4219H6.75071C6.42258 15.4219 5.81321 15.4219 5.34446 15.0469C4.50071 14.3906 4.73508 13.1719 4.82883 12.7969L6.89133 2.85938C6.98508 2.39063 7.17258 1.59375 7.78196 1.07813C8.39133 0.609375 9.14133 0.609375 9.65696 0.609375H16.3132C16.8757 0.609375 18.0007 0.609375 18.657 1.45313C19.3132 2.29688 19.0788 3.375 18.9851 3.9375L18.282 7.03125L22.8757 7.07813C24.1413 7.07813 24.8913 7.5 25.1726 8.29688C25.4538 9.14063 24.9851 9.89063 24.7038 10.2656L12.8445 28.1719C12.6101 28.5 12.282 29.0156 11.7663 29.25C11.5788 29.3438 11.3445 29.3906 11.157 29.3906C11.1101 29.3906 11.0632 29.4375 11.0163 29.4375ZM9.65696 2.25C9.37571 2.25 9.00071 2.25 8.81321 2.39063C8.62571 2.53125 8.53196 2.95313 8.48508 3.23438L6.46946 13.125C6.37571 13.6406 6.42258 13.7813 6.42258 13.7813C6.46946 13.7813 6.70383 13.7813 6.79758 13.7813H13.1726C13.407 13.7813 13.6413 13.875 13.8288 14.1094C13.9695 14.2969 14.0632 14.5781 13.9695 14.8125L11.0163 27.1875C10.9226 27.6094 10.9226 27.7031 10.9695 27.75C11.0163 27.7969 11.0163 27.7969 11.0163 27.7969C11.157 27.7031 11.3445 27.4688 11.4851 27.2813L23.3445 9.32813C23.5788 9 23.6257 8.85938 23.6257 8.8125C23.5788 8.8125 23.4382 8.71875 22.8757 8.71875L17.2976 8.67188C17.0632 8.67188 16.8288 8.57813 16.6413 8.34375C16.5007 8.15625 16.407 7.875 16.5007 7.64062L17.3913 3.51562C17.4382 3.23438 17.5788 2.625 17.3913 2.4375C17.2038 2.20312 16.5945 2.20312 16.3132 2.20312L9.65696 2.25Z"
                    fill="#3056D3"
                  />
                </svg>
              </div>
              <div>
                <h4 className="mb-2 text-title-xsm font-medium text-black dark:text-white">
                  New update! available
                </h4>
                <p className="font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam nec ligula at dolor aliquam mollis.
                </p>
                <button className="mt-5 font-medium text-primary">
                  Update now
                </button>
              </div>
            </div>

            <div>
              <button className="hover:text-black dark:hover:text-white">
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

export default NotificationsThree;
