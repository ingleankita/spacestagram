import React, { useState } from 'react';
import Media from './Media';

const Card = ({ item }) => {
	const [like, setLike] = useState(false);

	const handleClick = () => {
		// set like or unlike
		setLike(!like);
		console.log(like);
	};

	return (
		<div className='card' style={{ width: '23rem' }}>
			<Media item={item} />
			<div className='card-body'>
				<h3 className='card-title'>{item.title}</h3>
				<p className='date'>{item.date}</p>
				<p className='card-text'>{item.explanation}</p>
				<a
					href='#'
					className={
						like ? 'btn btn-outline-dark btn-block' : 'btn btn-danger btn-block'
					}
					onClick={(e) => {
						e.preventDefault();
						handleClick();
					}}
				>
					{like ? 'Unlike' : 'Like'}
				</a>
			</div>
		</div>
	);
};

export default Card;
