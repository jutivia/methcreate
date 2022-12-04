import Image from "next/image";
import React from "react";
import { thumbsup } from "../../images";
const ThumbsUpCard = ({ title, desc }) => {
  return (
    <div className="flex gap-3 flex-col max-w-[413px]">
      <div>
        <Image src={thumbsup} alt="thumbs up" width="100%" height="100%" />
      </div>
      <h3 className="text-[28px] text-[#D4D4D4]">{title}</h3>
      <p className="text-base">{desc}</p>
    </div>
  );
};

export default ThumbsUpCard;
