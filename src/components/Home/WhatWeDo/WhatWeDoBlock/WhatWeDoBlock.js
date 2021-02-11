import React from 'react';
import s from './WhatWeDoBlock.module.css';

const WhatWeDoBlock = (props) => {
	return (
		<div className={s.whatWeDoBlock}>
			<h4 className={s.title}>{props.title}</h4>
			<p className={s.text}>{props.text}</p>
		</div>
	)
}

export default WhatWeDoBlock;