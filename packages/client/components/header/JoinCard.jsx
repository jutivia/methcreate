import React from "react";
import { WiDirectionUpRight } from "react-icons/wi";

const JoinCard = ({ icon, title, desc }) => {
  return (
    <div className="max-w-[413px]">
      <div className="flex items-center  mb-3">
        {icon}
        <h3 className="mr-4 ml-2 text-lg">{title}</h3>
        <WiDirectionUpRight className="cursor-pointer" size={24} />
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default JoinCard;
