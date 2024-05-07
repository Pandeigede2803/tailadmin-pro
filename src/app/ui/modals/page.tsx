import React from "react";
import Modals from "@/components/Modals";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Modals | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Modals page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
  // other metadata
};

const ModalPage = () => {
  return (
    <DefaultLayout>
      <Modals />
    </DefaultLayout>
  );
};

export default ModalPage;
