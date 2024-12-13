import { IoArrowBackSharp } from 'react-icons/io5';
import { GifList } from '../../components';

const Stash = () => {
	return (
		<div data-testid='StashedGifs-container'>
			<IoArrowBackSharp data-testid='StashedGifs-exit-button' className='stash-back-arrow' />
		</div>
	);
};

export default Stash; 
