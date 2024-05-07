import Image from "next/image";
import DropdownDefault from "../Dropdowns/DropdownDefault";
import React from "react";

const todoData = [
  {
    logo: "/images/todo/uideck.svg",
    title: "Next.js Uideck Yearly Meetings",
    time: "10:20 AM - 3:00 PM",
    date: "14 February,2025",
    status: "Completed",
  },
  {
    logo: "/images/todo/dribble.svg",
    title: "Next.js 2025 Dribbble Meet Up",
    time: "09:30 AM - 12:00 AM",
    date: "14 February,2025",
    status: "Upcoming",
  },
  {
    logo: "/images/todo/linkdin.svg",
    title: "Next.js 2025 Linkedin Meet Up",
    time: "10:30 AM - 11:00 PM",
    date: "14 February,2025",
    status: "Canceled",
  },
];

const ToDoList: React.FC = () => {
  return (
    <div className="col-span-12 xl:col-span-7">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-4 py-4 dark:border-strokedark md:px-6 md:py-6 xl:px-7.5">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-title-sm2 font-bold text-black dark:text-white">
                To Do List
              </h2>
            </div>
            <DropdownDefault />
          </div>
        </div>

        <div className="px-4 py-4 md:px-6 md:py-6 xl:px-7.5">
          <div className="flex flex-col gap-6">
            {/* <!-- To Do Item --> */}
            {todoData.map((todo, key) => (
              <div className="flex items-center justify-between" key={key}>
                <div className="flex flex-grow items-center gap-4.5">
                  <div className="hidden h-15 w-full max-w-15 items-center justify-center rounded-full border border-stroke bg-gray dark:border-strokedark dark:bg-meta-4 xsm:flex">
                    <Image
                      src={todo.logo}
                      width={32}
                      height={32}
                      style={{
                        width: "auto",
                        height: "auto",
                      }}
                      alt={todo.title}
                    />
                  </div>

                  <div>
                    <h4 className="mb-2 font-medium text-black dark:text-white">
                      {todo.title}
                    </h4>

                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
                      <span className="flex items-center gap-1.5">
                        <svg
                          className="fill-current"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.57495 2.99999V1.57499H9.92495C10.225 1.57499 10.5 1.32499 10.5 0.999988C10.5 0.674988 10.25 0.424988 9.92495 0.424988H6.09995C5.79995 0.424988 5.52495 0.674988 5.52495 0.999988C5.52495 1.32499 5.77495 1.57499 6.09995 1.57499H7.44995V2.99999C4.22495 3.29999 1.69995 5.99999 1.69995 9.27499C1.69995 12.75 4.52495 15.575 7.99995 15.575C11.475 15.575 14.3 12.75 14.3 9.27499C14.3 5.99999 11.775 3.29999 8.57495 2.99999ZM7.99995 14.45C5.14995 14.45 2.82495 12.125 2.82495 9.27499C2.82495 6.42499 5.14995 4.09999 7.99995 4.09999C10.85 4.09999 13.175 6.42499 13.175 9.27499C13.175 12.125 10.85 14.45 7.99995 14.45Z"
                            fill=""
                          />
                          <path
                            d="M11.1749 8.69996H8.5749V6.09996C8.5749 5.79996 8.3249 5.52496 7.9999 5.52496C7.6999 5.52496 7.4249 5.77496 7.4249 6.09996V8.72496H6.7249C6.4249 8.72496 6.1499 8.97496 6.1499 9.29996C6.1499 9.62496 6.3999 9.87496 6.7249 9.87496H7.4249V10.575C7.4249 10.875 7.6749 11.15 7.9999 11.15C8.2999 11.15 8.5749 10.9 8.5749 10.575V9.87496H11.1999C11.4999 9.87496 11.7749 9.62496 11.7749 9.29996C11.7749 8.97496 11.4999 8.69996 11.1749 8.69996Z"
                            fill=""
                          />
                        </svg>

                        <span className="text-xs font-medium">{todo.time}</span>
                      </span>

                      <span className="flex items-center gap-1.5">
                        <svg
                          className="fill-current"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14 2.65002H12.7V2.10002C12.7 1.80002 12.45 1.52502 12.125 1.52502C11.8 1.52502 11.55 1.77502 11.55 2.10002V2.65002H4.42505V2.10002C4.42505 1.80002 4.17505 1.52502 3.85005 1.52502C3.52505 1.52502 3.27505 1.77502 3.27505 2.10002V2.65002H2.00005C1.15005 2.65002 0.425049 3.35002 0.425049 4.22502V12.925C0.425049 13.775 1.12505 14.5 2.00005 14.5H14C14.85 14.5 15.575 13.8 15.575 12.925V4.20002C15.575 3.35002 14.85 2.65002 14 2.65002ZM1.57505 7.30002H3.70005V9.77503H1.57505V7.30002ZM4.82505 7.30002H7.45005V9.77503H4.82505V7.30002ZM7.45005 10.9V13.35H4.82505V10.9H7.45005ZM8.57505 10.9H11.2V13.35H8.57505V10.9ZM8.57505 9.77503V7.30002H11.2V9.77503H8.57505ZM12.3 7.30002H14.425V9.77503H12.3V7.30002ZM2.00005 3.77502H3.30005V4.30002C3.30005 4.60002 3.55005 4.87502 3.87505 4.87502C4.20005 4.87502 4.45005 4.62502 4.45005 4.30002V3.77502H11.6V4.30002C11.6 4.60002 11.85 4.87502 12.175 4.87502C12.5 4.87502 12.75 4.62502 12.75 4.30002V3.77502H14C14.25 3.77502 14.45 3.97502 14.45 4.22502V6.17502H1.57505V4.22502C1.57505 3.97502 1.75005 3.77502 2.00005 3.77502ZM1.57505 12.9V10.875H3.70005V13.325H2.00005C1.75005 13.35 1.57505 13.15 1.57505 12.9ZM14 13.35H12.3V10.9H14.425V12.925C14.45 13.15 14.25 13.35 14 13.35Z"
                            fill=""
                          />
                        </svg>

                        <span className="text-xs font-medium">{todo.date}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <span
                  className={`rounded px-2.5 py-1.5 text-sm font-medium ${
                    todo.status === "Completed"
                      ? "bg-meta-3/[0.08] text-meta-3"
                      : todo.status === "Upcoming"
                        ? "bg-primary/[0.08] text-primary"
                        : "bg-red/[0.08] text-red"
                  } `}
                >
                  {todo.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
