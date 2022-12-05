import React from "react";
import Image from "next/image";
import { Logo } from "../images";

import { BsTwitter } from "react-icons/bs";
import StreamCards from "./StreamCard";
import Card2 from "./Card2";
const Footer = () => {
  return (
    <div >
      <div className="  pb-[30px]  bg-black gap-10 flex flex-wrap justify-between max-w-[1300px] w-[90%] mx-auto ">
        <div >
          <p className="text-[#FFFFFF] mb-4 font-[500]">Learn</p>
          <p className="text-[#FFFFFF] mb-2 opacity-50 font-[500]">Introduction</p>
          <p className="text-[#FFFFFF] mb-2 opacity-50 font-[500]">Features</p>
          <p className="text-[#FFFFFF] mb-2 opacity-50 font-[500]">Earn</p>
          <p className="text-[#FFFFFF] mb-2 opacity-50 font-[500]">LeStreamingarn</p>
          <p className="text-[#FFFFFF] mb-2 opacity-50 font-[500]">FAQ</p>
        </div>

        <div>
          <p className="text-[#FFFFFF] mb-4 font-[500]">Build</p>
          <p className="text-[#FFFFFF] mb-2 opacity-50 font-[500]">Documentation</p>
          <p className="text-[#FFFFFF] mb-2 opacity-50 font-[500]">Bug hunt</p>
         
        </div>
        <div>
          <p className="text-[#FFFFFF] mb-4 font-[500]">Explore</p>
          <p className="text-[#FFFFFF] mb-2 opacity-50 font-[500]">Studio</p>
          <p className="text-[#FFFFFF] mb-2 opacity-50 font-[500]">Blog↗</p>
         
        </div>
        <div>
          <p className="text-[#FFFFFF] mb-4 font-[500]">Participate</p>
          <p className="text-[#FFFFFF] mb-2 opacity-50 font-[500]">Community↗</p>
          <p className="text-[#FFFFFF] mb-2 opacity-50 font-[500]">Contributors↗</p>
          <p className="text-[#FFFFFF] mb-2 opacity-50 font-[500]">Events↗</p>
          <p className="text-[#FFFFFF] mb-2 opacity-50 font-[500]">Newsletters↗</p>
         
        </div>
        <div>
          <p className="text-[#FFFFFF] mb-4 font-[500]">Resources</p>
          <p className="text-[#FFFFFF] mb-2 opacity-50 font-[500]">About↗</p>
          <p className="text-[#FFFFFF] mb-2 opacity-50 font-[500]">Press Kit↗</p>
          <p className="text-[#FFFFFF] mb-2 opacity-50 font-[500]">Brand↗</p>
          <p className="text-[#FFFFFF] mb-2 opacity-50 font-[500]">Brand↗</p>
          
        </div>
      <div className="h-[1px] my-10 w-full border-b-2 border-[#FFFFFF] opacity-25" />

      </div>
      <div className="w-[90%] pb-20 max-w-[1300px] mx-auto">
        <div className="flex gap-6">
        <Image className="w-[124px] h-[20px]" src={Logo} alt="logo" />
        <p className="text-[#fff] border-l-2 border-[#fff] opacity-25 pl-7">Polygon Hackathon</p>
        </div>
        <p className="text-[#FFF] opacity-50 mt-10">Metacreate is a team project as part of efforts to participate and win the Polygon Hackathon.</p>
      </div>
      
    </div>
  );
};

export default Footer;