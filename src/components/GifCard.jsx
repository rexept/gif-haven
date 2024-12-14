import { useState, useEffect } from 'react';
import { useGifStorage } from '../hooks/useGifStorage';
import './GifCard.css';
import PropTypes from 'prop-types';

const GifCard = ({ gif }) => {
	const { gifs, addGif, removeGif } = useGifStorage();

	const [isGifInStash, setIsGifInStash] = useState(false);

	useEffect(() => {
		const checkGifInStash = gifs.some(existingGif => existingGif.id === gif.id);
		setIsGifInStash(checkGifInStash);
	}, [gifs, gif.id]);

	const gifToggle = () => {
		if (isGifInStash) {
			removeGif(gif);
		} else {
			addGif(gif);
		}
	};

	return (
		<div data-testid='GifCard-container' className='card-container'>

			<a data-testid='GifCard-gif-link' href={gif.images.downsized.url}>
				<img data-testid='GifCard-gif' className='card-img' src={gif.images.downsized.url} alt={gif.alt_text || 'GIF'} />
			</a>
			<div data-testid='GifCard-description' className='card-description'>
				{ /* Titles are usually plagued by usernames so we need to trim it */}
				{gif.title != ' ' ? 'Title: ' + gif.title.split(/by\s+/i)[0].trim() : 'No Title'}
				<br />
				<br />
				{gif.username != '' ? 'Username: ' + gif.username : 'No Username'}
			</div>
			<div className='GifCard-btn-container'>
				{!isGifInStash &&
					<button data-testid='GifCard-stash' onClick={gifToggle} className='card-btn'>
						Stash 🗳️
					</button>
				}
				{isGifInStash &&
					<>
						<button data-testid='GifCard-stash-main-btn' className='card-stashed-main-btn'>
							Stashed ✔️
						</button>
						<button data-testid='GifCard-stash-trash-btn' onClick={gifToggle} className='card-stashed-trash-btn'>
							🗑️
						</button>
					</>
				}
			</div>
		</div>
	);
};

GifCard.propTypes = {
	gif: PropTypes.object,
	isHome: PropTypes.bool,
};

export default GifCard;
