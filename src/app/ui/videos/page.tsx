import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import VideosItem from "@/components/VideosItem";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Videos | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Videos page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const Videos: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Videos" />

      <div className="flex flex-col gap-7.5">
        <VideosItem title="Embeds Video" embeds />
        <VideosItem title="Responsive Aspect ratios 4:3" aspectFour />
        <VideosItem title="Responsive Aspect ratios 21:9" aspectTwentyOne />
        <VideosItem title="Responsive Aspect ratios 1:1" aspectOne />
      </div>
    </DefaultLayout>
  );
};

export default Videos;
