import React from 'react';
import s from './Slider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const Slider = () => {

	const slides = [];

	for (let i = 0; i < 3; i++) {
		slides.push(
			<SwiperSlide key={`slide-${i}`}>
				<div className={s.slide}>
					<div className={s.top}>
						<img className={s.ava}
						src={`https://livedemo00.template-help.com/wt_prod-21758/images/quote-user-${i+1}-70x70.jpg`}
						alt={`Slide ${i}`} />
						<div className={s.info}>
							<p className={s.name}>Jane Smith</p>
							<p className={s.client}>Regular Client</p>
						</div>
					</div>
					<p className={s.text}>The books I rent here always arrive on time, which is of primary importance to me as I like to read a lot. I am especially interested in books about business and science and you have a diverse collection of them. Thank you for your service!</p>
				</div>
			</SwiperSlide>
		);
	}
	return (
		<div className={s.slider}>
			<div className={s.wrapper}>
				<Swiper>
					{slides}
				</Swiper>
			</div>
		</div>
	)
}

export default Slider;