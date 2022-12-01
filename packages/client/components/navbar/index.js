import Link from "next/link";
import React, { useState } from "react";
import {Logo} from "../../images";
import Closebtn from "../../images/icon-close.svg";
import Barbtn from "../../images/icon-hamburger.svg";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image'
const Navbar = () => {
	const [isOpenNav, setIsOpenNav] = useState(false);

	return (
		<nav className='w-full bg-white shadow-sm fixed top-0 z-top'>
			<div className='navbar-content-container w-3/4 mx-auto'>
				<div className='w-full flex flex-row items-center justify-between py-6 sm:py-0'>
					<div className='logo self-center'>
						<Link href='/' passHref>
							<a>
								<Image src={Logo} alt='logo' width="124px" height="21px" />
							
							</a>
						</Link>
					</div>
					<div
						className={`nav-links self-center nav-link-absolute ${
							isOpenNav ? "show-link" : "not-show-link"
						}`}>
						<ul className='list-none flex gap-8 justify-center items-center'>
							<li className='nav-link-item group'>
								<Link href='/' passHref>
									<a className='nav-link-item-link'>Studio</a>
								</Link>
							</li>
							<li className='nav-link-item group'>
								<Link href='/#about' passHref>
									<a className='nav-link-item-link'>Build</a>
								</Link>
							</li>
							<li className='nav-link-item group'>
								<Link href='/#contact' passHref>
									<a className='nav-link-item-link'>Community</a>
								</Link>
							</li>
							<li className='nav-link-item group'>
								<Link href='/#blog' passHref>
									<a className='nav-link-item-link'>Roadmap</a>
								</Link>
							</li>
							
						</ul>
					</div>
					
					{/* hamburger button  */}
					<div className='block hidden'>
						{isOpenNav ? (
							<div>
								<Closebtn onClick={() => setIsOpenNav(false)} />
							</div>
						) : (
							<div>
								<Barbtn onClick={() => setIsOpenNav(true)} />
							</div>
						)}
					</div>
					<div className='mt-3 space-y-2  md:hidden'>
						  <ConnectButton />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
