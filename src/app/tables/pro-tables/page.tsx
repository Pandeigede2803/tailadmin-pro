import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableFive from "@/components/Tables/TableFive";
import TableSix from "@/components/Tables/TableSix";

export const metadata: Metadata = {
  title: "Next.js Pro Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Pro Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const ProTablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Pro Tables" />

      <div className="flex flex-col gap-10">
        <TableFive />
        <TableSix />
      </div>
    </DefaultLayout>
  );
};

export default ProTablesPage;
