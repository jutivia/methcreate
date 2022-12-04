import Image from "next/image";
import React from "react";

const AboutContentCard = ({ title, desc, imgUrl }) => {
  return (
    <div className="relative bg-gray-800 flex items-end rounded-[12px] px-6 pb-8 xg:pb-[52px] h-[316px]">
      <div className="absolute -top-14 -left-10">
        <Image src={imgUrl} alt={title} width="100%" height="100%" />
      </div>
      <div>
        <h4 className="text-[#D4D4D4] leading-1 text-2xl ">{title}</h4>
        <p className="text-lg   text-[#A3A3A3]">{desc}</p>
      </div>
    </div>
  );
};

export default AboutContentCard;
