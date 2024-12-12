import { useState } from 'react';
import { GifList, SearchBar } from './components';

const App = () => {
	const [gifs, setGifs] = useState([]);

	const handleSearchUpdate = (newSearchObject) => {
		setGifs(newSearchObject);
	};
	return (
		<>
			<SearchBar onSearchUpdate={handleSearchUpdate} />
			<GifList gifs={gifs} />
		</>
	);
};

export default App;
