import Image from "next/image";
import React from "react";
import {
  bluepause,
  blueplay,
  ellipse3blur,
  ellipse3clear,
  greenplay,
  record,
  yellowstop,
} from "../../images";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="relative text-white mt-[146px] max-w-[782px] mx-auto text-center px-4">
      <div className="absolute -z-10  hidden xl:block   -right-[200px] top-4">
        <Image src={blueplay} alt="hero" width="100%" height="100%" />
      </div>
      <div className="absolute -z-20  hidden xl:block   -right-[120px] -top-[90px]">
        <Image src={ellipse3clear} alt="hero" width="100%" height="100%" />
      </div>

      <div className="absolute -z-10  hidden md:block w-[76px]   -left-[50px] top-[10px]">
        <Image src={bluepause} alt="hero" width="100%" height="100%" />
      </div>
      <div className="absolute -z-10  hidden md:block    -left-[250px] top-[10px]">
        <Image src={ellipse3blur} alt="hero" width="100%" height="100%" />
      </div>
      <div className="absolute -z-10  hidden md:block w-[267px]   -left-[230px] top-[30px]">
        <Image src={greenplay} alt="hero" width="100%" height="100%" />
      </div>

      <div className="absolute -z-20  hidden lg:block   -right-[40px] bottom-[10px]">
        <Image src={yellowstop} alt="hero" width="100%" height="100%" />
      </div>
      <div className="absolute -z-20  hidden md:block   right-[140px] -bottom-[110px]">
        <Image src={record} alt="hero" width="100%" height="100%" />
      </div>
      <p>Welcome to Metacreate</p>
      <h1 className="text-h-text font-space leading-10  sm:leading-[81px] mb-5">
        Decentralised Video Streaming
      </h1>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur. Laoreet massa blandit ut hac est
        sapien tincidunt bibendum faucibus. Ac consequat rhoncus nibh dapibus
        aliquet.
      </p>
      <Button text="Launch dapp" />
    </div>
  );
};

export default Hero;
