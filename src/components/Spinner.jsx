import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
	return (
		<div className='centered'>
			<img
				src={spinner}
				alt='Loading...'
				style={{ width: '380px', margin: 'auto' }}
			></img>
		</div>
	);
};

export default Spinner;
