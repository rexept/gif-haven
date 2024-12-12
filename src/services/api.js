import axios from 'axios';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const BASE_URL = 'https://api.giphy.com/v1/gifs/search';

const makeApiCall = (query, setGifsCallback, limit = 10) => {
	axios.get(`${BASE_URL}?api_key=${API_KEY}&q=${query}&limit=${limit}&rating=g&lang=en`)
		.then(res => {
			console.log(res);
			setGifsCallback(res.data.data);
		}).catch(err => {
			console.log(err);
		});
};

export default makeApiCall;
