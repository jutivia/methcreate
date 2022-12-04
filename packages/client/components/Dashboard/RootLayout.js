import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const RootLayout = ({ children }) => {
  return (
    <div className="bg-[#060606] flex flex-row h-[100vh] overflow-hidden">
      <div className="w-[23%] h-[100%]">
        <Sidebar />
      </div>
      <div className="flex flex-col w-[77%]">
        <Navbar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default RootLayout;
