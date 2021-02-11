import React from 'react';
import s from './Card.module.css';
import Button from '../../../Button/Button';

const Card = (props) => {
	return (
		<div className={s.card}>
			<div className={s.body}>
				<div className={s.img}>
					<img src={props.src} alt="" />
				</div>
				<div className={s.name}>{props.name}</div>
				<div className={s.price}>{props.price}</div>
				<div className={s.button}>
					<Button text="Add to Cart" />
				</div>
			</div>
		</div>
	)
}

export default Card;