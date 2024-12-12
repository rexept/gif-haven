import './GifList.css';
import { GifCard } from './index';
import PropTypes from 'prop-types';

const GifList = ({ gifs }) => {
	return (
		<div className='gif-list-container'>
			{gifs ? gifs.map((gif, i) => {
				return <GifCard
					key={i}
					gif={gif} />;
			}) : null}
		</div>
	);
};

GifList.proptypes = {
	gifs: PropTypes.object
};


export default GifList;
