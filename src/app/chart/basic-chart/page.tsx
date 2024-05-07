import BasicChart from "@/components/Charts/BasicChart";
import { Metadata } from "next";
import FormElements from "@/components/FormElements";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Basic Chart | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Basic Chart page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
  // other metadata
};

const BasicChartPage: React.FC = () => {
  return (
    <DefaultLayout>
      <BasicChart />
    </DefaultLayout>
  );
};

export default BasicChartPage;
