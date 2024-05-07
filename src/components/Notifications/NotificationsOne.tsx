import React from "react";

const NotificationsOne: React.FC = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-7.5">
        <h3 className="font-medium text-black dark:text-white">
          Notifications Style 1
        </h3>
      </div>

      <div className="p-4 sm:p-6 xl:p-10">
        <div className="max-w-[422px] rounded-lg py-4 pl-4 pr-4.5 shadow-2 dark:bg-meta-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-grow items-center gap-5">
              <div className="flex h-10 w-full max-w-10 items-center justify-center rounded-full bg-[#1EA779]">
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.1264 2.27326C17.9391 2.06543 17.6448 2.06543 17.4574 2.27326L7.69058 12.7836C7.61031 12.8726 7.50327 12.8726 7.423 12.7836L2.5797 7.5581C2.39239 7.35027 2.09805 7.35027 1.91074 7.5581C1.72343 7.76593 1.72343 8.09252 1.91074 8.30035L6.75403 13.5258C6.9681 13.7633 7.26245 13.8821 7.53003 13.8821C7.82437 13.8821 8.09196 13.7633 8.30603 13.5258L18.0729 3.01551C18.287 2.80768 18.287 2.48109 18.1264 2.27326Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.0302 1.51876L19.0574 1.55404C19.5496 2.19109 19.5671 3.17716 18.9194 3.83286L9.17296 14.3212C8.74637 14.7905 8.16862 15.0586 7.53004 15.0586C6.93379 15.0586 6.3244 14.8022 5.88662 14.3206L1.03674 9.08806C0.446028 8.43262 0.446113 7.42591 1.03683 6.77048C1.68907 6.04677 2.79116 6.04419 3.44661 6.76274L7.55774 11.1983L16.5912 1.47722C17.2467 0.759356 18.3483 0.76216 19.0003 1.48564L19.0302 1.51876ZM2.5797 7.5581C2.39239 7.35027 2.09805 7.35027 1.91074 7.5581C1.747 7.73978 1.7264 8.01221 1.84893 8.21672C1.85132 8.22072 1.85377 8.22469 1.85627 8.22863C1.87221 8.25374 1.89037 8.27775 1.91074 8.30035L6.75403 13.5258C6.9681 13.7633 7.26245 13.8821 7.53003 13.8821C7.82437 13.8821 8.09196 13.7633 8.30603 13.5258L18.0729 3.01551C18.1038 2.98556 18.1302 2.95313 18.1523 2.91895C18.155 2.91483 18.1576 2.91069 18.1601 2.90652C18.2828 2.70529 18.261 2.44753 18.1264 2.27326C17.9391 2.06543 17.6448 2.06543 17.4574 2.27326L7.69058 12.7836C7.65639 12.8215 7.61735 12.8433 7.57759 12.8489C7.5706 12.8499 7.56359 12.8504 7.55658 12.8504C7.54772 12.8504 7.53886 12.8495 7.53004 12.8479C7.52377 12.8468 7.51753 12.8452 7.51133 12.8433C7.50632 12.8417 7.50132 12.8399 7.49637 12.8378C7.47058 12.8268 7.44571 12.8088 7.423 12.7836L2.5797 7.5581Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <h4 className="mb-0.5 text-title-xsm font-medium text-black dark:text-white">
                  Congratulations
                </h4>
                <p className="text-sm font-medium">
                  your message sent successfully
                </p>
              </div>
            </div>

            <div>
              <button className="text-[#B1B1B1] hover:text-black dark:hover:text-white">
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

export default NotificationsOne;
