import Image from "next/image";
import React from "react";
import { herostar } from "../../images";
import HeartCard from "./HeartCard";

const TheHeart = () => {
  return (
    <div className="relative mt-[144px] px-6  sm:px-[50px] lg:px-[90px] xl:px-[133px]">
      <div className="absolute -top-[100px] right-10 lg:right-[230px]">
        <Image src={herostar} width="100%" height="100%" />
      </div>
      <HeartCard />
    </div>
  );
};

export default TheHeart;
