import React from "react";

const Whyeasybankcard = ({ Icon, title, description }) => {
	return (
		<div className='card-container'>
			<div className='flex flex-col gap-6'>
				<div className='easybank-card-icon mb-4 mx-auto md:mx-0'>
					<Icon />
				</div>
				<div className='easybank-card-title'>
					<h3 className='text-2xl text-dark-blue text-center md:text-left'>
						{title}
					</h3>
				</div>
				<div className='easybank-card-description'>
					<p className='text-base text-grayish-blue text-center md:text-left'>
						{description}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Whyeasybankcard;
