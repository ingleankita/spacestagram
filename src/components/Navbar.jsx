import React from 'react';

const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
			<div className='container-fluid'>
				<a className='navbar-brand' href='#'>
					<h1>Spacestagram</h1>
				</a>
				<p className='brought-by'>
					Brought to you by NASA's Astronomy Photo of the Day (APOD) API
				</p>
			</div>
		</nav>
	);
};

export default Navbar;
