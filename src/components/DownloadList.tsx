import React from "react";

const DownloadList: React.FC = () => {
  return (
    <div className="col-span-12">
      <div className="rounded-sm border border-stroke bg-white py-3 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex justify-between gap-2.5 px-6 py-3 hover:bg-gray-2 dark:hover:bg-meta-4 sm:items-center sm:justify-start">
          <div className="flex items-center gap-5.5 sm:w-5/12 xl:w-3/12">
            <div className="hidden h-14 w-full max-w-14 items-center justify-center rounded-full border border-stroke bg-gray text-black-2 dark:border-strokedark dark:bg-graydark dark:text-white sm:flex">
              <svg
                className="fill-current"
                width="28"
                height="29"
                viewBox="0 0 28 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.72659 3.36759C5.32314 2.77105 6.13222 2.43591 6.97585 2.43591H16.2295L16.2299 2.43591L16.2303 2.43591C16.4817 2.43591 16.7081 2.54281 16.8665 2.71363L23.7604 9.6075C23.9312 9.76594 24.0381 9.99231 24.0381 10.2437C24.0381 10.2568 24.0378 10.2699 24.0372 10.2828V24.1241C24.0372 24.9677 23.7021 25.7768 23.1055 26.3733C22.509 26.9699 21.6999 27.305 20.8563 27.305H6.97585C6.13222 27.305 5.32313 26.9699 4.72659 26.3733C4.13005 25.7768 3.79492 24.9677 3.79492 24.1241V5.61684C3.79492 4.77321 4.13005 3.96413 4.72659 3.36759ZM6.97585 4.17097H15.3628V10.2437C15.3628 10.7228 15.7512 11.1112 16.2303 11.1112H22.3022V24.1241C22.3022 24.5075 22.1498 24.8753 21.8787 25.1465C21.6075 25.4176 21.2397 25.57 20.8563 25.57H6.97585C6.59238 25.57 6.22462 25.4176 5.95346 25.1465C5.68231 24.8753 5.52997 24.5075 5.52997 24.1241V5.61684C5.52997 5.23337 5.68231 4.86561 5.95346 4.59445C6.22462 4.3233 6.59238 4.17097 6.97585 4.17097ZM17.0979 5.3987L21.0753 9.37613H17.0979V5.3987ZM9.2896 15.1596C8.81048 15.1596 8.42208 15.548 8.42208 16.0271C8.42208 16.5062 8.81048 16.8946 9.2896 16.8946H18.5432C19.0223 16.8946 19.4107 16.5062 19.4107 16.0271C19.4107 15.548 19.0223 15.1596 18.5432 15.1596H9.2896ZM8.42208 20.654C8.42208 20.1749 8.81048 19.7865 9.2896 19.7865H18.5432C19.0223 19.7865 19.4107 20.1749 19.4107 20.654C19.4107 21.1332 19.0223 21.5216 18.5432 21.5216H9.2896C8.81048 21.5216 8.42208 21.1332 8.42208 20.654ZM9.2896 10.5328C8.81048 10.5328 8.42208 10.9212 8.42208 11.4003C8.42208 11.8795 8.81048 12.2679 9.2896 12.2679H11.603C12.0821 12.2679 12.4705 11.8795 12.4705 11.4003C12.4705 10.9212 12.0821 10.5328 11.603 10.5328H9.2896Z"
                  fill=""
                />
              </svg>
            </div>

            <p className="font-medium text-black dark:text-white">
              Content-script.txt
            </p>
          </div>

          <div className="hidden sm:block sm:w-4/12 xl:w-2/12">
            <p className="font-medium text-black dark:text-white">
              File size: 455KB
            </p>
          </div>

          <div className="hidden w-5/12 xl:block">
            <p className="font-medium text-black dark:text-white">
              Uploaded on: 25 Nov, 2025
            </p>
          </div>

          <div className="text-right sm:w-3/12 xl:w-2/12">
            <button className="inline-flex rounded bg-primary px-3 py-1 font-medium text-white hover:bg-opacity-90 sm:px-6 sm:py-2.5">
              Download
            </button>
          </div>
        </div>

        <div className="flex justify-between gap-2.5 px-6 py-3 hover:bg-gray-2 dark:hover:bg-meta-4 sm:items-center sm:justify-start">
          <div className="flex items-center gap-5.5 sm:w-5/12 xl:w-3/12">
            <div className="hidden h-14 w-full max-w-14 items-center justify-center rounded-full border border-stroke bg-gray text-black-2 dark:border-strokedark dark:bg-graydark dark:text-white sm:flex">
              <svg
                className="fill-current"
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_608_18042)">
                  <path
                    d="M12.2493 7.02488C12.6567 7.02488 12.9869 6.69465 12.9869 6.28728C12.9869 5.87992 12.6567 5.54968 12.2493 5.54968C11.842 5.54968 11.5117 5.87992 11.5117 6.28728C11.5117 6.69465 11.842 7.02488 12.2493 7.02488Z"
                    fill=""
                  />
                  <path
                    d="M16.7181 7.02488C17.1254 7.02488 17.4557 6.69465 17.4557 6.28728C17.4557 5.87992 17.1254 5.54968 16.7181 5.54968C16.3107 5.54968 15.9805 5.87992 15.9805 6.28728C15.9805 6.69465 16.3107 7.02488 16.7181 7.02488Z"
                    fill=""
                  />
                  <path
                    d="M24.3973 8.67366C24.0502 8.67366 23.7031 8.76044 23.356 8.8906L23.2692 8.63027C22.7051 6.89474 21.6638 5.41954 20.3188 4.37822L22.4014 2.25219C22.7051 1.94847 22.7051 1.4712 22.4014 1.16749C22.0977 0.863768 21.6204 0.863768 21.3167 1.16749L19.1473 3.38029C19.1039 3.42368 19.1039 3.46706 19.0605 3.46706C17.7589 2.72946 16.2403 2.33897 14.6349 2.33897C13.0729 2.33897 11.5977 2.72946 10.2961 3.42368C10.2527 3.42368 10.2527 3.38029 10.2093 3.38029L8.0399 1.16749C7.73618 0.863768 7.25891 0.863768 6.95519 1.16749C6.65147 1.4712 6.65147 1.94847 6.95519 2.25219L8.99444 4.29144C7.60601 5.37615 6.5647 6.85135 6.00065 8.58688L5.95726 8.71705C5.61015 8.54349 5.21966 8.45672 4.78578 8.45672C3.31057 8.45672 2.0957 9.67159 2.0957 11.1468V16.0931C2.0957 17.5683 3.31057 18.7831 4.78578 18.7831C5.21966 18.7831 5.61015 18.6964 5.95726 18.5228V21.6901C5.95726 22.2108 6.34775 22.6447 6.9118 22.6447H7.69279V25.812C7.69279 27.2872 8.90766 28.5021 10.3829 28.5021C11.8581 28.5021 13.0729 27.2872 13.0729 25.812V22.6447H15.763V25.812C15.763 27.2872 16.9779 28.5021 18.4531 28.5021C19.9283 28.5021 21.1432 27.2872 21.1432 25.812V22.6447H22.2279C22.7485 22.6447 23.1824 22.2542 23.1824 21.6901V18.6964C23.5295 18.8699 23.92 18.9567 24.3539 18.9567C25.8291 18.9567 27.044 17.7418 27.044 16.2666V11.3637C27.0874 9.88853 25.8725 8.67366 24.3973 8.67366ZM14.6349 3.85756C17.5419 3.85756 20.1886 5.50631 21.4469 8.06622H7.86634C9.08122 5.50631 11.6845 3.85756 14.6349 3.85756ZM4.78578 17.3079C4.13495 17.3079 3.61429 16.7873 3.61429 16.1364V11.1902C3.61429 10.5394 4.13495 10.0187 4.78578 10.0187C5.4366 10.0187 5.95726 10.5394 5.95726 11.1902V16.1364C5.95726 16.7439 5.4366 17.3079 4.78578 17.3079ZM11.5977 25.7686C11.5977 26.4195 11.0771 26.9401 10.4263 26.9401C9.77543 26.9401 9.25477 26.4195 9.25477 25.7686V22.6013H11.5977V25.7686ZM19.668 25.7686C19.668 26.4195 19.1473 26.9401 18.4965 26.9401C17.8456 26.9401 17.325 26.4195 17.325 25.7686V22.6013H19.668V25.7686ZM21.7072 21.1261H21.1865H20.3622H19.9717H15.8064H13.1163H8.99444H8.82089H7.69279H7.47585V16.0931V11.1902V9.6282H21.6638V11.4071V16.3534V21.1261H21.7072ZM25.5688 16.31C25.5688 16.9608 25.0481 17.4815 24.3973 17.4815C23.7465 17.4815 23.2258 16.9608 23.2258 16.31V11.3637C23.2258 10.7129 23.7465 10.1922 24.3973 10.1922C25.0481 10.1922 25.5688 10.7129 25.5688 11.3637V16.31Z"
                    fill=""
                  />
                </g>
                <defs>
                  <clipPath id="clip0_608_18042">
                    <rect
                      width="27.7685"
                      height="27.7685"
                      fill="white"
                      transform="translate(0.707031 0.820312)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <p className="font-medium text-black dark:text-white">
              E-commerce.apk
            </p>
          </div>

          <div className="hidden sm:block sm:w-4/12 xl:w-2/12">
            <p className="font-medium text-black dark:text-white">
              File size: 55MB
            </p>
          </div>

          <div className="hidden w-5/12 xl:block">
            <p className="font-medium text-black dark:text-white">
              Uploaded on: 13 Dec, 2025
            </p>
          </div>

          <div className="text-right sm:w-3/12 xl:w-2/12">
            <button className="inline-flex rounded bg-primary px-3 py-1 font-medium text-white hover:bg-opacity-90 sm:px-6 sm:py-2.5">
              Download
            </button>
          </div>
        </div>

        <div className="flex justify-between gap-2.5 px-6 py-3 hover:bg-gray-2 dark:hover:bg-meta-4 sm:items-center sm:justify-start">
          <div className="flex items-center gap-5.5 sm:w-5/12 xl:w-3/12">
            <div className="hidden h-14 w-full max-w-14 items-center justify-center rounded-full border border-stroke bg-gray text-black-2 dark:border-strokedark dark:bg-graydark dark:text-white sm:flex">
              <svg
                className="fill-current"
                width="28"
                height="29"
                viewBox="0 0 28 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.72659 3.36759C5.32314 2.77105 6.13222 2.43591 6.97585 2.43591H16.2295L16.2299 2.43591L16.2303 2.43591C16.4817 2.43591 16.7081 2.54281 16.8665 2.71363L23.7604 9.6075C23.9312 9.76594 24.0381 9.99231 24.0381 10.2437C24.0381 10.2568 24.0378 10.2699 24.0372 10.2828V24.1241C24.0372 24.9677 23.7021 25.7768 23.1055 26.3733C22.509 26.9699 21.6999 27.305 20.8563 27.305H6.97585C6.13222 27.305 5.32313 26.9699 4.72659 26.3733C4.13005 25.7768 3.79492 24.9677 3.79492 24.1241V5.61684C3.79492 4.77321 4.13005 3.96413 4.72659 3.36759ZM6.97585 4.17097H15.3628V10.2437C15.3628 10.7228 15.7512 11.1112 16.2303 11.1112H22.3022V24.1241C22.3022 24.5075 22.1498 24.8753 21.8787 25.1465C21.6075 25.4176 21.2397 25.57 20.8563 25.57H6.97585C6.59238 25.57 6.22462 25.4176 5.95346 25.1465C5.68231 24.8753 5.52997 24.5075 5.52997 24.1241V5.61684C5.52997 5.23337 5.68231 4.86561 5.95346 4.59445C6.22462 4.3233 6.59238 4.17097 6.97585 4.17097ZM17.0979 5.3987L21.0753 9.37613H17.0979V5.3987ZM9.2896 15.1596C8.81048 15.1596 8.42208 15.548 8.42208 16.0271C8.42208 16.5062 8.81048 16.8946 9.2896 16.8946H18.5432C19.0223 16.8946 19.4107 16.5062 19.4107 16.0271C19.4107 15.548 19.0223 15.1596 18.5432 15.1596H9.2896ZM8.42208 20.654C8.42208 20.1749 8.81048 19.7865 9.2896 19.7865H18.5432C19.0223 19.7865 19.4107 20.1749 19.4107 20.654C19.4107 21.1332 19.0223 21.5216 18.5432 21.5216H9.2896C8.81048 21.5216 8.42208 21.1332 8.42208 20.654ZM9.2896 10.5328C8.81048 10.5328 8.42208 10.9212 8.42208 11.4003C8.42208 11.8795 8.81048 12.2679 9.2896 12.2679H11.603C12.0821 12.2679 12.4705 11.8795 12.4705 11.4003C12.4705 10.9212 12.0821 10.5328 11.603 10.5328H9.2896Z"
                  fill=""
                />
              </svg>
            </div>

            <p className="font-medium text-black dark:text-white">
              Random-text.doc
            </p>
          </div>

          <div className="hidden sm:block sm:w-4/12 xl:w-2/12">
            <p className="font-medium text-black dark:text-white">
              File size: 455KB
            </p>
          </div>

          <div className="hidden w-5/12 xl:block">
            <p className="font-medium text-black dark:text-white">
              Uploaded on: 12 Feb, 2025
            </p>
          </div>

          <div className="text-right sm:w-3/12 xl:w-2/12">
            <button className="inline-flex rounded bg-primary px-3 py-1 font-medium text-white hover:bg-opacity-90 sm:px-6 sm:py-2.5">
              Download
            </button>
          </div>
        </div>

        <div className="flex justify-between gap-2.5 px-6 py-3 hover:bg-gray-2 dark:hover:bg-meta-4 sm:items-center sm:justify-start">
          <div className="flex items-center gap-5.5 sm:w-5/12 xl:w-3/12">
            <div className="hidden h-14 w-full max-w-14 items-center justify-center rounded-full border border-stroke bg-gray text-black-2 dark:border-strokedark dark:bg-graydark dark:text-white sm:flex">
              <svg
                className="fill-current"
                width="28"
                height="29"
                viewBox="0 0 28 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.72659 3.36759C5.32314 2.77105 6.13222 2.43591 6.97585 2.43591H16.2295L16.2299 2.43591L16.2303 2.43591C16.4817 2.43591 16.7081 2.54281 16.8665 2.71363L23.7604 9.6075C23.9312 9.76594 24.0381 9.99231 24.0381 10.2437C24.0381 10.2568 24.0378 10.2699 24.0372 10.2828V24.1241C24.0372 24.9677 23.7021 25.7768 23.1055 26.3733C22.509 26.9699 21.6999 27.305 20.8563 27.305H6.97585C6.13222 27.305 5.32313 26.9699 4.72659 26.3733C4.13005 25.7768 3.79492 24.9677 3.79492 24.1241V5.61684C3.79492 4.77321 4.13005 3.96413 4.72659 3.36759ZM6.97585 4.17097H15.3628V10.2437C15.3628 10.7228 15.7512 11.1112 16.2303 11.1112H22.3022V24.1241C22.3022 24.5075 22.1498 24.8753 21.8787 25.1465C21.6075 25.4176 21.2397 25.57 20.8563 25.57H6.97585C6.59238 25.57 6.22462 25.4176 5.95346 25.1465C5.68231 24.8753 5.52997 24.5075 5.52997 24.1241V5.61684C5.52997 5.23337 5.68231 4.86561 5.95346 4.59445C6.22462 4.3233 6.59238 4.17097 6.97585 4.17097ZM17.0979 5.3987L21.0753 9.37613H17.0979V5.3987ZM9.2896 15.1596C8.81048 15.1596 8.42208 15.548 8.42208 16.0271C8.42208 16.5062 8.81048 16.8946 9.2896 16.8946H18.5432C19.0223 16.8946 19.4107 16.5062 19.4107 16.0271C19.4107 15.548 19.0223 15.1596 18.5432 15.1596H9.2896ZM8.42208 20.654C8.42208 20.1749 8.81048 19.7865 9.2896 19.7865H18.5432C19.0223 19.7865 19.4107 20.1749 19.4107 20.654C19.4107 21.1332 19.0223 21.5216 18.5432 21.5216H9.2896C8.81048 21.5216 8.42208 21.1332 8.42208 20.654ZM9.2896 10.5328C8.81048 10.5328 8.42208 10.9212 8.42208 11.4003C8.42208 11.8795 8.81048 12.2679 9.2896 12.2679H11.603C12.0821 12.2679 12.4705 11.8795 12.4705 11.4003C12.4705 10.9212 12.0821 10.5328 11.603 10.5328H9.2896Z"
                  fill=""
                />
              </svg>
            </div>

            <p className="font-medium text-black dark:text-white">
              Random-text.doc
            </p>
          </div>

          <div className="hidden sm:block sm:w-4/12 xl:w-2/12">
            <p className="font-medium text-black dark:text-white">
              File size: 455KB
            </p>
          </div>

          <div className="hidden w-5/12 xl:block">
            <p className="font-medium text-black dark:text-white">
              Uploaded on: 05 Jan, 2025
            </p>
          </div>

          <div className="text-right sm:w-3/12 xl:w-2/12">
            <button className="inline-flex rounded bg-primary px-3 py-1 font-medium text-white hover:bg-opacity-90 sm:px-6 sm:py-2.5">
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadList;
