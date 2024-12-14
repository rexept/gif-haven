import { useState, useEffect } from 'react';

export const useGifStorage = () => {
	const key = 'gifs';
	const [gifs, setGifs] = useState([]);

	useEffect(() => {
		const storedGifs = localStorage.getItem(key);
		if (storedGifs) {
			setGifs(JSON.parse(storedGifs));
		}
	}, [gifs]);

	const getGifs = () => {
		const gifs = localStorage.getItem(key);
		return gifs ? JSON.parse(gifs) : [];
	};

	const addGif = (newGif) => {
		const gifs = localStorage.getItem(key);
		const parsedGifs = gifs ? JSON.parse(gifs) : [];
		if (!parsedGifs.some(gif => gif.id === newGif.id)) {
			const compiledGifs = [...parsedGifs, newGif];
			setGifs(compiledGifs);
			localStorage.setItem(key, JSON.stringify(compiledGifs));
		}
	};

	const removeGif = (gifToRemove) => {
		const gifs = localStorage.getItem(key);
		const parsedGifs = gifs ? JSON.parse(gifs) : [];
		const compiledGifs = parsedGifs.filter(gif => gif.id !== gifToRemove.id);
		setGifs(compiledGifs);
		localStorage.setItem(key, JSON.stringify(compiledGifs));
	};

	return { gifs, getGifs, addGif, removeGif };
};
