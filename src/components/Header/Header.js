import React from 'react';
import s from './Header.module.css'; 
import Search from './Search/Search';
import { NavLink } from 'react-router-dom';
import Checkout from '../Checkout/Checkout';
import ProductPage from '../ProductPage/ProductPage';
import ShopThreeColumnsPage from '../ShopThreeColumnsPage/ShopThreeColumnsPage';
import ShopFourColumnsPage from '../ShopFourColumnsPage/ShopFourColumnsPage';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import { useState } from 'react';

const DropdownLink = (props) => {
	return (
		<li><NavLink to={props.path} className={s.dropdownLink}>{props.name}</NavLink></li>
	)
}

const Header = () => {

	const [activeClass, setActiveClass] = useState(false);

	function handleActiveClass() {
		setActiveClass(!activeClass);
	}
	return (
		<header className={s.header}>
			<div className="container">
				<div className={s.body}>
					<div className={s.logo}>
						<img src="https://livedemo00.template-help.com/wt_prod-21758/images/logo-default-161x57.png" alt="" />
					</div>
					<nav className={s.menu}>
						<div className={activeClass ? s.icon + " " + s.active : s.icon} onClick={handleActiveClass}>
							<span></span>
							<span></span>
							<span></span>
						</div>
						<ul className={activeClass ? s.list + " " + s.active : s.list}>
							<li><NavLink to="/home" className={s.link}>Home</NavLink></li>
							<li><NavLink to="/about" className={s.link}>About</NavLink></li>
							<li><NavLink to="" className={s.link}>Catalog</NavLink>
								<ul className={s.dropdown + " " + s.open}>
									<DropdownLink path="/checkout" name="Checkout" />
									<DropdownLink path="/product-page" name="Product Page" />
									<DropdownLink path="/shop-3-columns-page" name="Shop 3 Columns Layout" />
									<DropdownLink path="/shop-4-columns-page" name="Shop 4 Columns Layout" />
									<DropdownLink path="/shopping-cart" name="Shopping Cart" />
								</ul>
							</li>
							<li><NavLink to="/contacts" className={s.link}>Contacts</NavLink></li>
						</ul>
					</nav>
					<Search />
				</div>
			</div>
		</header>
	);
}

export default Header;