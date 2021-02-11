import React from 'react';
import s from './HomeCatalog.module.css';
import Title from '../../Title/Title';
import Button from '../../Button/Button';
import Card from './Card/Card';

const HomeCatalog = () => {
	return (
		<div className={s.homeCatalog}>
			<div className="container">
				<div className={s.body}>
					<div className={s.title}>
						<Title title="Our Catalog" />
					</div>
					<div className={s.categories}>
{/*						<button className={s.button}>All Categories</button>
						<button className={s.button}>Business & Economics</button>
						<button className={s.button}>Web Design</button>
						<button className={s.button}>Marketing</button>*/}
					</div>
					<div className={s.row}>
						<Card name="Immutable Laws of Marketing" price="$27.00" src="https://livedemo00.template-help.com/wt_prod-21758/images/book-01-188x246.jpg" />
						<Card name="The Art of Leadership" price="$25.00" src="https://livedemo00.template-help.com/wt_prod-21758/images/book-02-188x246.jpg" />
						<Card name="The Basics of Web Design" price="$21.00" src="https://livedemo00.template-help.com/wt_prod-21758/images/book-03-188x246.jpg" />
						<Card name="Grid Systems in Web Design" price="$29.00" src="https://livedemo00.template-help.com/wt_prod-21758/images/book-04-188x246.jpg" />
						<Card name="Tools That Reveal Why Your  Users Abandon Your Website" price="$25.00" src="https://livedemo00.template-help.com/wt_prod-21758/images/book-05-188x246.jpg" />
						<Card name="Dangerous Side Effects  of Bad Customer Service" price="$21.00" src="https://livedemo00.template-help.com/wt_prod-21758/images/book-06-188x246.jpg" />
						<Card name="Intro Guide to UX Reviews  for Web Designers" price="$29.00" src="https://livedemo00.template-help.com/wt_prod-21758/images/book-07-188x246.jpg" />
						<Card name="How to Create a Web Design  Style Guide" price="$29.00" src="https://livedemo00.template-help.com/wt_prod-21758/images/book-08-188x246.jpg" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomeCatalog;