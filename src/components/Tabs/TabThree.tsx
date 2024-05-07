import React, { useState } from "react";
import Link from "next/link";

const TabThree: React.FC = () => {
  const [openTab, setOpenTab] = useState(1);

  const activeClasses = "text-primary border-primary";
  const inactiveClasses = "border-transparent";

  return (
    <div className="rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="mb-6 flex flex-wrap gap-5 border-b border-stroke dark:border-strokedark sm:gap-10">
        <Link
          href="#"
          className={`border-b-2 py-4 text-sm font-medium hover:text-primary md:text-base ${
            openTab === 1 ? activeClasses : inactiveClasses
          }`}
          onClick={() => setOpenTab(1)}
        >
          Profile
        </Link>
        <Link
          href="#"
          className={`border-b-2 py-4 text-sm font-medium hover:text-primary md:text-base ${
            openTab === 2 ? activeClasses : inactiveClasses
          }`}
          onClick={() => setOpenTab(2)}
        >
          Password
        </Link>
        <Link
          href="#"
          className={`border-b-2 py-4 text-sm font-medium hover:text-primary md:text-base ${
            openTab === 3 ? activeClasses : inactiveClasses
          }`}
          onClick={() => setOpenTab(3)}
        >
          Team
        </Link>
        <Link
          href="#"
          className={`border-b-2 py-4 text-sm font-medium hover:text-primary md:text-base ${
            openTab === 4 ? activeClasses : inactiveClasses
          }`}
          onClick={() => setOpenTab(4)}
        >
          Notification
        </Link>
      </div>

      <div>
        <div
          className={`leading-relaxed ${openTab === 1 ? "block" : "hidden"}`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          luctus ligula nec dolor placerat, a consequat elit volutpat. Quisque
          nibh lacus, posuere et turpis in, pretium facilisis nisl. Proin congue
          sem vel sollicitudin sagittis. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per
        </div>
        <div
          className={`leading-relaxed ${openTab === 2 ? "block" : "hidden"}`}
        >
          Tab2 ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          luctus ligula nec dolor placerat, a consequat elit volutpat. Quisque
          nibh lacus, posuere et turpis in, pretium facilisis nisl. Proin congue
          sem vel sollicitudin sagittis. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per
        </div>
        <div
          className={`leading-relaxed ${openTab === 3 ? "block" : "hidden"}`}
        >
          Tab3 ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          luctus ligula nec dolor placerat, a consequat elit volutpat. Quisque
          nibh lacus, posuere et turpis in, pretium facilisis nisl. Proin congue
          sem vel sollicitudin sagittis. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per
        </div>
        <div
          className={`leading-relaxed ${openTab === 4 ? "block" : "hidden"}`}
        >
          Tab4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
          nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas
          sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto
          quod.
        </div>
      </div>
    </div>
  );
};

export default TabThree;
