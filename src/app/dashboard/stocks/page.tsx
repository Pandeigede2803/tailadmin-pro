import Stocks from "@/components/Dashboard/Stocks";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Stocks Dashboard | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Stocks Dashboard page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const StocksPage = () => {
  return (
    <DefaultLayout>
      <Stocks />
    </DefaultLayout>
  );
};

export default StocksPage;
