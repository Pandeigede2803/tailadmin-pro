"use client";
import React, { useState } from "react";

interface Language {
  id: string;
  name: string;
}

const languages: Language[] = [
  { id: "C", name: "C" },
  { id: "C++", name: "C++" },
  { id: "Java", name: "Java" },
  { id: "Python", name: "Python" },
  { id: "JavaScript", name: "JavaScript" },
  { id: "React", name: "React" },
  { id: "Angular", name: "Angular" },
];

const CheckboxInputGroup: React.FC<{
  id: string;
  isChecked: boolean;
  onChange: () => void;
}> = ({ id, isChecked, onChange }) => (
  <div>
    <label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
      <input
        className="sr-only"
        type="checkbox"
        name="roleSelect"
        id={id}
        checked={isChecked}
        onChange={onChange}
      />
      <span
        className={`flex h-5 w-5 items-center justify-center rounded-full border ${
          isChecked ? "border-primary" : "border-body"
        }`}
      >
        <span
          className={`h-2.5 w-2.5 rounded-full bg-primary ${
            isChecked ? "flex" : "hidden"
          }`}
        ></span>
      </span>
      {id}
    </label>
  </div>
);

const SelectOptionThree: React.FC = () => {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const handleLanguageChange = (id: string) => {
    setSelectedLanguages((prevSelectedLanguages) => {
      if (prevSelectedLanguages.includes(id)) {
        // Deselect the language if it's already selected
        return prevSelectedLanguages.filter((lang) => lang !== id);
      } else {
        // Select the language if it's not selected
        return [...prevSelectedLanguages, id];
      }
    });
  };

  return (
    <div className="mb-6">
      <label className="mb-4.5 block text-sm font-medium text-black dark:text-white">
        Which languages & frameworks you know?
      </label>

      <div className="flex flex-col gap-2.5">
        {languages.map((language) => (
          <CheckboxInputGroup
            key={language.id}
            id={language.id}
            isChecked={selectedLanguages.includes(language.id)}
            onChange={() => handleLanguageChange(language.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectOptionThree;
