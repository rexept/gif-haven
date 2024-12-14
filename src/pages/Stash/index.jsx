import { IoArrowBackSharp } from 'react-icons/io5';
import { GifList } from '../../components';
import { useGifStorage } from '../../hooks/useGifStorage';

const Stash = () => {
	const { gifs } = useGifStorage();

	return (
		<div data-testid='StashedGifs-container'>
			<IoArrowBackSharp data-testid='StashedGifs-exit-button' className='stash-back-arrow' />
			<GifList data-testid='StashedGifs-gifs-container' gifs={gifs} />
		</div>
	);
};

export default Stash; 
