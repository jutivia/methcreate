import {
  livestreaming,
  nftgradient,
  nftheader,
  earnrewards,
  contentowner,
} from "../../images";
import AboutContentCard from "./AboutContentCard";
import Image from "next/image";
import React from "react";

const AboutContent = () => {
  return (
    <div className="mt-[88px] px-6 flex items-center gap-7 flex-col lg:flex-row   sm:px-[50px] lg:px-[90px] xl:px-[133px]">
      <div className="relative w-full sm:w-[484px] flex  items-end h-[635px] bg-gray-800 rounded-[12px] px-8 pb-14">
        <div className="absolute -top-14 -left-28">
          <Image src={nftheader} alt="header nft" width="100%" height="100%" />
        </div>
        <div className="absolute top-40 -left-0">
          <Image
            src={nftgradient}
            alt="header nft"
            width="100%"
            height="100%"
          />
        </div>
        <div>
          <h4 className="text-[#D4D4D4] text-2xl ">Mint NFTs</h4>
          <p className="text-lg text-[#A3A3A3]">
            Lorem ipsum dolor sit amet consectetur. Laoreet massa blandit ut hac
            est sapien tincidunt bibenq uet
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col  gap-8">
        <div className="relative  bg-gray-800 rounded-[12px]  flex items-end h-[459px] px-6 md:pl-[58px] pb-[66px]  md:h-[290px] ">
          <div className="absolute -top-14 -right-3 lg:-right-10 w-[243px]">
            <Image
              src={livestreaming}
              alt="header nft"
              width="100%"
              height="100%"
            />
          </div>
          <div className="max-w-[413px] ">
            <h4 className="text-[#D4D4D4] text-2xl ">Mint NFTs</h4>
            <p className="text-lg text-[#A3A3A3]">
              Lorem ipsum dolor sit amet consectetur. Laoreet massa blandit ut
              hac est sapien tincidunt bibenq uet
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <AboutContentCard
            title="Earn rewards"
            desc="Lorem ipsum dolor sit amet consectetur. Laoreet massa blandit ut hac est sapien "
            imgUrl={earnrewards}
          />
          <AboutContentCard
            title="Content Ownership"
            desc="Lorem ipsum dolor sit amet consectetur. Laoreet massa blandit ut"
            imgUrl={contentowner}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
