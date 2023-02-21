import React, { useState, useEffect } from 'react';

import familyPic from './assets/images/family-pic.jpg';
import linkedinIcon from './assets/images/linkedin-icon.png';
import githubIcon from './assets/images/github-icon.png';
import twitterIcon from './assets/images/twitter-icon.png';
import mediumIcon from './assets/images/medium-icon.png';

export const App = () => {
	const [showMore, setShowMore] = useState(false);
	const handleShowMore = () => {
		setShowMore((prev) => !prev);
	};
	const [date, setDate] = useState(0);

	useEffect(() => {
		setDate(new Date().toDateString());
	});

	return (
		<div className='text-creamy flex flex-col items-center bg-darkGray font-karla'>
			<nav className='fixed h-16 w-full px-8 bg-black flex items-center z-20'>
				<ul className='flex justify-between w-full'>
					<li>{date}</li>
					<li>
						<a href='https://docs.google.com/document/d/1UkIC87_q2uZsL_A9wAvEo_x0sN3aoxzlhkyDz7RrdHg/edit?usp=sharing'>
							resume
						</a>
					</li>
				</ul>
			</nav>
			<div className='mt-16'>
				<div className='  max-w-6xl h-full flex flex-col mt-16'>
					<div className=' flex flex-col items-center'>
						<div className='flex justify-around w-full p-16'>
							<section>
								<div>
									<img
										className='w-80 rounded'
										src={familyPic}
										alt='profile-picture'
									/>
								</div>
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
									self-taught variety. That being said, I've enjoyed the
									tutilege of countless instructors and content creators on
									various platforms across the web during my intial entry into
									technology and to this day.
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
										I consider myself to be a generalist despite the majority of
										my professional experience being front-end focused. Within
										my ideal organization, I'd like my contributions to be
										across multiple axes, pushing code to both front-end and
										back-end repositories.
									</p>
									<p className='py-4'>
										I'm currently looking for my next challenge. Please reach
										out to me for full-time or contract opportunities. If you're
										a developer looking for help on an open source project, I'd
										love to help lift. Reach out to me for a virtual coffee (or
										in-person if you're located in or around Boulder, CO)!
									</p>
								</div>
							</section>
						</div>
					</div>
					<section className='flex flex-col items-center my-12'>
						<div className='my-8'>
							<h1 className='text-4xl'>Blogs and Articles</h1>
						</div>
						<div>
							<ul className='flex flex-col items-center'>
								<li className='flex items-center text-xl text-blue-200 pb-4'>
									<span className='pr-4'>
										<img className='w-10' src={mediumIcon} alt='icon8.com' />
									</span>
									<a href='https://medium.com/@vanthedev/landing-my-first-job-as-a-self-taught-developer-3b6a3655c9c'>
										Landing My First Job as a Self-Taught Developer
									</a>
								</li>
								<li className='flex items-center text-xl text-blue-200 pb-4'>
									<span className='pr-4'>
										<img className='w-10' src={mediumIcon} alt='icon8.com' />
									</span>
									<a href='https://medium.com/@vanthedev/how-to-pre-populate-inputs-when-editing-forms-in-react-2530d6069ab3'>
										How to pre-populate inputs when editing forms in React
									</a>
								</li>
							</ul>
						</div>
					</section>
					<section className='p-8 flex flex-col items-center'>
						<div>
							<h1 className='text-4xl'>Projects</h1>
						</div>
						<ul className='p-4 lg:p-16 flex flex-col items-center'>
							<li className=' bg-orange rounded w-full xl:w-3/4 p-8 shadow-lg mb-8 bg-gradient-to-r from-orange to-fadedOrange'>
								<div>
									<p className='text-3xl text-blue-200'>Address Book</p>
								</div>
								<p className='py-2'>
									<span className='text-blue-200'>Tech stack:</span>{' '}
									React/Python and SQLite
								</p>
								<p className='py-2'>
									This is a fully functional address book that lets you add
									contact information plus addresses and save them to an SQLite
									data store. I'm using AWS S3 buckets to store profile images.
								</p>
								<a
									href='https://github.com/jvandy83/address-book.git'
									className='py-2 cursor-pointer'
								>
									<span className='text-blue-200'>Source code:</span>{' '}
									https://github.com/jvandy83/address-book.git
								</a>
								<div className='flex justify-center pt-4'>
									<a href='http://addressbookapp.info'>
										<button className='border p-2 rounded hover:bg-darkPurple hover:text-orange hover:border-transparent hover:-translate-y-px active:translate-y-px'>
											Have a look
										</button>
									</a>
								</div>
							</li>
							<li className=' bg-orange rounded w-full xl:w-3/4 p-8 shadow-lg bg-gradient-to-l from-orange to-fadedOrange'>
								<div>
									<p className='text-3xl text-blue-200'>Custom Color Picker</p>
								</div>
								<p className='py-2'>
									<span className='text-blue-200'>Tech stack:</span> React
								</p>
								<p className='py-2'>
									This is a color picker I built from scratch and use all the
									time in the wild. It's purely front end and uses local storage
									to save color palettes. I built this a couple years ago with
									class components and have slowly refactored it with modern
									functional components and hooks.
								</p>
								<a
									href='https://github.com/jvandy83/custom-color-app'
									className='py-2 cursor-pointer'
								>
									<span className='text-blue-200'>Source code:</span>{' '}
									https://github.com/jvandy83/custom-color-app.git
								</a>
								<div className='flex justify-center pt-4'>
									<a
										href='https://jvandy83.github.io/custom-color-app/#/'
										className='border p-2 rounded hover:bg-darkPurple hover:text-orange hover:border-transparent hover:-translate-y-px active:translate-y-px'
									>
										Have a look
									</a>
								</div>
							</li>
							<li className=' bg-orange rounded w-full xl:w-3/4 p-8 mt-8 shadow-lg bg-gradient-to-r from-orange to-fadedOrange'>
								<div>
									<p className='text-3xl text-blue-200'>Weather App</p>
								</div>
								<p className='py-2'>
									<span className='text-blue-200'>Tech stack:</span>{' '}
									React/TailwindCSS
								</p>
								<p className='py-2'>
									I recently built this weather app as a take-home project. I'm
									using the Google geo-location api to get latitude/longitude
									before querying the openweather api. A particularly
									challenging aspect of this application was storing recently
									queried locations in local storage. Finding and updated arrays
									or arrays of objects is always tedious with local storage.
								</p>
								<p className='py-2'>
									I may persist this information is PostgreSQL or MongoDB in the
									future. I spent a lot of time building helper functions to
									convert values or render symbols like the directional arrow
									for wind. It's pretty simple but there is a lot of logic
									packed into this unassuming application.
								</p>
								<a
									href='https://weather-app.co'
									className='py-2 cursor-pointer'
								>
									<span className='text-blue-200'>Source code:</span>{' '}
									https://github.com/jvandy83/weather-app.git
								</a>
								<div className='flex justify-center pt-4'>
									<a
										href='https://weather-app.co'
										className='border p-2 rounded hover:bg-darkPurple hover:text-orange hover:border-transparent hover:-translate-y-px active:translate-y-px'
									>
										Have a look
									</a>
								</div>
							</li>
						</ul>
					</section>
				</div>
			</div>
			<footer>
				<ul className='bg-black flex justify-around w-screen items-center h-24'>
					<li className='w-16'>
						<a href='https://linkedin.com/in/vanthedev'>
							<img src={linkedinIcon} alt='icon8.com' />
						</a>
					</li>
					<li className='w-20'>
						<a href='https://github.com/jvandy83'>
							<img src={githubIcon} alt='icon8.com' />
						</a>
					</li>
					<li className='w-12'>
						<a href='https://twitter.com/vanthedev'>
							<img src={twitterIcon} alt='icon8.com' />
						</a>
					</li>
				</ul>
			</footer>
		</div>
	);
};
