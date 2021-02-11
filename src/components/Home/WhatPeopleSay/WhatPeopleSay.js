import React from 'react';
import s from './WhatPeopleSay.module.css';
// import './Slider.css';
import Title from '../../Title/Title';
import Slider from './Slider/Slider';

import Statistics from './Statistics/Statistics';

const WhatPeopleSay = () => {
	return (
		<div className={s.wrapper}>
			<div className="container">
				<div className={s.body}>
					<div className={s.slider}>
						<Title title="What People Say" />
						<Slider />
					</div>
					<div className={s.statistics}>
						<Statistics />
					</div>
				</div>
			</div>
		</div>
	)
}

							// <SwiperSlide>
							// 	<div className={s.slide}>
							// 		<div className={s.top}>
							// 			<img className={s.ava} src="https://livedemo00.template-help.com/wt_prod-21758/images/quote-user-2-70x70.jpg" alt="" />
							// 			<div className={s.info}>
							// 				<p className={s.name}>Jane Smith</p>
							// 				<p className={s.client}>Regular Client</p>
							// 			</div>
							// 		</div>
							// 		<p className={s.text}>The books I rent here always arrive on time, which is of primary importance to me as I like to read a lot. I am especially interested in books about business and science and you have a diverse collection of them. Thank you for your service!</p>
							// 	</div>
							// </SwiperSlide>
							// <SwiperSlide>
							// 	<div className={s.slide}>
							// 		<div className={s.top}>
							// 			<img className={s.ava} src="https://livedemo00.template-help.com/wt_prod-21758/images/quote-user-2-70x70.jpg" alt="" />
							// 			<div className={s.info}>
							// 				<p className={s.name}>Jane Smith</p>
							// 				<p className={s.client}>Regular Client</p>
							// 			</div>
							// 		</div>
							// 		<p className={s.text}>The books I rent here always arrive on time, which is of primary importance to me as I like to read a lot. I am especially interested in books about business and science and you have a diverse collection of them. Thank you for your service!</p>
							// 	</div>
							// </SwiperSlide>
							// <SwiperSlide>
							// 	<div className={s.slide}>
							// 		<div className={s.top}>
							// 			<img className={s.ava} src="https://livedemo00.template-help.com/wt_prod-21758/images/quote-user-2-70x70.jpg" alt="" />
							// 			<div className={s.info}>
							// 				<p className={s.name}>Jane Smith</p>
							// 				<p className={s.client}>Regular Client</p>
							// 			</div>
							// 		</div>
							// 		<p className={s.text}>The books I rent here always arrive on time, which is of primary importance to me as I like to read a lot. I am especially interested in books about business and science and you have a diverse collection of them. Thank you for your service!</p>
							// 	</div>
							// </SwiperSlide>

export default WhatPeopleSay;