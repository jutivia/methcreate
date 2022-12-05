import Image from "next/image";
import React from "react";
import { homegradient, homehologram } from "../../images";
import AboutContent from "./AboutContent";
import TheHeart from "./TheHeart";
import TheHeart2 from "./TheHeart2";
import ThumbsUpCard from "./ThumbsUpCard";

const Section = () => {
  return (
    <div className="bg-black relative mt-36">
      <div className="absolute hidden lg:block -left-16 -bottom-[280px]">
        <Image
          src={homegradient}
          width="100%"
          height="100%"
          alt="home gradient"
        />
      </div>
      <div className="absolute hidden lg:block left-0 bottom-[20px]">
        <Image
          src={homehologram}
          width="100%"
          height="100%"
          alt="home gradient"
        />
      </div>
      <div className="h-20"></div>
      <TheHeart />
      <AboutContent />
      <TheHeart2 />
      <div className="mt-[105px] grid md:grid-cols-2 gap-16 justify-center  px-6 sm:pl-[150px]  lg:pl-[390px]">
        <ThumbsUpCard
          title="Vote content"
          desc="Lorem ipsum dolor sit amet consectetur. Laoreet massa blandit ut hac est sapien tincidunt bibendum faucibus. Ac consequat rhoncus nibh dapibus aliquet. Lorem ipum dolor sit amet consectetur. Laoreet massa blandit ut hac est sapien tincidunt bibendum faucibus. Ac consequat rhoncus nibh dapibus aliquet."
        />
        <ThumbsUpCard
          title="Private content"
          desc="Lorem ipsum dolor sit amet consectetur. Laoreet massa blandit ut hac est sapien tincidunt bibendum faucibus. Ac consequat rhoncus nibh dapibus aliquet. Lorem ipum dolor sit amet consectetur. Laoreet massa blandit ut hac est sapien tincidunt bibendum faucibus. Ac consequat rhoncus nibh dapibus aliquet."
        />
        <ThumbsUpCard
          title="Download videos"
          desc="Lorem ipsum dolor sit amet consectetur. Laoreet massa blandit ut hac est sapien tincidunt bibendum faucibus. Ac consequat rhoncus nibh dapibus aliquet. Lorem ipum dolor sit amet consectetur. Laoreet massa blandit ut hac est sapien tincidunt bibendum faucibus. Ac consequat rhoncus nibh dapibus aliquet."
        />
        <ThumbsUpCard
          title="Earn rewards"
          desc="Lorem ipsum dolor sit amet consectetur. Laoreet massa blandit ut hac est sapien tincidunt bibendum faucibus. Ac consequat rhoncus nibh dapibus aliquet. Lorem ipum dolor sit amet consectetur. Laoreet massa blandit ut hac est sapien tincidunt bibendum faucibus. Ac consequat rhoncus nibh dapibus aliquet."
        />
      </div>
    </div>
  );
};

export default Section;
