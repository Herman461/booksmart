import React from 'react';
import s from './Footer.module.css'; 
import { NavLink } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';

const Footer = () => {


	return (
		<footer className={s.footer}>
			<div className="container">
				<div className={s.body}>
					<div className={s.row}>
						<div className={s.column}>
							<div className={s.about}>
								<h4 className={s.title}>About us</h4>
								<p className={s.text}>Booksmart is the worldwide textbook rental service created by readers for readers. We operate since 1999 and we offer lots of new and used textbooks on various topics including web design, development, business, and more.</p> 
							</div>
						</div>
						<div className={s.column}>
							<div className={s.links}>
								<h4 className={s.title}>Quick links</h4>
								<nav className={s.nav}>
									<ul className={s.list}>
										<li><FaAngleRight className={s.icon} /><NavLink className={s.link} to="/about">About</NavLink></li>
										<li><FaAngleRight className={s.icon} /><NavLink className={s.link} to="/services">Services</NavLink></li>
										<li><FaAngleRight className={s.icon} /><NavLink className={s.link} to="/shop">Shop</NavLink></li>
										<li><FaAngleRight className={s.icon} /><NavLink className={s.link} to="/blog">Blog</NavLink></li>
										<li><FaAngleRight className={s.icon} /><NavLink className={s.link} to="/portfolio">Portfolio</NavLink></li>
										<li><FaAngleRight className={s.icon} /><NavLink className={s.link} to="/contacts">Contacts</NavLink></li>
									</ul>
								</nav>
							</div>
						</div>
						<div className={s.column}>
							<div className={s.gallery}>
								<h4 className={s.title}>Gallery</h4>
								<div className={s.cards}>
									<div className={s.card}>
										<FaPlus class={s.plus} />
										<img src="https://livedemo00.template-help.com/wt_prod-21758/images/footer-gallery-1-1200x800-original.jpg" alt="" />
									</div>
									<div className={s.card}>
										<FaPlus class={s.plus} />
										<img src="https://livedemo00.template-help.com/wt_prod-21758/images/footer-gallery-2-1200x800-original.jpg" alt="" />
									</div>
									<div className={s.card}>
										<FaPlus class={s.plus} />
										<img src="https://livedemo00.template-help.com/wt_prod-21758/images/footer-gallery-3-1200x800-original.jpg" alt="" />
									</div>
									<div className={s.card}>
										<FaPlus class={s.plus} />
										<img src="https://livedemo00.template-help.com/wt_prod-21758/images/footer-gallery-4-1200x800-original.jpg" alt="" />
									</div>
									<div className={s.card}>
										<FaPlus class={s.plus} />
										<img src="https://livedemo00.template-help.com/wt_prod-21758/images/footer-gallery-5-1200x800-original.jpg" alt="" />
									</div>
									<div className={s.card}>
										<FaPlus class={s.plus} />
										<img src="https://livedemo00.template-help.com/wt_prod-21758/images/footer-gallery-6-1200x800-original.jpg" alt="" />
									</div>
									<div className={s.card}>
										<FaPlus class={s.plus} />
										<img src="https://livedemo00.template-help.com/wt_prod-21758/images/footer-gallery-7-1200x800-original.jpg" alt="" />
									</div>
									<div className={s.card}>
										<FaPlus class={s.plus} />
										<img src="https://livedemo00.template-help.com/wt_prod-21758/images/footer-gallery-8-1200x800-original.jpg" alt="" />
									</div>
								</div>
							</div>
						</div>
						<div className={s.column}>
							<div className={s.newsletter}>
							<h4 className={s.title}>Newsletter</h4>
								<p className={s.text}>Keep up with our always upcoming news, updates, and publications. Enter your e-mail and subscribe to our newsletter.</p>
								<form action="" className={s.form}>
									<input className={s.input} type="text" placeholder="Enter your e-mail" />
									<button className={s.button}>Subscribe</button>
								</form>
							</div>
						</div>
					</div>
					<p className={s.copyright}>© 2021. All Rights Reserved. Privacy Policy</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;