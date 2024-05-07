import React from "react";
import Messages from "@/components/Messages";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Messages | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Messages page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
  // other metadata
};

const MessagesPage = () => {
  return (
    <DefaultLayout>
      <Messages />
    </DefaultLayout>
  );
};

export default MessagesPage;
