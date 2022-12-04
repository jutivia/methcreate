import { UploadContent } from "../components";
import RootLayout from "../components/Dashboard/RootLayout";
import StreamCards from "../components/StreamCard";
import React from "react";
import Card2 from "../components/Card2";

const Dashboard = () => {
  return (
    <RootLayout>
      <StreamCards />
      <Card2/>
      {/* <UploadContent /> */}
    </RootLayout>
  );
};

export default Dashboard;
