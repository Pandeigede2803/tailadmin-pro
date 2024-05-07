import Inbox from "@/components/Inbox";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Inbox | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Inbox page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const InboxPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Inbox />
    </DefaultLayout>
  );
};

export default InboxPage;
