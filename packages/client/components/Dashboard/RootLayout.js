import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import React from "react";

const RootLayout = ({ children }) => {
  return (
    <div className="bg-[#060606] flex flex-row  overflow-hidden h-full">
      <div className="w-[23%] h-[100%]">
        <Sidebar />
      </div>
      <div className=" w-[77%] h-full ">
        <Navbar />
        <div className="overflow-scroll scrollbar-hide h-[100vh]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
