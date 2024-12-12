import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import makeApiCall from '../services/api';
import './SearchBar.css';

const SearchBar = ({ onSearchUpdate }) => {
	const [input, setInput] = useState('');
	const [gifs, setGifs] = useState([]);

	const handleInputChangeT = (value) => {
		setInput(value);
		makeApiCall(value, setGifs, 8);
		onSearchUpdate(gifs);
	};

	const handleInputChangeP = (value) => {
		setInput(value);
		makeApiCall(value, setGifs, 30);
		onSearchUpdate(gifs);
	};

	return (
		<div className='container'>
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
		</div>
	);
};

export default SearchBar;
