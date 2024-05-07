import Analytics from "@/components/Dashboard/Analytics";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Analytics Dashboard | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Analytics Dashboard page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const AnalyticsPage = () => {
  return (
    <DefaultLayout>
      <Analytics />
    </DefaultLayout>
  );
};

export default AnalyticsPage;
