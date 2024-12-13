import { useState } from 'react';
import './App.css';
import { GifList, SearchBar, StashedGifsButton } from './components';

const App = () => {
	const [gifs, setGifs] = useState([]);

	const handleSearchUpdate = (newSearchObject) => {
		setGifs(newSearchObject);
	};
	return (
		<div className='app-container'>
			<div className='header'>
				<SearchBar onSearchUpdate={handleSearchUpdate} />
				<StashedGifsButton />
			</div>
			<GifList gifs={gifs} />
		</div>
	);
};

export default App;
