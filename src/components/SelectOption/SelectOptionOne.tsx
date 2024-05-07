"use client";
import React, { useState } from "react";

interface Option {
  id: string;
  label: string;
}

const options: Option[] = [
  { id: "Graphics", label: "Graphics Design" },
  { id: "Web", label: "Web Development" },
  { id: "Logo", label: "Logo Design" },
  { id: "Others", label: "Others" },
];

const SelectOptionOne: React.FC = () => {
  const [isChecked, setIsChecked] = useState<string>("");

  const handleRadioChange = (value: string) => {
    setIsChecked(value);
  };
  return (
    <div className="mb-5.5">
      <label
        htmlFor="roleSelect"
        className="mb-4.5 block text-sm font-medium text-black dark:text-white"
      >
        Select option
      </label>

      <div className="flex flex-wrap items-center gap-5.5">
        {options.map((option) => (
          <div key={option.id}>
            <label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
              <input
                className="sr-only"
                type="radio"
                name="roleSelect"
                id={option.id}
                onChange={() => handleRadioChange(option.id)}
              />
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                  isChecked === option.id ? "border-primary" : "border-body"
                }`}
              >
                <span
                  className={`h-2.5 w-2.5 rounded-full bg-primary ${
                    isChecked === option.id ? "flex" : "hidden"
                  }`}
                ></span>
              </span>
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectOptionOne;
