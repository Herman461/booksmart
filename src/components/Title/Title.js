import React from 'react';
import s from './Title.module.css';

const Title = (props) => {
	return (
			<div className={s.content}>
				<h3 className={s.title}>{props.title}</h3>
			</div>
	)
}

export default Title;