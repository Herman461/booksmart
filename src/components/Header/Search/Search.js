import React from 'react';
import s from './Search.module.css'; 
// import { HiSearch } from 'react-icons/hi';

const Search = () => {
	return (
		<div className={s.search}>
			<div className={s.icon}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className={s.body}>
				<form className={s.form}></form>
			</div>
		</div>
	)
}

export default Search;