import React from "react";
import Button from "./Button";
import JoinCard from "./JoinCard";
import { GrTwitter } from "react-icons/gr";
import { BsDiscord, BsYoutube } from "react-icons/bs";
const JoinCommunity = () => {
  return (
    <div className="mt-[417px]  gap-[70px] flex justify-between items-center flex-col md:flex-row max-w-[1089px] mx-auto px-6">
      <div className="flex-1 max-w-[508px]  ">
        <h3 className="  text-[#D4D4D4] text-[30px] font-space md:text-[44px] mb-4 md:leading-[46px]">
          Join the global <br /> community
        </h3>
        <p className="text-lg mb-8 text-[#D4D4D4]">
          Lorem ipsum dolor sit amet consectetur. Laoreet massa blandit ut hac
          est sapien tincidunt bibendum faucibus. Ac consequat rhoncus nibh
          dapibus aliquet
        </p>
        <Button text="Join now" />
      </div>
      <div className="flex-1 flex flex-col gap-10">
        <JoinCard
          icon={<GrTwitter size={24} />}
          title="Twitter"
          desc="Lorem ipsum dolor sit amet consectetur. Laoreet massa blandit ut hac est sapien tincidunt bibendum faucibus."
        />
        <JoinCard
          icon={<BsDiscord size={24} />}
          title="Discord community"
          desc="Lorem ipsum dolor sit amet consectetur. Laoreet massa blandit ut hac est sapien tincidunt bibendum faucibus."
        />
        <JoinCard
          icon={<BsYoutube size={24} />}
          title="Youtube"
          desc="Lorem ipsum dolor sit amet consectetur. Laoreet massa blandit ut hac est sapien tincidunt bibendum faucibus."
        />
      </div>
    </div>
  );
};

export default JoinCommunity;
