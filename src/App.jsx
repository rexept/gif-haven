import { useState } from 'react';
import { Hamburger, GifList, SearchBar } from './components';

const App = () => {
	const [gifs, setGifs] = useState([]);

	const handleSearchUpdate = (newSearchObject) => {
		setGifs(newSearchObject);
	};
	return (
		<>
			<Hamburger />
			<SearchBar onSearchUpdate={handleSearchUpdate} />
			<GifList gifs={gifs} />
		</>
	);
};

export default App;
