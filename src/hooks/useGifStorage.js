import { useState, useEffect } from 'react';

export const useGifStorage = () => {
	const key = 'gifs';
	const [gifs, setGifs] = useState([]);

	useEffect(() => {
		try {
			const storedGifs = localStorage.getItem(key);
			if (storedGifs) {
				setGifs(JSON.parse(storedGifs));
			}
		} catch (e) {
			console.error('Error retrieving gifs from localStorage: ', e);
			setGifs([]);
		}
	}, []);

	const getGifs = () => {
		try {
			const gifs = localStorage.getItem(key);
			return gifs ? JSON.parse(gifs) : [];
		} catch (e) {
			console.error('Unable to retrieve gifs: ', e);
			return [];
		}
	};

	const addGif = (newGif) => {
		try {
			const gifs = localStorage.getItem(key);
			const parsedGifs = gifs ? JSON.parse(gifs) : [];
			if (!parsedGifs.some(gif => gif.id === newGif.id)) {
				const compiledGifs = [...parsedGifs, newGif];
				setGifs(compiledGifs);
				localStorage.setItem(key, JSON.stringify(compiledGifs));
			}
		} catch (e) {
			console.error('Error adding gif to localStorage: ', e);
		}
	};

	const removeGif = (gifToRemove) => {
		try {
			const gifs = localStorage.getItem(key);
			const parsedGifs = gifs ? JSON.parse(gifs) : [];
			const compiledGifs = parsedGifs.filter(gif => gif.id !== gifToRemove.id);
			setGifs(compiledGifs);
			localStorage.setItem(key, JSON.stringify(compiledGifs));
		} catch (e) {
			console.error('Error removing gif from localStorage: ', e);
		}
	};

	return { gifs, getGifs, addGif, removeGif };
};
