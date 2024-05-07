import React from "react";
import Popovers from "@/components/Popovers";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Popovers | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Popovers page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const PopOversPage = () => {
  return (
    <DefaultLayout>
      <Popovers />
    </DefaultLayout>
  );
};

export default PopOversPage;
