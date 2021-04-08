import React, { useState, useEffect } from 'react';
import Characters from './Characters';

export default function App() {
	const url = 'https://swapi.dev/api';
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		const fetchCharacters = async () => {
			await fetch(`${url}/people/`)
				.then(response => response.json())
				.then(data => setCharacters(data.results))
				.catch(err => console.log('Error:', err));
		};
		fetchCharacters();
	}, []);

	return (
		<div className='App'>
			<h1>SWAPI App</h1>
			<Characters characters={characters} />
		</div>
	);
}
