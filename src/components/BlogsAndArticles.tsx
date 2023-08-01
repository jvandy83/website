import React from 'react';

import ScrollAnimation from 'react-animate-on-scroll';

import mediumIcon from '../assets/images/medium-icon.png';

export const BlogsAndArticles = () => {
	return (
		<section className='flex flex-col items-center my-12 py-24 bg-black'>
			<div className='my-8'>
				<h1 className='text-4xl'>Blogs and Articles</h1>
			</div>
			<div>
				<ul className='flex flex-col items-center'>
					<ScrollAnimation
						animateIn='fadeIn'
						className='flex items-center text-xl text-blue-200 pb-4'
					>
						<span className='pr-4'>
							<img className='w-10' src={mediumIcon} alt='icon8.com' />
						</span>
						<a href='https://medium.com/@vanthedev/landing-my-first-job-as-a-self-taught-developer-3b6a3655c9c'>
							Landing My First Job as a Self-Taught Developer
						</a>
					</ScrollAnimation>
					<ScrollAnimation
						animateIn='fadeIn'
						className='flex items-center text-xl text-blue-200 pb-4'
					>
						<span className='pr-4'>
							<img className='w-10' src={mediumIcon} alt='icon8.com' />
						</span>
						<a href='https://medium.com/@vanthedev/how-to-pre-populate-inputs-when-editing-forms-in-react-2530d6069ab3'>
							How to pre-populate inputs when editing forms in React
						</a>
					</ScrollAnimation>
				</ul>
			</div>
		</section>
	);
};
