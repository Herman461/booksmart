import React from 'react';
import s from './Button.module.css';
import { NavLink } from 'react-router-dom';
const Button = (props) => {
	return (
		<div className="button">
			<NavLink to="#" className={s.link}>{props.text}</NavLink>
		</div>
	)
}

export default Button;