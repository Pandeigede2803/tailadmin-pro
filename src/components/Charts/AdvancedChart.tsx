"use client";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import ChartFour from "@/components/Charts/ChartFour";
import ChartSeven from "@/components/Charts/ChartSeven";
import ChartEight from "@/components/Charts/ChartEight";
import ChartSix from "@/components/Charts/ChartSix";
import ChartNine from "@/components/Charts/ChartNine";
import ChartTwelve from "@/components/Charts/ChartTwelve";
import React from "react";

const AdvancedChart: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Advanced Chart" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12">
          <ChartFour />
        </div>
        <div className="col-span-12 xl:col-span-7">
          <ChartSeven />
        </div>
        <div className="col-span-12 xl:col-span-5">
          <ChartEight />
        </div>
        <div className="col-span-12 xl:col-span-7">
          <ChartSix />
        </div>
        <div className="col-span-12 xl:col-span-5">
          <ChartNine />
        </div>

        <ChartTwelve />
      </div>
    </>
  );
};

export default AdvancedChart;
