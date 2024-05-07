"use client";
import React, { useEffect, useRef, useState } from "react";

const DropdownFour: React.FC<{ classes: string }> = ({ classes }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div>
      <button
        className="float-right inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm text-black shadow-11 hover:text-primary dark:bg-meta-4 dark:text-white dark:shadow-none"
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        Action
        <svg
          className="fill-current"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.00039 11.4C7.85039 11.4 7.72539 11.35 7.60039 11.25L1.85039 5.60005C1.62539 5.37505 1.62539 5.02505 1.85039 4.80005C2.07539 4.57505 2.42539 4.57505 2.65039 4.80005L8.00039 10.025L13.3504 4.75005C13.5754 4.52505 13.9254 4.52505 14.1504 4.75005C14.3754 4.97505 14.3754 5.32505 14.1504 5.55005L8.40039 11.2C8.27539 11.325 8.15039 11.4 8.00039 11.4Z"
            fill=""
          />
        </svg>
      </button>
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 z-1 w-full max-w-39.5 rounded-[5px] bg-white py-2.5 shadow-12 dark:bg-boxdark ${classes} ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <button className="flex w-full px-4 py-2 text-sm hover:bg-whiter hover:text-primary dark:hover:bg-meta-4">
          Edit
        </button>
        <button className="flex w-full px-4 py-2 text-sm hover:bg-whiter hover:text-primary dark:hover:bg-meta-4">
          Delete
        </button>
        <button className="flex w-full px-4 py-2 text-sm hover:bg-whiter hover:text-primary dark:hover:bg-meta-4">
          Details
        </button>
      </div>
    </div>
  );
};

export default DropdownFour;
