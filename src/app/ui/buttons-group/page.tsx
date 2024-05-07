import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ButtonsGroupOne from "@/components/ButtonsGroups/ButtonsGroupOne";
import ButtonsGroupTwo from "@/components/ButtonsGroups/ButtonsGroupTwo";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Button Groups | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Button Groups page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const ButtonsGroup: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Buttons Group" />

      <div className="flex flex-col gap-7.5">
        <ButtonsGroupOne />
        <ButtonsGroupTwo />
      </div>
    </DefaultLayout>
  );
};

export default ButtonsGroup;
