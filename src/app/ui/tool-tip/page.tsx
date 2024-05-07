import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TooltipsOne from "@/components/ToolTips/TooltipsOne";
import TooltipsTwo from "@/components/ToolTips/TooltipsTwo";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Tooltips | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tooltips page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const Tooltips: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tooltips" />

      <div className="flex flex-col gap-7.5">
        <TooltipsOne />
        <TooltipsTwo />
      </div>
    </DefaultLayout>
  );
};

export default Tooltips;
