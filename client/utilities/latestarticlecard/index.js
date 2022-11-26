import Image from "next/image";
import Link from "next/link";
import React from "react";

const LatestArticleCard = ({ image, title, author, description }) => {
	return (
		<div className='latest-article-card-container bg-white shadow-md rounded overflow-hidden'>
			<Link href='/'>
				<a className='group'>
					<div className='overflow-hidden'>
						<div className='latest-article-card-image h-[200px] overflow-hidden relative'>
							<Image
								src={image}
								alt='title'
								className='object-cover w-full absolute top-0 left-0 h-full'
								layout='fill'
								objectFit='cover'
								quality={100}
							/>
						</div>
						<div className='latest-article-card-content py-6 px-6'>
							<p className='text-xs text-grayish-blue pb-2'>By {author}</p>
							<h3 className='pb-2 text-dark-blue leading-tight group-hover:text-lime-green duration-200'>
								{title}
							</h3>
							<p className='text-sm text-grayish-blue'>{description}</p>
						</div>
					</div>
				</a>
			</Link>
		</div>
	);
};

export default LatestArticleCard;
