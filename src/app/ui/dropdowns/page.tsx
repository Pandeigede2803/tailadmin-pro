import React from "react";
import Dropdowns from "@/components/Dropdowns";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Dropdowns | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Dropdowns page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
  // other metadata
};

const DropdownPage = () => {
  return (
    <DefaultLayout>
      <Dropdowns />
    </DefaultLayout>
  );
};

export default DropdownPage;
