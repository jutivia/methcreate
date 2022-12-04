import { profilepicture } from "../images";
import Card2 from "./Card2";
import { exploreData } from "./data/CardData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";

const PlayVideo = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 px-3">
      <div className="max-h-[788px]  w-[70%]">
        <video
          className="w-full rounded-[5px]"
          height="100%"
          width="100%"
          id="video"
          src="http://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
          controls
        />
        <div className="flex justify-between items-center">
          <div>
            <h4>Operation Tonga | Realistic Ultra Graphics</h4>
            <div className="flex gap-3 text-xs">
              <p>238K watching </p>
              <p>5 month ago</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <FaRegThumbsUp className="cursor-pointer" size={24} /> <p>2k</p>
            </div>
            <div className="flex items-center gap-2">
              <FaRegThumbsDown className="cursor-pointer" size={24} /> <p>6</p>
            </div>
          </div>
        </div>
        <div className="flex mt-4 gap-5 items-center">
          <div className="max-w-[50px] max-h-[50px]">
            <Image width="100%" height="100%" src={profilepicture} alt="" />
          </div>
          <div>
            <h3>Gaming channel </h3>
            <p className="text-[10px]">600k subscribe</p>
          </div>
        </div>
        <div className="mt-4 w-full">
          <h4>0 Comment</h4>
          <div className="flex mt-2  w-full gap-5">
            <div className="max-w-[50px] max-h-[50px]">
              <Image width="100%" height="100%" src={profilepicture} alt="" />
            </div>
            <textarea
              className="bg-black w-full p-2 rounded border-[1px] outline-none"
              placeholder="add a comment "
              rows={4}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="w-[395px] mt-20 md:mt-0 overflow-y-auto scrollbar-hide ">
        <h3>Similar Content</h3>
        {exploreData?.map((items) => (
          <div
            key={items}
            className="relative pb-6 flex     flex-col justify-center"
          >
            <div className=" flex gap-1 relative py-1 px-2 text-[10px]  ">
              <Link href={`${items.id}`}>
                <Image
                  className="aspect-video w-[328px] rounded-[8px] object-cover object-center"
                  src={items.StreamImg}
                />
              </Link>
              <div>
                <h1 className="text-md  text-light  font-inter">
                  {items.Title}
                </h1>

                <div className=" w-fit mt-1 items-center  gap-1 flex">
                  <h3 className="text-[#D4D4D4] ">{items.Name}</h3>
                  <h3 className="text-[ #D4D4D4] text-[6px]   ">
                    {items.Name1}
                  </h3>
                  <h3 className="text-[ #D4D4D4]   text-[6px]  ">
                    {items.Name2}
                  </h3>
                </div>
                <div className=" w-fit mt-1  gap-1   flex">
                  <h3 className="text-[ #D4D4D4]  text-[8px]  py-1 px-2 bg-[#262626]    rounded-[14px] ">
                    {items.Text}
                  </h3>
                  <h3 className="text-[ #D4D4D4]   bg-[#262626] py-1 px-2 text-[8px]  rounded-[14px] ">
                    {items.RichText}
                  </h3>
                  <h3 className="text-[ #D4D4D4]    bg-[#262626] text-[8px] py-1 px-2  rounded-[14px] ">
                    {items.LowText}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayVideo;
