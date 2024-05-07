import React, { useRef } from "react";
import { FaqItem } from "@/types/faqItem";

const AccordionItemOne: React.FC<FaqItem> = ({ active, handleToggle, faq }) => {
  const contentEl = useRef<HTMLDivElement>(null);

  const { header, id, text } = faq;

  return (
    <div className="rounded-md border border-stroke p-4 shadow-9 dark:border-strokedark dark:shadow-none sm:p-6">
      <button
        className={`flex w-full items-center gap-1.5 sm:gap-3 xl:gap-6 ${
          active === id ? "active" : ""
        }`}
        onClick={() => handleToggle(Number(id))}
      >
        <div className="flex h-10.5 w-full max-w-10.5 items-center justify-center rounded-md bg-[#F3F5FC] dark:bg-meta-4">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out dark:fill-white dark:stroke-white ${
              active === id ? "rotate-180" : ""
            }`}
            width="18"
            height="10"
            viewBox="0 0 18 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.28882 8.43257L8.28874 8.43265L8.29692 8.43985C8.62771 8.73124 9.02659 8.86001 9.41667 8.86001C9.83287 8.86001 10.2257 8.69083 10.5364 8.41713L10.5365 8.41721L10.5438 8.41052L16.765 2.70784L16.771 2.70231L16.7769 2.69659C17.1001 2.38028 17.2005 1.80579 16.8001 1.41393C16.4822 1.1028 15.9186 1.00854 15.5268 1.38489L9.41667 7.00806L3.3019 1.38063L3.29346 1.37286L3.28467 1.36548C2.93287 1.07036 2.38665 1.06804 2.03324 1.41393L2.0195 1.42738L2.00683 1.44184C1.69882 1.79355 1.69773 2.34549 2.05646 2.69659L2.06195 2.70196L2.0676 2.70717L8.28882 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div>
          <h4 className="text-left text-title-xsm font-medium text-black dark:text-white">
            {header}
          </h4>
        </div>
      </button>

      <div
        ref={contentEl}
        className={`ml-16.5 mt-5 duration-200 ease-in-out ${
          active === id ? "block" : "hidden"
        }`}
      >
        <p className="font-medium">{text}</p>
      </div>
    </div>
  );
};

export default AccordionItemOne;
