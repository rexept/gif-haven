import { useState, useEffect } from 'react';

export const useGifStorage = () => {
	const key = 'gifs';
	const [gifs, setGifs] = useState([]);

	useEffect(() => {
		const storedGifs = localStorage.getItem(key);
		if (storedGifs) {
			setGifs(JSON.parse(storedGifs));
		}
	}, []);

	const getGifs = () => {
		const gifs = localStorage.getItem(key);
		return gifs ? JSON.parse(gifs) : [];
	};

	const addGif = (newGif) => {
		const gifs = localStorage.getItem(key);
		const parsedGifs = gifs ? JSON.parse(gifs) : [];
		const compiledGifs = [...parsedGifs, newGif];
		setGifs(compiledGifs);
		localStorage.setItem(key, JSON.stringify(compiledGifs));
	};

	const removeGif = (gifToRemove) => {
		const gifs = getGifs();
		const compiledGifs = gifs.filter(gif => gif !== gifToRemove);
		setGifs(compiledGifs);
		localStorage.setItem(key, JSON.stringify(compiledGifs));
	};

	return { gifs, getGifs, addGif, removeGif };
};