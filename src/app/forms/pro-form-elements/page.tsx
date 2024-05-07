import React from "react";
import ProFormElements from "@/components/ProFormElements";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Pro Form Elements | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Pro Form Elements page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const ProFormElementsPage = () => {
  return (
    <DefaultLayout>
      <ProFormElements />
    </DefaultLayout>
  );
};

export default ProFormElementsPage;
