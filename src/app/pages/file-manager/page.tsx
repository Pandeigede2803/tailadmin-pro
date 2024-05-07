import React from "react";
import FileManager from "@/components/FileManager";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js FileManager | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js FileManager page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
  // other metadata
};

const FileManagerPage = () => {
  return (
    <DefaultLayout>
      <FileManager />
    </DefaultLayout>
  );
};

export default FileManagerPage;
