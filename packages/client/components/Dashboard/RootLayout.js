import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import React from "react";

const RootLayout = ({ children }) => {
  return (
    <div className="bg-[#060606] flex flex-row  overflow-hidden">
      <div className="w-[23%] h-[100%]">
        <Sidebar />
      </div>
      <div className=" w-[77%] ">
        <Navbar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default RootLayout;
