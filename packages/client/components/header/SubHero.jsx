import Image from "next/image";
import React from "react";
import { herostar, subhero, leftborder, rightborder } from "../../images";
import SubHeroCard from "./SubHeroCard";
const SubHero = () => {
  return (
    <div className=" flex px-6 sm:px-[50px] lg:px-[90px] xl:px-[133px] flex-col  mt-[125px] text-white">
      <div className=" flex md:gap-[142px]  items-center flex-col md:flex-row">
        <div className="relative max-w-[567px] flex-1">
          <div className="absolute -top-[130px] -left-10">
            <Image src={herostar} width="100%" height="100%" />
          </div>
          <h3 className="font-space text-[44px] leading-[46px] ">
            Built on the most trusted network
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Laoreet massa blandit ut hac
            est sapien tincidunt bibendum faucibus. Ac consequat rhoncus nibh
            dapibus aliquet.
          </p>
        </div>
        <div className="flex-1">
          <Image src={subhero} width="100%" height="100%" />
        </div>
      </div>
      <div className="relative flex flex-col md:flex-row md:py-6 md:px-6 gap-2  mt-[29px]">
        <div className="absolute hidden md:block top-0 left-0">
          <Image src={leftborder} alt="border" width="100%" height="100%" />
        </div>

        <div className="absolute hidden md:block bottom-0 right-0">
          <Image src={rightborder} alt="border" width="100%" height="100%" />
        </div>
        <SubHeroCard
          type="Fast transactions"
          price="7,000"
          small="tx/s"
          desc="exponentially faster performance than Ethereum at 15 tx/s"
        />
        <SubHeroCard
          type="Low transactions"
          price="~$0.002"
          small=""
          desc="Approximately ~10,000x lower costs per transaction than Ethereum"
        />
      </div>
    </div>
  );
};

export default SubHero;
