import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import PaginationOne from "@/components/Paginations/PaginationOne";
import PaginationTwo from "@/components/Paginations/PaginationTwo";
import PaginationThree from "@/components/Paginations/PaginationThree";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Pagination | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Pagination page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const Pagination: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Pagination" />

      <div className="flex flex-col gap-7.5">
        <PaginationOne />
        <PaginationTwo />
        <PaginationThree />
      </div>
    </DefaultLayout>
  );
};

export default Pagination;
