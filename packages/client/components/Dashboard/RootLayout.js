import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import React, { useState } from "react";

const RootLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="bg-[#060606] flex flex-row  overflow-hidden h-full">
      {isOpen && (
        <div className="w-[23%] h-[100%]">
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      )}
      <div className={` ${isOpen ? "w-[77%]" : "w-full"} h-full `}>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="overflow-scroll scrollbar-hide h-[100vh]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
