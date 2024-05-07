import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Breadcrumbs | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Breadcrumbs page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
  // other metadata
};

const BreadcrumbsPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumbs />
    </DefaultLayout>
  );
};

export default BreadcrumbsPage;
