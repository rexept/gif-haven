import './Stash.css';

import { IoArrowBackSharp } from 'react-icons/io5';
import { GifList } from '../../components';
import { useGifStorage } from '../../hooks/useGifStorage';
import { NavLink } from 'react-router-dom';

const Stash = () => {
	const { gifs } = useGifStorage();

	return (
		<div data-testid='StashedGifs-container' className='stash-container'>
			<NavLink to='/'>
				<IoArrowBackSharp data-testid='StashedGifs-exit-button' className='stash-back-arrow' />
			</NavLink>
			<GifList data-testid='StashedGifs-gifs-container' gifs={gifs} />
		</div>
	);
};

export default Stash; 
