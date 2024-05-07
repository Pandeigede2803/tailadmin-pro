import React from "react";
import Image from "next/image";

interface Stocks {
  image: string;
  name: string;
  share: number;
  price: number;
  returnRate: number;
}

const stocksItems: Stocks[] = [
  {
    image: "/images/brand/brand-07.svg",
    name: "Apple Inc",
    share: 16,
    price: 410.5,
    returnRate: +0.95,
  },
  {
    image: "/images/brand/brand-01.svg",
    name: "Google",
    share: 100,
    price: 410.5,
    returnRate: +0.95,
  },
  {
    image: "/images/brand/brand-10.svg",
    name: "Tesla",
    share: 20,
    price: 410.5,
    returnRate: +0.95,
  },
  {
    image: "/images/brand/brand-13.svg",
    name: "Twitter X",
    share: 87,
    price: 410.5,
    returnRate: -0.95,
  },
  {
    image: "/images/brand/brand-11.svg",
    name: "Microsoft",
    share: 37,
    price: 410.5,
    returnRate: +0.95,
  },
];

const MyStocks: React.FC = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5.5 py-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-5">
      <div className="mb-7.5 flex flex-wrap items-center justify-between gap-2 px-2">
        <div>
          <h4 className="text-title-sm2 font-bold text-black dark:text-white">
            My Stocks
          </h4>
        </div>
        <div className="relative z-20 inline-block rounded">
          <select className="relative z-20 inline-flex appearance-none rounded border border-stroke bg-transparent py-[5px] pl-3 pr-8 text-sm font-medium outline-none dark:border-strokedark">
            <option value="" className="dark:bg-boxdark">
              Short by
            </option>
            <option value="" className="dark:bg-boxdark">
              Monthly
            </option>
            <option value="" className="dark:bg-boxdark">
              Yearly
            </option>
          </select>
          <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.61025 11.8872C8.46025 11.8872 8.33525 11.8372 8.21025 11.7372L2.46025 6.08723C2.23525 5.86223 2.23525 5.51223 2.46025 5.28723C2.68525 5.06223 3.03525 5.06223 3.26025 5.28723L8.61025 10.5122L13.9603 5.23723C14.1853 5.01223 14.5353 5.01223 14.7603 5.23723C14.9853 5.46223 14.9853 5.81223 14.7603 6.03723L9.01025 11.6872C8.88525 11.8122 8.76025 11.8872 8.61025 11.8872Z"
                fill="#64748B"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        {stocksItems.map((item, key) => (
          <div
            key={key}
            className="flex items-center justify-between rounded-[5px] px-4 py-3.5 hover:bg-[#F8FAFD] dark:hover:bg-meta-4"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full">
                <Image
                  src={item.image}
                  alt="brand"
                  width={40}
                  height={40}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                />
              </div>

              <div>
                <h5 className="text-sm font-bold leading-6 text-black dark:text-white">
                  {item.name}
                </h5>
                <p className="text-xs font-medium">{item.share} Shares</p>
              </div>
            </div>

            <div className="text-right">
              <p className="mb-1 font-medium text-black dark:text-white">
                ${item.price}
              </p>
              <p
                className={`flex items-center justify-end gap-1 text-xs font-medium ${
                  item.returnRate >= 0 ? "text-meta-3" : "text-red"
                }`}
              >
                {item.returnRate}%
                {item.returnRate >= 0 ? (
                  <svg
                    className="fill-current"
                    width="9"
                    height="7"
                    viewBox="0 0 9 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.48804 0.0989982L8.49108 6.099L0.484996 6.099L4.48804 0.0989982Z"
                      fill=""
                    />
                  </svg>
                ) : (
                  <svg
                    className="fill-current"
                    width="9"
                    height="7"
                    viewBox="0 0 9 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.48804 6.099L0.484999 0.0989983L8.49108 0.098999L4.48804 6.099Z"
                      fill=""
                    />
                  </svg>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyStocks;
