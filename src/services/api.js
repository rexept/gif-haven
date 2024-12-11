import axios from 'axios';

const BASE_URL = 'https://api.giphy.com/v1/gifs/search';

export const searchGifs = async (query, limit = 10) => {
	const makeApiCall = () => {
	  axios.get(`${BASE_URL}?api_key=${import.meta.env.VITE_GIPHY_API_KEY}&q=${query}&limit=${limit}`)
	  .then(res => {
				console.log(res);
	  }).catch(err => {
				console.log(err);
	  });
	};
	makeApiCall();
};
