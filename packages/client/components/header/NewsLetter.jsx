import React from "react";
import { WiDirectionRight } from "react-icons/wi";

const NewsLetter = () => {
  return (
    <div className="my-32 flex flex-col items-center md:flex-row px-6 justify-center gap-8">
      <div className="max-w-[334px]">
        <h3 className="text-[32px] text-[#D4D4D4]">Join our newsletter</h3>
        <p className="text-lg">Unsubscribe anytime you want.</p>
      </div>
      <div className="relative">
        <WiDirectionRight className="absolute right-5 top-[2px]" size={60} />
        <input
          placeholder="Your email address"
          className="bg-[#1E1E1E] border-none outline-none w-full sm:w-[452px] p-4 pr-10 rounded-[5px]"
        />
      </div>
    </div>
  );
};

export default NewsLetter;
