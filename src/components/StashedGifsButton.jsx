import './StashedGifsButton.css';

const StashedGifsButton = () => {
	return (
		<div data-testid='StashedGifsButton-container' className='StashedGifsButton-container'>
			<button
				data-testid='StashedGifsButton-button'
				className='StashedGifsButton-button'
			>Stashed Gifs</button>
		</div>
	);
};

export default StashedGifsButton;
