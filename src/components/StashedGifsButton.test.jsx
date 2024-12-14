import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StashedGifsButton } from './index';
import { BrowserRouter } from 'react-router-dom';

describe('StashedGifsButton', () => {
	test('renders', () => {
		render(
			<BrowserRouter>
				<StashedGifsButton />
			</BrowserRouter>
		);
		expect(screen.getByTestId('StashedGifsButton-container')).toBeDefined();
		expect(screen.getByTestId('StashedGifsButton-button')).toBeDefined();
	});
});
