import React from 'react';
import Card from './Card';
import Spinner from './Spinner';

const Cards = ({ data, isLoading }) => {
	if (isLoading) {
		return <Spinner />;
	} else
		return (
			<div className='container cards-col'>
				<div className='row row-cols-1 row-cols-md-4 row-cols-lg-3 g-4'>
					{data.map((item) => {
						return <Card item={item} />;
					})}
				</div>
			</div>
		);
};

export default Cards;
