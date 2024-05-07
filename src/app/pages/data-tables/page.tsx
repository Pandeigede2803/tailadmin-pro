import React from "react";
import DataTables from "@/components/DataTables";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js DataTables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js DataTables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
  // other metadata
};

const DataTablesPage = () => {
  return (
    <DefaultLayout>
      <DataTables />
    </DefaultLayout>
  );
};

export default DataTablesPage;
