"use client";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DropdownDefault from "@/components/Dropdowns/DropdownDefault";

const Messages: React.FC = () => {
  const chatList = [
    {
      imgSrc: "/images/user/user-03.png",
      name: "Henry Dholi",
      message: "I cam across your profile and...",
    },
    {
      imgSrc: "/images/user/user-04.png",
      name: "Mariya Desoja",
      message: "I like your confidence 💪",
    },
    {
      imgSrc: "/images/user/user-05.png",
      name: "Robert Jhon",
      message: "Can you share your offer?",
    },
    {
      imgSrc: "/images/user/user-01.png",
      name: "Cody Fisher",
      message: `I'm waiting for you response!`,
    },
    {
      imgSrc: "/images/user/user-02.png",
      name: "Jenny Wilson",
      message: "I cam across your profile and...",
    },
  ];

  return (
    <>
      <Breadcrumb pageName="Messages" />

      <div className="h-[calc(100vh-186px)] overflow-hidden sm:h-[calc(100vh-174px)]">
        <div className="h-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:flex">
          <div className="hidden h-full flex-col xl:flex xl:w-1/4">
            {/* <!-- ====== Chat List Start --> */}
            <div className="sticky border-b border-stroke px-6 py-7.5 dark:border-strokedark">
              <h3 className="text-lg font-medium text-black dark:text-white 2xl:text-xl">
                Active Conversations
                <span className="rounded-md border-[.5px] border-stroke bg-gray-2 px-2 py-0.5 text-base font-medium text-black dark:border-strokedark dark:bg-boxdark-2 dark:text-white 2xl:ml-4">
                  7
                </span>
              </h3>
            </div>
            <div className="flex max-h-full flex-col overflow-auto p-5">
              <form className="sticky mb-7">
                <input
                  type="text"
                  className="w-full rounded border border-stroke bg-gray-2 py-2.5 pl-5 pr-10 text-sm outline-none focus:border-primary dark:border-strokedark dark:bg-boxdark-2"
                  placeholder="Search..."
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2">
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
                      d="M8.25 3C5.3505 3 3 5.3505 3 8.25C3 11.1495 5.3505 13.5 8.25 13.5C11.1495 13.5 13.5 11.1495 13.5 8.25C13.5 5.3505 11.1495 3 8.25 3ZM1.5 8.25C1.5 4.52208 4.52208 1.5 8.25 1.5C11.9779 1.5 15 4.52208 15 8.25C15 11.9779 11.9779 15 8.25 15C4.52208 15 1.5 11.9779 1.5 8.25Z"
                      fill="#637381"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.957 11.958C12.2499 11.6651 12.7247 11.6651 13.0176 11.958L16.2801 15.2205C16.573 15.5133 16.573 15.9882 16.2801 16.2811C15.9872 16.574 15.5124 16.574 15.2195 16.2811L11.957 13.0186C11.6641 12.7257 11.6641 12.2508 11.957 11.958Z"
                      fill="#637381"
                    />
                  </svg>
                </button>
              </form>
              <div className="no-scrollbar max-h-full space-y-2.5 overflow-auto">
                {/* <!-- Chat List Item --> */}
                {chatList.map((object, item) => {
                  return (
                    <div
                      key={item}
                      className="flex cursor-pointer items-center rounded px-4 py-2 hover:bg-gray-2 dark:hover:bg-strokedark"
                    >
                      <div className="relative mr-3.5 h-11 w-full max-w-11 rounded-full">
                        <Image
                          src={object.imgSrc}
                          alt="profile"
                          className="h-full w-full object-cover object-center"
                          width={44}
                          height={44}
                        />
                        <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-gray-2 bg-success"></span>
                      </div>
                      <div className="w-full">
                        <h5 className="text-sm font-medium text-black dark:text-white">
                          {object.name}
                        </h5>
                        <p className="text-sm">{object.message}</p>
                      </div>
                    </div>
                  );
                })}
                {/* <!-- Chat List Item --> */}
              </div>
            </div>
            {/* <!-- ====== Chat List End --> */}
          </div>
          <div className="flex h-full flex-col border-l border-stroke dark:border-strokedark xl:w-3/4">
            {/* <!-- ====== Chat Box Start --> */}
            <div className="sticky flex items-center justify-between border-b border-stroke px-6 py-4.5 dark:border-strokedark">
              <div className="flex items-center">
                <div className="mr-4.5 h-13 w-full max-w-13 overflow-hidden rounded-full">
                  <Image
                    src={"/images/user/user-01.png"}
                    alt="avatar"
                    className="h-full w-full object-cover object-center"
                    width={52}
                    height={52}
                  />
                </div>
                <div>
                  <h5 className="font-medium text-black dark:text-white">
                    Henry Dholi
                  </h5>
                  <p className="text-sm">Reply to message</p>
                </div>
              </div>
              <div>
                <DropdownDefault />
              </div>
            </div>
            <div className="no-scrollbar max-h-full space-y-3.5 overflow-auto px-6 py-7.5">
              <div className="max-w-125">
                <p className="mb-2.5 text-sm font-medium">Andri Thomas</p>
                <div className="mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 dark:bg-boxdark-2">
                  <p>
                    I want to make an appointment tomorrow from 2:00 to 5:00pm?
                  </p>
                </div>
                <p className="text-xs">1:55pm</p>
              </div>
              <div className="ml-auto max-w-125">
                <div className="mb-2.5 rounded-2xl rounded-br-none bg-primary px-5 py-3">
                  <p className="text-white">
                    Hello, Thomas! I will check the schedule and inform you
                  </p>
                </div>
                <p className="text-right text-xs">1:55pm</p>
              </div>
              <div className="max-w-125">
                <p className="mb-2.5 text-sm font-medium">Andri Thomas</p>
                <div className="mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 dark:bg-boxdark-2">
                  <p>Ok, Thanks for your reply.</p>
                </div>
                <p className="text-xs">1:55pm</p>
              </div>
              <div className="ml-auto max-w-125">
                <div className="mb-2.5 rounded-2xl rounded-br-none bg-primary px-5 py-3">
                  <p className="text-white">You are welcome!</p>
                </div>
                <p className="text-right text-xs">1:55pm</p>
              </div>
              <div className="max-w-125">
                <p className="mb-2.5 text-sm font-medium">Andri Thomas</p>
                <div className="mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 dark:bg-boxdark-2">
                  <p>
                    I want to make an appointment tomorrow from 2:00 to 5:00pm?
                  </p>
                </div>
                <p className="text-xs">1:55pm</p>
              </div>
              <div className="ml-auto max-w-125">
                <div className="mb-2.5 rounded-2xl rounded-br-none bg-primary px-5 py-3">
                  <p className="text-white">
                    Hello, Thomas! I will check the schedule and inform you
                  </p>
                </div>
                <p className="text-right text-xs">1:55pm</p>
              </div>
              <div className="max-w-125">
                <p className="mb-2.5 text-sm font-medium">Andri Thomas</p>
                <div className="mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 dark:bg-boxdark-2">
                  <p>Ok, Thanks for your reply.</p>
                </div>
                <p className="text-xs">1:55pm</p>
              </div>
              <div className="ml-auto max-w-125">
                <div className="mb-2.5 rounded-2xl rounded-br-none bg-primary px-5 py-3">
                  <p className="text-white">You are welcome!</p>
                </div>
                <p className="text-right text-xs">1:55pm</p>
              </div>
            </div>
            <div className="sticky bottom-0 border-t border-stroke bg-white px-6 py-5 dark:border-strokedark dark:bg-boxdark">
              <form className="flex items-center justify-between space-x-4.5">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Type something here"
                    className="h-13 w-full rounded-md border border-stroke bg-gray pl-5 pr-19 text-black placeholder-body outline-none focus:border-primary dark:border-strokedark dark:bg-boxdark-2 dark:text-white"
                  />
                  <div className="absolute right-5 top-1/2 inline-flex -translate-y-1/2 items-center justify-end space-x-4">
                    <button className="hover:text-primary">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        className="fill-current"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.835 1.79102C11.2378 1.79102 10.6651 2.02824 10.2428 2.45051L3.3503 9.34302C2.64657 10.0467 2.25122 11.0012 2.25122 11.9964C2.25122 12.9917 2.64657 13.9461 3.3503 14.6499C4.05403 15.3536 5.0085 15.7489 6.00372 15.7489C6.99895 15.7489 7.95341 15.3536 8.65714 14.6499L15.5496 7.75736C15.8425 7.46446 16.3174 7.46446 16.6103 7.75736C16.9032 8.05025 16.9032 8.52512 16.6103 8.81802L9.7178 15.7105C8.73277 16.6956 7.39677 17.2489 6.00372 17.2489C4.61067 17.2489 3.27468 16.6956 2.28964 15.7105C1.30461 14.7255 0.751221 13.3895 0.751221 11.9964C0.751221 10.6034 1.30461 9.26739 2.28964 8.28236L9.18214 1.38985C9.88572 0.686279 10.84 0.291016 11.835 0.291016C12.83 0.291016 13.7842 0.686279 14.4878 1.38985C15.1914 2.09343 15.5866 3.04768 15.5866 4.04268C15.5866 5.03769 15.1914 5.99194 14.4878 6.69552L7.5878 13.588C7.16569 14.0101 6.59318 14.2473 5.99622 14.2473C5.39926 14.2473 4.82676 14.0101 4.40464 13.588C3.98253 13.1659 3.74539 12.5934 3.74539 11.9964C3.74539 11.3995 3.98253 10.827 4.40464 10.4049L10.7725 4.04454C11.0655 3.75182 11.5404 3.7521 11.8331 4.04517C12.1258 4.33823 12.1256 4.81311 11.8325 5.10583L5.4653 11.4655C5.32469 11.6063 5.24539 11.7974 5.24539 11.9964C5.24539 12.1956 5.32449 12.3865 5.4653 12.5274C5.60611 12.6682 5.79709 12.7473 5.99622 12.7473C6.19535 12.7473 6.38633 12.6682 6.52714 12.5274L13.4271 5.63486C13.8492 5.21261 14.0866 4.63973 14.0866 4.04268C14.0866 3.4455 13.8494 2.87278 13.4271 2.45051C13.0049 2.02824 12.4321 1.79102 11.835 1.79102Z"
                        />
                      </svg>
                    </button>
                    <button className="hover:text-primary">
                      <svg
                        width="19"
                        height="18"
                        viewBox="0 0 19 18"
                        className="fill-current"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.5 2.25C5.77208 2.25 2.75 5.27208 2.75 9C2.75 12.7279 5.77208 15.75 9.5 15.75C13.2279 15.75 16.25 12.7279 16.25 9C16.25 5.27208 13.2279 2.25 9.5 2.25ZM1.25 9C1.25 4.44365 4.94365 0.75 9.5 0.75C14.0564 0.75 17.75 4.44365 17.75 9C17.75 13.5564 14.0564 17.25 9.5 17.25C4.94365 17.25 1.25 13.5564 1.25 9Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.09769 10.0469C6.84856 9.71825 6.38037 9.6523 6.05004 9.90004C5.71867 10.1486 5.65152 10.6187 5.90004 10.95L6.50004 10.5C5.90004 10.95 5.90022 10.9503 5.90041 10.9505L5.9008 10.9511L5.90167 10.9522L5.90372 10.9549L5.90913 10.962L5.9251 10.9824C5.93803 10.9988 5.95555 11.0204 5.97757 11.0467C6.02155 11.0991 6.08379 11.17 6.16363 11.2533C6.32269 11.4193 6.55512 11.6379 6.85579 11.8566C7.45424 12.2918 8.3559 12.75 9.50004 12.75C10.6442 12.75 11.5458 12.2918 12.1443 11.8566C12.445 11.6379 12.6774 11.4193 12.8365 11.2533C12.9163 11.17 12.9785 11.0991 13.0225 11.0467C13.0445 11.0204 13.0621 10.9988 13.075 10.9824L13.091 10.962L13.0964 10.9549L13.0984 10.9522L13.0993 10.9511L13.0997 10.9505C13.0999 10.9503 13.1 10.95 12.5 10.5L13.1 10.95C13.3486 10.6187 13.2814 10.1486 12.95 9.90004C12.6197 9.6523 12.1515 9.71825 11.9024 10.0469L11.8989 10.0514C11.8945 10.057 11.886 10.0676 11.8736 10.0823C11.8487 10.112 11.8084 10.1582 11.7535 10.2155C11.643 10.3308 11.477 10.4872 11.262 10.6435C10.8292 10.9583 10.2309 11.25 9.50004 11.25C8.76919 11.25 8.17084 10.9583 7.73805 10.6435C7.52309 10.4872 7.35709 10.3308 7.24661 10.2155C7.19168 10.1582 7.15139 10.112 7.12653 10.0823C7.11412 10.0676 7.10563 10.057 7.10117 10.0514L7.09769 10.0469Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.5 6.75C6.5 6.33579 6.83579 6 7.25 6H7.2575C7.67171 6 8.0075 6.33579 8.0075 6.75C8.0075 7.16421 7.67171 7.5 7.2575 7.5H7.25C6.83579 7.5 6.5 7.16421 6.5 6.75Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11 6.75C11 6.33579 11.3358 6 11.75 6H11.7575C12.1717 6 12.5075 6.33579 12.5075 6.75C12.5075 7.16421 12.1717 7.5 11.7575 7.5H11.75C11.3358 7.5 11 7.16421 11 6.75Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <button className="flex h-13 w-full max-w-13 items-center justify-center rounded-md bg-primary text-white hover:bg-opacity-90">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 2L11 13"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 2L15 22L11 13L2 9L22 2Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </form>
            </div>
            {/* <!-- ====== Chat Box End --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
