import React from "react";

const SubHeroCard = ({ type, price, small, desc }) => {
  return (
    <div className="w-full">
      <p className="font-semibold text-[#A3A3A3] leading-5 text-sm">{type}</p>
      <h3 className="text-[79px]">
        {price}
        <span className="text-[40px]">{small}</span>
      </h3>
      <p className="text-sm">{desc}</p>
    </div>
  );
};

export default SubHeroCard;
