import React from "react";

const ContentCreation = () => {
  return (
    <div className="flex gap-20 flex-col py-14 md:flex-row mt-[97px] bg-[#6624FF] px-6 sm:px-[50px] lg:px-[90px] xl:px-[133px]">
      <div className="flex-1 max-w-[595px] mb-14 md:mb-0">
        <h3 className="  text-[#D4D4D4] text-[30px] font-space md:text-[44px] md:leading-[46px]">
          Create an entirely new experience in Live Streaming, Video Sharing,
          and Content Creation
        </h3>
        <p className="text-lg text-[#D4D4D4]">
          Lorem ipsum dolor sit amet consectetur. Laoreet massa blandit ut hac
          est sapien tincidunt bibendum faucibus. Ac consequat rhoncus nibh
          dapibus aliquet.
        </p>
      </div>
      <div className="flex-1">
        <video
          className="w-full rounded-[5px]"
          height="413"
          id="video"
          src="http://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
          controls
        />
      </div>
    </div>
  );
};

export default ContentCreation;
