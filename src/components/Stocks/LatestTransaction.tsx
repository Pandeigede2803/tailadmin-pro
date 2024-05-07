import React from "react";
import Image from "next/image";

interface Stocks {
  image: string;
  name: string;
  interestRate: number;
  returnRate: number;
  price: number;
  date: string;
}

const stocksItems: Stocks[] = [
  {
    image: "/images/brand/brand-15.svg",
    name: "Apple Inc.",
    interestRate: 3.8,
    returnRate: +3.69,
    price: 9346.0,
    date: "20 Sep, 27",
  },
  {
    image: "/images/brand/brand-17.svg",
    name: "Amazon",
    interestRate: 2.7,
    returnRate: +3.69,
    price: 6879.0,
    date: "20 Sep, 27",
  },
  {
    image: "/images/brand/brand-14.svg",
    name: "Netflix",
    interestRate: 2.5,
    returnRate: -3.69,
    price: 1439.0,
    date: "20 Sep, 27",
  },
  {
    image: "/images/brand/brand-18.svg",
    name: "IBM",
    interestRate: 1.8,
    returnRate: -3.69,
    price: 2329.0,
    date: "20 Sep, 27",
  },
  {
    image: "/images/brand/brand-16.svg",
    name: "Meta",
    interestRate: 3.7,
    returnRate: +3.69,
    price: 1026.0,
    date: "20 Sep, 27",
  },
  {
    image: "/images/brand/brand-19.svg",
    name: "Microsoft",
    interestRate: 3.7,
    returnRate: +3.69,
    price: 3226.0,
    date: "20 Sep, 27",
  },
  {
    image: "/images/brand/brand-20.svg",
    name: "Tesla",
    interestRate: 3.7,
    returnRate: -1.24,
    price: 6426.0,
    date: "20 Sep, 27",
  },
];

const LatestTransaction: React.FC = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:p-7.5 xl:col-span-7">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-2">
        <div>
          <h4 className="text-title-sm2 font-bold text-black dark:text-white">
            Latest Transaction
          </h4>
        </div>
        <div className="relative z-20 inline-block rounded">
          <select className="relative z-20 inline-flex appearance-none rounded border border-stroke bg-transparent py-[5px] pl-3 pr-8 text-sm font-medium outline-none dark:border-strokedark">
            <option value="" className="dark:bg-boxdark">
              Last 7 days
            </option>
            <option value="" className="dark:bg-boxdark">
              Last 15 days
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

      <div className="flex flex-col gap-[25px]">
        {stocksItems.map((item, key) => (
          <div
            key={key}
            className="grid grid-cols-2 items-center gap-5 xsm:grid-cols-3 sm:grid-cols-8"
          >
            <div className="flex items-center gap-4.5 sm:col-span-3 2xl:col-span-2">
              <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-[#EEF2F8]">
                <Image
                  src={item.image}
                  alt="brand"
                  width={46}
                  height={46}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                />
              </div>

              <div className="hidden sm:block">
                <h5 className="font-bold text-black dark:text-white">
                  {item.name}
                </h5>
                <p className="text-xs font-medium">Buy Stock</p>
              </div>
            </div>

            <div className="hidden sm:col-span-2 sm:block">
              <h5 className="font-bold text-black dark:text-white">
                Interest rate
              </h5>
              <p className="text-xs font-medium">{item.interestRate}%</p>
            </div>

            <div className="hidden xsm:block sm:col-span-1 2xl:col-span-2">
              <p
                className={`mb-0.5 flex items-center gap-[5px] text-sm font-bold leading-6 ${
                  item.returnRate >= 0 ? "text-meta-3" : "text-red"
                }`}
              >
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
                {item.returnRate}%
              </p>
              <p className="text-xs">Ratio</p>
            </div>

            <div className="text-right sm:col-span-2">
              <h5 className="font-bold text-black dark:text-white">
                {item.returnRate >= 0 ? "+" : "-"} ${item.price}
              </h5>
              <p className="text-xs font-medium">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestTransaction;
