import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import makeApiCall from '../services/api';

const SearchBar = ({ onSearchUpdate }) => {
	const [input, setInput] = useState('');
	const [gifs, setGifs] = useState([]);

	const handleInputChange = (value) => {
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
				onChange={(e) => handleInputChange(e.target.value)}
			/>
		</div>
	);
};

export default SearchBar;
