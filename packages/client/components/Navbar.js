import Link from "next/link";
import React, { useState } from "react";
import { Logo } from "../images";
import {RxHamburgerMenu } from "react-icons/ri"

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
const Navbar = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  return (
    <nav className="w-full bg-black shadow-sm ">
        <div className="py-4 max-w-[1400px] w-[90%] mx-auto flex items-center justify-between">
            <Image className="w-[124px] h-[20px]" src={Logo} alt="logo" />
            <div className="laptop:flex hidden">
              <p className="p-3 text-light mb-2 font-[700] ">Studio</p>
              <p className="p-3 text-light mb-2 font-[700] ">Build</p>
              <p className="p-3 text-light mb-2 font-[700]">Community</p>
              <p className="p-3 text-light mb-2 font-[700] ">Roadmap</p>
            </div>
			<div className="flex">
				<div className="">
					<ConnectButton />
				</div>
				
			</div>


          {/* {isOpen && <MobileNav setIsOpen={setIsOpen} />} */}
        </div>
    </nav>
  );
};

export default Navbar;