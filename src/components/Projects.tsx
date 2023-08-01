import React from 'react';

import ScrollAnimation from 'react-animate-on-scroll';

export const Projects = () => {
	return (
		<section className='p-8 flex flex-col items-center'>
			<div>
				<h1 className='text-4xl'>Projects</h1>
			</div>
			<ul className='p-4 lg:p-16 flex flex-col items-center'>
				<ScrollAnimation
					animateIn='fadeIn'
					className=' bg-orange rounded w-full xl:w-3/4 p-8 shadow-lg mb-8 bg-gradient-to-r from-orange to-fadedOrange'
				>
					<div>
						<p className='text-3xl text-blue-200'>Address Book</p>
					</div>
					<p className='py-2'>
						<span className='text-blue-200'>Tech stack:</span> React/Python and
						SQLite
					</p>
					<p className='py-2'>
						This is a fully functional address book that lets you add contact
						information plus addresses and save them to an SQLite data store.
						I'm using AWS S3 buckets to store profile images.
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
				</ScrollAnimation>
				<ScrollAnimation
					animateIn='fadeIn'
					className=' bg-orange rounded w-full xl:w-3/4 p-8 shadow-lg bg-gradient-to-l from-orange to-fadedOrange'
				>
					<div>
						<p className='text-3xl text-blue-200'>Custom Color Picker</p>
					</div>
					<p className='py-2'>
						<span className='text-blue-200'>Tech stack:</span> React
					</p>
					<p className='py-2'>
						This is a color picker I built from scratch and use all the time in
						the wild. It's purely front end and uses local storage to save color
						palettes. I built this a couple years ago with class components and
						have slowly refactored it with modern functional components and
						hooks.
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
				</ScrollAnimation>
				<ScrollAnimation
					animateIn='fadeIn'
					className=' bg-orange rounded w-full xl:w-3/4 p-8 mt-8 shadow-lg bg-gradient-to-r from-orange to-fadedOrange'
				>
					<div>
						<p className='text-3xl text-blue-200'>Weather App</p>
					</div>
					<p className='py-2'>
						<span className='text-blue-200'>Tech stack:</span> React/TailwindCSS
					</p>
					<p className='py-2'>
						I recently built this weather app as a take-home project. I'm using
						the Google geo-location api to get latitude/longitude before
						querying the openweather api. A particularly challenging aspect of
						this application was storing recently queried locations in local
						storage. Finding and updating arrays or arrays of objects is always
						tedious with local storage.
					</p>
					<p className='py-2'>
						I may persist this information in PostgreSQL or MongoDB in the
						future. I spent a lot of time building helper functions to convert
						values or render symbols like the directional arrow for wind. It's
						pretty simple but there is a lot of logic packed into this
						unassuming application.
					</p>
					<a href='https://weather-app.co' className='py-2 cursor-pointer'>
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
				</ScrollAnimation>
			</ul>
		</section>
	);
};
