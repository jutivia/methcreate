import React from "react";
import Logo from "../../images/logo.svg";
import Link from "next/link";
import {
	FaFacebookF,
	FaYoutube,
	FaTwitter,
	FaPinterestP,
	FaInstagram,
} from "react-icons/fa";

const Footer = () => {
	return (
		<div className='bg-dark-blue'>
			<div className='w-3/4 mx-auto py-14'>
				<div className='grid grid-cols-1 lg:grid-cols-5 justify-between items-center gap-10 lg:gap-5'>
					{/* left side of footer  */}
					<div className='footer-logo flex flex-col justify-between items-center gap-8 justify-self-center lg:justify-self-start'>
						<div className='logo w-full'>
							<Link href='/' passHref>
								<a>
									<Logo />
								</a>
							</Link>
						</div>
						<div className='logo-links self-center w-full'>
							<ul className='list-none flex gap-4'>
								<li>
									<a
										href='#'
										className='text-light-greyish-blue hover:text-lime-green duration-200'>
										<FaFacebookF />
									</a>
								</li>
								<li>
									<a
										href='#'
										className='text-light-greyish-blue hover:text-lime-green duration-200'>
										<FaYoutube />
									</a>
								</li>
								<li>
									<a
										href='#'
										className='text-light-greyish-blue hover:text-lime-green duration-200'>
										<FaTwitter />
									</a>
								</li>
								<li>
									<a
										href='#'
										className='text-light-greyish-blue hover:text-lime-green duration-200'>
										<FaPinterestP />
									</a>
								</li>
								<li>
									<a
										href='#'
										className='text-light-greyish-blue hover:text-lime-green duration-200'>
										<FaInstagram />
									</a>
								</li>
							</ul>
						</div>
					</div>
					{/* middle side of footer  */}
					<div className='footer-links justify-self-center lg:justify-self-start flex flex-col sm:flex-row justify-evenly gap-4 col-start-1 lg:col-start-2 col-end-1 lg:col-end-3'>
						{/* left link  */}
						<ul className='list-none flex flex-col gap-4'>
							<li className='text-center sm:text-left'>
								<a
									href='#'
									className='text-grayish-blue text-base hover:text-lime-green duration-200'>
									About Us
								</a>
							</li>
							<li className='text-center sm:text-left'>
								<a
									href='#'
									className='text-grayish-blue text-base hover:text-lime-green duration-200'>
									Contact
								</a>
							</li>
							<li className='text-center sm:text-left'>
								<a
									href='#'
									className='text-grayish-blue text-base hover:text-lime-green duration-200'>
									Blog
								</a>
							</li>
						</ul>
						{/* right link */}
						<ul className='list-none flex flex-col gap-4'>
							<li className='text-center sm:text-right lg:text-left'>
								<a
									href='#'
									className='text-grayish-blue text-base hover:text-lime-green duration-200'>
									Careers
								</a>
							</li>
							<li className='text-center sm:text-right lg:text-left'>
								<a
									href='#'
									className='text-grayish-blue text-base hover:text-lime-green duration-200'>
									Support
								</a>
							</li>
							<li className='text-center sm:text-right lg:text-left'>
								<a
									href='#'
									className='text-grayish-blue text-base hover:text-lime-green duration-200'>
									Privacy Policy
								</a>
							</li>
						</ul>
					</div>
					{/* right side of footer  */}
					<div className='w-full footer-button justify-self-center lg:justify-self-start flex flex-col gap-4 justify-between items-center col-start-1 lg:col-start-4 col-span-1 lg:col-span-2'>
						
						<p className='text-base text-grayish-blue text-center lg:text-right w-full'>
							&copy; Methcreate. All Rights Reserved
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
