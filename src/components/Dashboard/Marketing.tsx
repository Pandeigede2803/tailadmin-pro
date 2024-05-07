"use client";
import React from "react";
import DataStatsTwo from "../DataStats/DataStatsTwo";
import ChartFive from "../Charts/ChartFive";
import TableFour from "../Tables/TableFour";
import ExternalLink from "../ExternalLink";
import ChartSix from "../Charts/ChartSix";
import FeaturedCampaigns from "../FeaturedCampaigns";
import Feedback from "../Feedback";

const Marketing: React.FC = () => {
  return (
    <>
      <DataStatsTwo />

      <div className="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <TableFour />
        <ChartFive />
        <ExternalLink />
        <div className="col-span-12 xl:col-span-7">
          <ChartSix />
        </div>
        <FeaturedCampaigns />
        <Feedback />
      </div>
    </>
  );
};

export default Marketing;
