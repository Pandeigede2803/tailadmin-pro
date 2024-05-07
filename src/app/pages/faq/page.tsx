import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import FaqOne from "@/components/Faq/FaqOne";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Faq's | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Faq's page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const Faq: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Faq's" />

      <div className="flex flex-col gap-7.5">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-9">
            <h3 className="font-medium text-black dark:text-white">Style 1</h3>
          </div>

          <div className="p-4 sm:p-6 xl:p-9">
            <FaqOne />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Faq;
