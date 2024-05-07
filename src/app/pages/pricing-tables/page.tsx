import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import PricingTableOne from "@/components/PricingTables/PricingTableOne";
import PricingTableTwo from "@/components/PricingTables/PricingTableTwo";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Pricing Table | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Pricing Table page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const PricingTables: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Pricing Table" />

      <div className="flex flex-col gap-5 md:gap-7 2xl:gap-10">
        <PricingTableOne />
        <PricingTableTwo />
      </div>
    </DefaultLayout>
  );
};

export default PricingTables;
