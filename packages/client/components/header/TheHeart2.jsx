import Image from "next/image";
import React from "react";
import { herostar } from "../../images";
import HeartCard from "./HeartCard";

const TheHeart2 = () => {
  return (
    <div className="relative  w-full items-center  mt-[127px] px-6 sm:pl-[100px]  lg:pl-[280px]">
      <HeartCard />
      <div className="hidden md:block absolute right-24 top-[60px]">
        <Image src={herostar} width="100%" height="100%" />
      </div>
    </div>
  );
};

export default TheHeart2;
