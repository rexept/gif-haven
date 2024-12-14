import React from 'react';

import './StashedGifsButton.css';
import { NavLink } from 'react-router-dom';

const StashedGifsButton = () => {
	return (
		<div data-testid='StashedGifsButton-container' className='StashedGifsButton-container'>
			<NavLink
				data-testid='StashedGifsButton-button'
				className='StashedGifsButton-button'
				to='/stash'
			>Stashed Gifs 📦</NavLink>
		</div>
	);
};

export default React.memo(StashedGifsButton);
