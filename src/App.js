import './App.css';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import Footer from './Footer';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios
			.get(
				'https://api.nasa.gov/planetary/apod?api_key=cfgS2rNLxj45HIqpi0UKpfHz1GpCJ0jtAXw9peBX&count=66'
			)
			.then((res) => {
				console.log(res);
				setData(res.data);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className='App'>
			<Navbar />
			<Cards data={data} isLoading={isLoading} />
			<Footer />
		</div>
	);
}

export default App;
