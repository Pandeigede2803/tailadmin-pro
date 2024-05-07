"use client";
import React from "react";
import ChartTwelve from "@/components/Charts/ChartTwelve";
import DataStatsFour from "@/components/DataStats/DataStatsFour";
import MyStocks from "@/components/Stocks/MyStocks";
import TrendingStocks from "@/components/Stocks/TrendingStocks";
import LatestTransaction from "@/components/Stocks/LatestTransaction";

const Stocks: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-9">
        {/* <!-- ====== Data Stats Start --> */}
        <DataStatsFour />
        {/* <!-- ====== Data Stats End --> */}

        {/* <!-- ====== Chart Twelve Start --> */}
        <ChartTwelve />
        {/* <!-- ====== Chart Twelve End --> */}

        {/* <!-- ====== My Stocks Start --> */}
        <MyStocks />
        {/* <!-- ====== My Stocks End --> */}

        {/* <!-- ====== Trending Stocks Start --> */}
        <TrendingStocks />
        {/* <!-- ====== Trending Stocks End --> */}

        {/* <!-- ====== Latest Transaction Start --> */}
        <LatestTransaction />
        {/* <!-- ====== Latest Transaction End --> */}
      </div>
    </>
  );
};

export default Stocks;
