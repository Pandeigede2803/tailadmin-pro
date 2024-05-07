import React from "react";
import Image from "next/image";
import DropdownDefault from "@/components/Dropdowns/DropdownDefault";

interface Stocks {
  image: string;
  name: string;
  gross: string;
  price: string;
  returnRate: number;
}

const stocksItems: Stocks[] = [
  {
    image: "/images/brand/brand-14.svg",
    name: "Netflix",
    gross: "12,453.00",
    price: "1,984.00",
    returnRate: 0.14,
  },
  {
    image: "/images/brand/brand-15.svg",
    name: "Apple Inc.",
    gross: "132,453.00",
    price: "2,634.00",
    returnRate: 1.03,
  },
  {
    image: "/images/brand/brand-16.svg",
    name: "Meta",
    gross: "31,428.00",
    price: "2,432.00",
    returnRate: 0.08,
  },
];

const TrendingStocks: React.FC = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-10 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7 xl:col-span-5">
      <div className="mb-7.5 flex items-center justify-between">
        <div>
          <h3 className="text-title-sm2 font-bold text-black dark:text-white">
            Trending Stocks
          </h3>
        </div>
        <div>
          <DropdownDefault />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        {stocksItems.map((item, key) => (
          <div
            key={key}
            className="rounded-[5px] border border-stroke p-5 dark:border-strokedark"
          >
            <div className="mb-5.5 flex items-center justify-between">
              <div className="flex items-center gap-4.5">
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

                <div>
                  <h5 className="font-bold text-black dark:text-white">
                    {item.name}
                  </h5>
                  <p className="text-xs font-medium">${item.gross}</p>
                </div>
              </div>

              <div className="text-right">
                <p
                  className={`mb-0.5 flex items-center justify-end gap-1 text-xs font-medium ${
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
                <p
                  className={`text-xs font-medium ${
                    item.returnRate >= 0 ? "text-meta-3" : "text-red"
                  }`}
                >
                  {item.returnRate >= 0 ? "+" : "-"} ${item.price}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="flex w-full items-center justify-center rounded-[5px] bg-[#F3F5F8] px-7.5 py-2 text-sm font-medium text-black hover:bg-primary/[0.15] hover:text-primary dark:bg-meta-4 dark:text-white dark:hover:bg-primary/[0.15] dark:hover:text-primary">
                Short
              </button>
              <button className="flex w-full items-center justify-center rounded-[5px] bg-[#F3F5F8] px-7.5 py-2 text-sm font-medium text-black hover:bg-primary/[0.15] hover:text-primary dark:bg-meta-4 dark:text-white dark:hover:bg-primary/[0.15] dark:hover:text-primary">
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingStocks;
