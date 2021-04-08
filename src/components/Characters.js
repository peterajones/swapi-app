import React, { useState } from 'react';
import Movies from './Movies';

export default function Characters({ characters }) {
	const [selected, setSelected] = useState('');

	const handleCharacterChange = e => {
		const name = e.target.value;
		e.preventDefault();
		setSelected(name);
	};

	return (
		<section className='characters'>
			<h2>Characters</h2>
			<select className='characters' onChange={handleCharacterChange}>
				<option key='aaa' value='selected' selected>
					Select a Character
				</option>
				{characters.map(character => {
					return (
						<option key={character.url} value={character.name}>
							{character.name}
						</option>
					);
				})}
			</select>
			<Movies selected={selected} />
		</section>
	);
}
