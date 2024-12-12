import { useState } from 'react';
import { GifList, SearchBar, StashedGifsButton } from './components';

const App = () => {
	const [gifs, setGifs] = useState([]);

	const handleSearchUpdate = (newSearchObject) => {
		setGifs(newSearchObject);
	};
	return (
		<>
			<SearchBar onSearchUpdate={handleSearchUpdate} />
			<StashedGifsButton />
			<GifList gifs={gifs} />
		</>
	);
};

export default App;
