import React from "react";
import DropdownDefault from "./Dropdowns/DropdownDefault";
import Image from "next/image";

type FeedbackData = {
  avatar: string;
  name: string;
  name2: string;
  feedback: string;
  time: number;
};

const feedbackData: FeedbackData[] = [
  {
    avatar: "/images/user/user-14.png",
    name: "Timothy Smith",
    name2: "Killan James",
    feedback: `It's an Affiliate commissions SaaS application that allows you
    to track your affiliate revenue.`,
    time: 1,
  },
  {
    avatar: "/images/user/user-15.png",
    name: "Nancy Martino",
    name2: "Matney",
    feedback: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
    time: 2,
  },
  {
    avatar: "/images/user/user-16.png",
    name: "Michael Morris",
    name2: "Williams Son",
    feedback: `It's an Affiliate commissions SaaS application that allows you
    to track your affiliate revenue.`,
    time: 3,
  },
];

const Feedback: React.FC = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-6">
      <div className="flex items-start justify-between border-b border-stroke px-6 py-5 dark:border-strokedark">
        <div>
          <h2 className="text-title-md2 font-bold text-black dark:text-white">
            Feedback
          </h2>
        </div>
        <DropdownDefault />
      </div>

      <div className="p-6">
        <div className="flex flex-col gap-7">
          {feedbackData.map((feedback, key) => (
            <div className="relative z-1 flex gap-5.5" key={key}>
              <div className="h-16 w-full max-w-16 rounded-full border-[3px] border-stroke dark:border-strokedark">
                <Image
                  width={64}
                  height={64}
                  src={feedback.avatar}
                  alt="User"
                />
              </div>

              <div>
                <p className="text-black dark:text-white">
                  <span className="font-medium">{feedback.name}</span>
                  <span className="px-1">Commented on Cloud</span>

                  <span className="font-medium">{feedback.name2}</span>
                </p>
                <span className="mt-1 block text-sm">
                  {" "}
                  {feedback.time} hour ago
                </span>
                <p className="mt-2.5 text-black dark:text-white">
                  {feedback.feedback}
                </p>
              </div>

              {key === 0 && (
                <span className="absolute left-8 -z-1 block h-[300%] w-[1px] border-l border-dashed border-stroke dark:border-strokedark"></span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
