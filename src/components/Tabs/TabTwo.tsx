import React, { useState } from "react";
import Link from "next/link";

const TabTwo: React.FC = () => {
  const [openTab, setOpenTab] = useState(1);

  const activeClasses = "bg-primary text-white";
  const inactiveClasses = "bg-gray dark:bg-meta-4 text-black dark:text-white";

  return (
    <div className="rounded-sm border-b border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="mb-7.5 flex flex-wrap gap-3 border-b border-stroke pb-5 dark:border-strokedark">
        <Link
          href="#"
          className={`rounded-md px-4 py-3 text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-primary md:text-base lg:px-6 ${
            openTab === 1 ? activeClasses : inactiveClasses
          }`}
          onClick={() => setOpenTab(1)}
        >
          Home
        </Link>
        <Link
          href="#"
          className={`rounded-md px-4 py-3 text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-primary md:text-base lg:px-6 ${
            openTab === 2 ? activeClasses : inactiveClasses
          }`}
          onClick={() => setOpenTab(2)}
        >
          About Us
        </Link>
        <Link
          href="#"
          className={`rounded-md px-4 py-3 text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-primary md:text-base lg:px-6 ${
            openTab === 3 ? activeClasses : inactiveClasses
          }`}
          onClick={() => setOpenTab(3)}
        >
          Our Team
        </Link>
        <Link
          href="#"
          className={`rounded-md px-4 py-3 text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-primary md:text-base lg:px-6 ${
            openTab === 4 ? activeClasses : inactiveClasses
          }`}
          onClick={() => setOpenTab(4)}
        >
          Company Details
        </Link>
      </div>

      <div>
        <div
          className={`leading-relaxed ${openTab === 1 ? "block" : "hidden"}`}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
          nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas
          sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto
          quod.
        </div>
        <div
          className={`leading-relaxed ${openTab === 2 ? "block" : "hidden"}`}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
          nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas
          sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto
          quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
          ex dolorum voluptate cupiditate adipisci doloremque, vel quam
          praesentium nihil veritatis.
        </div>
        <div
          className={`leading-relaxed ${openTab === 3 ? "block" : "hidden"}`}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
          nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas
          sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto
          quod. <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
          mollitia nam eligendi reprehenderit reiciendis saepe laboriosam
          maiores voluptas. Quo, culpa amet fugiat ipsam sed quod hic, veritatis
          ducimus recusandae repellat quasi eaque, suscipit praesentium totam?
        </div>
        <div
          className={`leading-relaxed ${openTab === 4 ? "block" : "hidden"}`}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
          nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas
          sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto
          quod.
        </div>
      </div>
    </div>
  );
};

export default TabTwo;
