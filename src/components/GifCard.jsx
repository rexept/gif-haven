import './GifCard.css';
import PropTypes from 'prop-types';

const GifCard = ({ gif }) => {
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
			<a data-testid='GifCard-favorite' href='' className='card-btn'>
				Favorite ❤️
			</a>
		</div>
	);
};

GifCard.propTypes = {
	gif: PropTypes.object,
};

export default GifCard;
