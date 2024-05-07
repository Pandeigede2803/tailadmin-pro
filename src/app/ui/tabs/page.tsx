import React from "react";
import Tabs from "@/components/Tabs";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
export const metadata: Metadata = {
  title: "Next.js Tabs | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tabs page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
  // other metadata
};

const TabsPage = () => {
  return (
    <DefaultLayout>
      <Tabs />
    </DefaultLayout>
  );
};

export default TabsPage;
