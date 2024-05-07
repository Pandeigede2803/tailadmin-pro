import React from "react";
import Progress from "@/components/Progress";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Progress | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Progress page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
  // other metadata
};

const ProgressPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Progress />
    </DefaultLayout>
  );
};

export default ProgressPage;
