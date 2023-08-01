import React, { useState, useEffect } from 'react';

import { Nav } from './components/Nav';
import { Intro } from './components/Intro';
import { BlogsAndArticles } from './components/BlogsAndArticles';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

export const App = () => {
	const [showMore, setShowMore] = useState(false);
	const [date, setDate] = useState(0);
	const handleShowMore = () => {
		setShowMore((prev) => !prev);
	};

	useEffect(() => {
		setDate(new Date().toDateString());
	});

	return (
		<div className='text-creamy flex flex-col items-center bg-darkGray font-karla'>
			<Nav date={date} />
			<div className='mt-16'>
				<div className='  max-w-6xl h-full flex flex-col mt-16'>
					<Intro showMore={showMore} handleShowMore={handleShowMore} />
					<BlogsAndArticles />
					<Projects />
				</div>
			</div>
			<Footer />
		</div>
	);
};
