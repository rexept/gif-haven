import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import makeApiCall from '../services/api';
import './SearchBar.css';

const SearchBar = ({ onSearchUpdate }) => {
	const [input, setInput] = useState('');
	const [gifs, setGifs] = useState([]);

	const handleInputChangeT = (value) => {
		setInput(value);
	};

	const handleInputChangeP = (value) => {
		setInput(value);
		makeApiCall(value, setGifs, 30);
	};

	useEffect(() => {
		onSearchUpdate(gifs);
	}, [gifs, onSearchUpdate]);

	useEffect(() => {
		if (input) {
			makeApiCall(input, setGifs, 8);
		}
	}, [input]);

	return (
		<div className='search-container'>
			<FaSearch id='search-icon' />
			<input
				placeholder='Search...'
				value={input}
				onChange={(e) => handleInputChangeT(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						handleInputChangeP(e.target.value);
					}
				}}
			/>
			<button className='search-button' onClick={() => handleInputChangeP(input)}>Search</button>
		</div>
	);
};

export default SearchBar;
