import React from "react";
import Images from "@/components/Images";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Images | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Images page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
  // other metadata
};

const ImagesPage = () => {
  return (
    <DefaultLayout>
      <Images />
    </DefaultLayout>
  );
};

export default ImagesPage;
