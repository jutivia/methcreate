import { PlayVideo, UploadContent } from "../components";
import Card2 from "../components/Card2";
import RootLayout from "../components/Dashboard/RootLayout";
import ExploreCard from "../components/ExploreCard";
import StreamCards from "../components/StreamCard";
import React from "react";

const Dashboard = () => {
  return (
    <RootLayout>
      <StreamCards />
    </RootLayout>
  );
};

export default Dashboard;
