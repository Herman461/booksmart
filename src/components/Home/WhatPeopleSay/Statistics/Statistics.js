import React from 'react';
import s from './Statistics.module.css';
import { BiBookContent } from 'react-icons/bi';
import { BiUser } from 'react-icons/bi';
import { BiTrophy } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';

const Statistics = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.body}>
				<div className={s.item}>
					<BiBookContent className={s.icon} />
					<p className={s.count}>62 000+</p>
					<p className={s.caption}>Textbooks</p>
				</div>
				<div className={s.item}>
					<BsPeople className={s.icon} />
					<p className={s.count}>2460</p>
					<p className={s.caption}>Active Readers</p>
				</div>
				<div className={s.item}>
					<BiTrophy className={s.icon} />
					<p className={s.count}>1200</p>
					<p className={s.caption}>Awards</p>
				</div>
				<div className={s.item}>
					<BiUser className={s.icon} />
					<p className={s.count}>12 000</p>
					<p className={s.caption}>Authors</p>
				</div>
			</div>
		</div>
	);
}

export default Statistics;