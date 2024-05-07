import React from "react";
import Image from "next/image";

interface Notification {
  active: boolean;
  image: string;
  name: string;
  details: string;
  time: string;
  date: string;
}

const notificationList: Notification[] = [
  {
    active: true,
    image: "/images/user/user-03.png",
    name: "Dwayne Bero",
    details: "Project assigned by the manager",
    time: "5 min ago",
    date: "24, Nov 2027",
  },
  {
    active: true,
    image: "/images/user/user-22.png",
    name: "Talan Curtis",
    details: "Approved date for sanction of load is verified",
    time: "22, Feb 2027",
    date: "24, Nov 2027",
  },
  {
    active: true,
    image: "/images/user/user-23.png",
    name: "Talan Rhiel Madsen",
    details: "Admin and other team accepted your work request",
    time: "12 min ago",
    date: "12, Jan 2027",
  },
  {
    active: false,
    image: "/images/user/user-24.png",
    name: "Charlie Botosh",
    details: "Temporarily your account has been suspended",
    time: "1 year ago",
    date: "09, Dec 2026",
  },
  {
    active: true,
    image: "/images/user/user-25.png",
    name: "Jordyn Torff",
    details: "You have changed your password successfully",
    time: "1 year ago",
    date: "30, Mar 2026",
  },
];

const NotificationsFour: React.FC = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-7.5">
        <h3 className="font-medium text-black dark:text-white">
          Notifications Style 4
        </h3>
      </div>

      <div className="p-4 sm:p-6 xl:p-10">
        <div className="flex flex-col gap-5">
          {notificationList.map((item, index) => (
            <div
              key={index}
              className={`rounded-[10px] border-l-[5px] bg-white px-4 py-6 shadow-13 dark:bg-boxdark sm:px-5 xl:px-7.5 ${
                item.active ? "border-meta-3" : "border-red"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-5">
                <div className="flex gap-5">
                  <div className="relative h-11.5 w-full max-w-11.5 rounded-full">
                    <Image
                      width={46}
                      height={46}
                      src={item.image}
                      alt="user"
                      style={{
                        width: "auto",
                        height: "auto",
                      }}
                    />

                    <span
                      className={`absolute -top-0.5 right-0.5 h-4 w-full max-w-4 rounded-full border-[2.3px] border-white ${
                        item.active ? "bg-[#219653]" : "bg-red"
                      }`}
                    ></span>
                  </div>

                  <div className="w-full">
                    <h4 className="mb-[3px] text-title-xsm font-bold text-black dark:text-white">
                      {item.name}
                    </h4>
                    <p className="mb-[3px] font-medium">{item.details}</p>
                    <span className="text-sm font-medium"> {item.time} </span>
                  </div>
                </div>

                <span className="inline-flex rounded-md bg-gray px-2.5 py-1.5 text-sm font-medium leading-[22px] dark:bg-graydark">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationsFour;
