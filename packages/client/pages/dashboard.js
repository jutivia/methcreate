import { PlayVideo, UploadContent } from "../components";
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
