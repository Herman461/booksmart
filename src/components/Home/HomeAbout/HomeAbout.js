import React from 'react';
import s from './HomeAbout.module.css';
import Title from '../../Title/Title';
import Button from '../../Button/Button';

const HomeAbout = () => {
	return (
		<div className={s.homeAbout}>
			<div className="container">
					<div className={s.body}>
						<div className={s.column}>
							{/*<span className={s.label}>About us</span>*/}
							<Title title="A Few Words About Us" />
							<h2 className={s.subtitle}>Booksmart provides a variety of books for rent or purchase throughout the USA. We work with publishers directly to give you the widest choice of books.</h2>
							<p className={s.text}>Since our establishment in 1999, we help our clients save on books they choose to rent. As we partner with dozens of book providers, you always get the best prices without spending the time to find the best place to rent your favorite novels or college textbooks. Moreover, they are all available for online booking in just a few mouse clicks.</p>
							<Button text="Learn More" />
						</div>
							<div className={s.column}>
								<img className={s.background} src="https://livedemo00.template-help.com/wt_prod-21758/images/about-718x628.jpg" alt="" />
							</div>
					</div>
			</div>
		</div>
	)
}

export default HomeAbout;