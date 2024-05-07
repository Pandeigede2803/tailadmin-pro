import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SpinnerOne from "@/components/Spinners/SpinnerOne";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import SpinnerTwo from "@/components/Spinners/SpinnerTwo";

export const metadata: Metadata = {
  title: "Next.js Spinners | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Spinners page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const SpinnersPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Spinners" />

      <div className="flex flex-col gap-7.5">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-9">
            <h3 className="font-medium text-black dark:text-white">Style 1</h3>
          </div>

          <div className="p-4 sm:p-6 xl:p-9">
            <SpinnerOne />
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-9">
            <h3 className="font-medium text-black dark:text-white">Style 2</h3>
          </div>

          <div className="p-4 sm:p-6 xl:p-9">
            <SpinnerTwo />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SpinnersPage;
