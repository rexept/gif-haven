import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { GifList } from './components';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const BASE_URL = 'https://api.giphy.com/v1/gifs/search';


const App = () => {
	const [gifs, setGifs] = useState([]);

	const makeApiCall = (query, limit = 10) => {
		axios.get(`${BASE_URL}?api_key=${API_KEY}&q=${query}&limit=${limit}&rating=g&lang=en`)
			.then(res => {
				console.log(res);
				setGifs(res.data.data);
			}).catch(err => {
				console.log(err);
			});
	};

	useEffect(() => {
		makeApiCall('arch linux', 4);
	}, []);

	return (
		<>
			<GifList gifs={gifs} />
		</>
	);
};

export default App;
