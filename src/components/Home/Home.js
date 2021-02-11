import React from 'react';
import s from './Home.module.css'; 
import Button from '../Button/Button';
import HomeAbout from './HomeAbout/HomeAbout';
import WhatWeDo from './WhatWeDo/WhatWeDo';
import HomeCatalog from './HomeCatalog/HomeCatalog';
import WhatPeopleSay from './WhatPeopleSay/WhatPeopleSay';

const Home = () => {
	return (
		<div className={s.home}>
			<div className={s.intro}>
				<div className="container">
					<div className={s.content}>
						<h1 className={s.title}>Welcome to Booksmart<br /><span>New & Used Books</span></h1>
						<div className={s.subtitle}>From applied literature to educational resources, we have a lot of textbooks to offer you. We provide only the best books for rent.</div>
						<Button text="View Catalog" />
					</div>
				</div>
			</div>
			<HomeAbout />
			<WhatWeDo />
			<HomeCatalog />
			<WhatPeopleSay />
		</div>
	)
}



export default Home;
