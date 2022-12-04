import { PlayVideo, UploadContent } from "../components";
import Card2 from "../components/Card2";
import RootLayout from "../components/Dashboard/RootLayout";
import StreamCards from "../components/StreamCard";
import React from "react";

const Dashboard = () => {
  return (
    <RootLayout>
      {/* <StreamCards /> */}
      <PlayVideo />

      {/* <UploadContent /> */}
    </RootLayout>
  );
};

export default Dashboard;
