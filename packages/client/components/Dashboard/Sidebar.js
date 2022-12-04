import React from "react";
import Image from "next/image";
import logo from "../../images/Logo.png";
import ham from "../../images/icon-hamburger.svg";
import home from "../../images/home.png";
import chat from "../../images/chat.png";
import video from "../../images/videos.png";
import explore from "../../images/explore.png";
import star from "../../images/star.png";
import avatar from "../../images/avatar.png";
import follow from "../../images/follow-bk.png";
import following from "../../images/follow-wt.png";

const Sidebar = () => {
  // array of objects for the sidebar image, name and link
  const sidebarItems = [
    {
      name: "Gaming Channel",
      image: avatar,
      link: "Following",
      icon: following,
    },
    {
      name: "Gaming Channel",
      image: avatar,
      link: "Following",
      icon: following,
    },
    {
      name: "Gaming Channel",
      image: avatar,
      link: "Follow",
      icon: follow,
    },
    {
      name: "Gaming Channel",
      image: avatar,
      link: "Following",
      icon: following,
    },
  ];

  // toggle the sidebar
  const toggleSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("hidden");
  };
  // change button text to following or follow
  const changeText = (e) => {
    e.target.innerText === "Following"
      ? (e.target.innerText = "Follow")
      : (e.target.innerText = "Following");
  };

  return (
    <div className="sidebar p-6 flex flex-col h-[100vh] overflow-auto scrollbar-hide">
      <div className=" flex flex-row items-center justify-between">
        <Image
          onClick={toggleSidebar}
          src={ham}
          alt="ham"
          className="w-[30px]"
        />
        <Image src={logo} alt="logo" className="w-[150px]" />
      </div>
      <div className="flex flex-col mt-6 items-center w-full">
        <div className="flex flex-row w-full mt-4  items-center justify-start cursor-pointer">
          <Image src={home} alt="home" className="w-[20px] mr-2" />
          <p className="text-[#525252] text-[17px] font-bold">Home</p>
        </div>
        <div className="flex flex-row w-full mt-4  items-center justify-start cursor-pointer">
          <Image src={explore} alt="explore" className="w-[20px] mr-2" />
          <p className="text-[#525252] text-[17px] font-bold">Explore</p>
        </div>
        <div className="flex flex-row w-full mt-4  items-center justify-start cursor-pointer">
          <Image src={video} alt="video" className="w-[20px] mr-2" />
          <p className="text-[#525252] text-[17px] font-bold">History</p>
        </div>
        <div className="flex flex-row w-full mt-4  items-center justify-start cursor-pointer">
          <Image src={chat} alt="chat" className="w-[20px] mr-2" />
          <p className="text-[#525252] text-[17px] font-bold">Chat</p>
        </div>
        <div className="flex flex-row w-full mt-4  items-center justify-start cursor-pointer">
          <Image src={star} alt="star" className="w-[20px] mr-2" />
          <p className="text-[#525252] text-[17px] font-bold">Favorites</p>
        </div>
      </div>
      <br />
      <div className="flex flex-col justify-start">
        <h5 className="text-[#E5E5E5] text-[16px] my-1 font-bold">
          Top Creators
        </h5>
        {sidebarItems.map((item) => (
          <div className="flex flex-row items-center justify-start my-1">
            <Image src={item.image} alt="avatar" className="w-auto  mr-1" />
            <p className="text-[#525252] text-[12px] font-bold">{item.name}</p>

            <button
              onClick={changeText}
              className="bg-gray-800 border-gray-800 flex flex-row text-[#E5E5E5] text-[12px] font-bold rounded-[20px] p-1 ml-2 w-[100px] justify-center items-center"
            >
              <Image src={item.icon} alt="follow" className="w-[15px] mr-1" />
              {item.link}
            </button>
          </div>
        ))}
      </div>
      <div className="flex mt-5 flex-col justify-start">
        <h5 className="text-[#E5E5E5] text-[16px] my-1 font-bold">
          Discover Creators
        </h5>
        {sidebarItems.map((item) => (
          <div className="flex flex-row items-center justify-start my-1">
            <Image src={item.image} alt="avatar" className="w-auto  mr-1" />
            <p className="text-[#525252] text-[12px] font-bold">{item.name}</p>

            <button
              onClick={changeText}
              className="bg-gray-800 border-gray-800 flex flex-row text-[#E5E5E5] text-[12x] font-bold rounded-[20px] p-1 ml-2 w-[100px] justify-center items-center"
            >
              <Image src={item.icon} alt="follow" className="w-[15px] mr-1" />
              {item.link}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
