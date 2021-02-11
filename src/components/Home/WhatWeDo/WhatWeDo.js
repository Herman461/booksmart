import React from 'react';
import s from './WhatWeDo.module.css';
import WhatWeDoBlock from './WhatWeDoBlock/WhatWeDoBlock';
import { BiStar } from 'react-icons/bi';
import { BsArrowCounterclockwise, BsPencilSquare } from 'react-icons/bs';
import Title from '../../Title/Title';

const WhatWeDo = () => {
	return (
		<div className={s.whatWeDo}>
			<div className={s.body}>
				<div className="container">
					<div className={s.title}>
						<Title title="What We Do" />
					</div>
					<div className={s.row}>
						<WhatWeDoBlock title="Free Shipping" text="Booksmart offers free shipping worldwide, which makes it possible for you to rent a book from us even if you live far away from our head office. The shipping process is fast and secure." />
						<WhatWeDoBlock title="Easy Returns" text="You can always return a book after you’ve read it. Just use a unique link that can be found inside our every textbook. Then fill out a special form and send the book to one of our offices." />
						<WhatWeDoBlock title="Take Notes" text="Books rented on our website have a special section where you can take notes. However, we ask all our customers to limit your writing to a minimal amount if possible." />
						<WhatWeDoBlock title="Satisfaction Guaranteed" text="We hope that you will like our book rental service. Our team makes every effort to offer you an easy and enjoyable experience of renting books at any time of the year." />
						<WhatWeDoBlock title="Highlighting" text="Our customers are allowed to highlight the text in our books. It helps in using the full potential of our books without spoiling them. Unfortunately, writing in books is prohibited." />
						<WhatWeDoBlock title="Flexible Rental Periods" text="Booksmart uses a flexible rental policy to help our customers enjoy books from our catalog without almost any time limitations. You will receive a notice if your rental period is ending." />
						<WhatWeDoBlock title="Live Customer Support" text="If you need assistance with selecting or renting our books, feel free to contact our customer support or leave a message for us using the form on our website." />
						<WhatWeDoBlock title="Discount System" text="Regular clients of Booksmart have an advantage of reduced book rental prices and discounts on new books from our catalog, which is updated daily." />
					</div>
				</div>
			</div>
		</div>
	)
}

export default WhatWeDo;