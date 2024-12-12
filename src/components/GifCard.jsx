import './GifCard.css';
import PropTypes from 'prop-types';

const GifCard = ({ gif }) => {
	return (
		<div className='container'>
			<img className='card' src={gif.images.downsized.url} alt={gif.alt_text || 'GIF'} />
			<div className="text">
			</div>
		</div>
	);
};

GifCard.propTypes = {
	gif: PropTypes.object,
};

export default GifCard;
