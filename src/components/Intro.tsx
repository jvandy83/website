import React from 'react';

import ScrollAnimation from 'react-animate-on-scroll';

import familyPic from '../assets/images/family-pic.jpeg';

export const Intro = ({ showMore, handleShowMore }) => {
	return (
		<div className=' flex flex-col items-center'>
			<div className='flex justify-around w-full p-16'>
				<section>
					<ScrollAnimation animateIn='fadeIn' delay={500}>
						<div>
							<img
								className='w-80 rounded'
								src={familyPic}
								alt='profile-picture'
							/>
						</div>
					</ScrollAnimation>
				</section>
				<div id='demo'></div>
				<section className='p-16 flex items-center flex-col w-3/5 h-64 rounded relative'>
					<h1 className='text-5xl pb-4'>Jared Vandeventer</h1>
					<p className='text-xl'>Full Stack Software Engineer</p>
					<a href='mailto:vanthedev@gmail.com' className='text-blue-300'>
						vanthedev@gmail.com
					</a>
					<p>720-470-7493</p>
					<p className='py-4'>
						I'm a passionate developer that loves the puzzle. I'm of the
						self-taught variety. That being said, I've enjoyed the tutilege of
						countless instructors and content creators on various platforms
						across the web during my intial entry into technology and to this
						day.
						<span
							className='pl-6 text-blue-300 cursor-pointer'
							onClick={handleShowMore}
						>
							{showMore ? 'see less...' : 'see more...'}
						</span>
					</p>
					<div
						className={`relative bg-white text-darkGray z-10 p-6 rounded transition-all duration-300 ease-in-out ${
							showMore ? 'opacity-1' : 'opacity-0'
						}`}
					>
						<p className='py-4'>
							I consider myself to be a generalist despite the majority of my
							professional experience being front-end focused. Within my ideal
							organization, I'd like my contributions to be across multiple
							axes, pushing code to both front-end and back-end repositories.
						</p>
						<p className='py-4'>
							I'm currently looking for my next challenge. Please reach out to
							me for full-time or contract opportunities. If you're a developer
							looking for help on an open source project, I'd love to help lift.
							Reach out to me for a virtual coffee (or in-person if you're
							located in or around Boulder, CO)!
						</p>
					</div>
				</section>
			</div>
		</div>
	);
};
