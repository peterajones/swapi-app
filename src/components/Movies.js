import React, { useState, useEffect } from 'react';

export default function Movies({ isSelected }) {
	const url = 'https://swapi.dev/api';
	const [movieUrl, setMovieUrl] = useState([]);
	const [movieTitles, setMovieTitles] = useState([]);
	const [lastTitle, setLastTitle] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const charName = isSelected.split(' ')[0];

	useEffect(() => {
		const fetchPeople = async () => {
			await fetch(`${url}/people/?search=${charName}`)
				.then(response => response.json())
				.then(data => setMovieUrl(data.results[0].films))
				.catch(err => console.log('Error:', err));
		};
		fetchPeople();
	}, [charName]);

	useEffect(() => {
		const moviesList = [];
		const fetchTitles = async () => {
			for (let i = 1; i <= movieUrl.length; i++) {
				setIsLoading(true);
				await fetch(`${url}/films/${i}/`)
					.then(response => response.json())
					// .then(res => console.log(res))
					.then(data =>
						moviesList.push({ title: data.title, date: data.release_date })
					)
					.catch(err => console.log('Error:', err));
			}
			setIsLoading(false);
			setMovieTitles(moviesList);

			if (
				moviesList !== [] ||
				moviesList !== undefined ||
				moviesList !== null
			) {
				moviesList &&
					setLastTitle(Object.values(moviesList[moviesList.length - 1]));
			}
		};
		fetchTitles();
	}, [movieUrl.length]);

	return (
		<div className='movies-section'>
			<h2>Movies</h2>
			{isLoading ? (
				<p className='loading'>Loading...</p>
			) : (
				<>
					<div className='movie-titles'>
						{movieTitles.map(title => (
							<p key={title.date}>{title.title}</p>
						))}
					</div>
					<div className='last-movie'>
						<h2>Name/Year last Movie</h2>
						<p>
							{lastTitle[0] && lastTitle[0]} -{' '}
							{lastTitle[1] && lastTitle[1].split('-')[0]}
						</p>
					</div>
				</>
			)}
		</div>
	);
}
