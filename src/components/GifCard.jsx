import './GifCard.css';
import PropTypes from 'prop-types';

const GifCard = ({ gif }) => {
	return (
		<div className='card-container'>

			<a href={gif.images.downsized.url}>
				<img className='card-img' src={gif.images.downsized.url} alt={gif.alt_text || 'GIF'} />
			</a>
			<div className='card-description'>
				{gif.title != ' ' ? 'Title: ' + gif.title : 'No Title'}
				<br />
				{gif.username != '' ? 'Username: ' + gif.username : 'No Username'}
			</div>
			<a href='' className='card-btn'>
				Favorite ❤️
			</a>
		</div>
	);
};

GifCard.propTypes = {
	gif: PropTypes.object,
};

export default GifCard;
