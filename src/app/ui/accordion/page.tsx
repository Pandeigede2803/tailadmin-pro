import React from "react";
import Accordion from "@/components/Accordions";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Accordion | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Accordion page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
  // other metadata
};

const AccordionPage = () => {
  return (
    <DefaultLayout>
      <Accordion />
    </DefaultLayout>
  );
};

export default AccordionPage;
