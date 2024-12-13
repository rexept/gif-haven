import { useState } from 'react';
import './Home.css';
import { GifList, SearchBar, StashedGifsButton } from '../../components';

const Home = () => {
	const [gifs, setGifs] = useState([]);

	const handleSearchUpdate = (newSearchObject) => {
		setGifs(newSearchObject);
	};

	return (
		<div className='home-container'>
			<div className='header'>
				<SearchBar onSearchUpdate={handleSearchUpdate} />
				<StashedGifsButton />
			</div>
			<GifList gifs={gifs} />
		</div>
	);
};

export default Home;
