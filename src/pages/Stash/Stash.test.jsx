import { describe, test, expect, } from 'vitest';
import { render, screen } from '@testing-library/react';
import Stash from './index';
import { BrowserRouter } from 'react-router-dom';

describe('Stash', () => {
	test('renders', () => {
		render(
			<BrowserRouter>
				<Stash />
			</BrowserRouter>
		);
		expect(screen.getByTestId('StashedGifs-container')).toBeDefined();
		expect(screen.getByTestId('StashedGifs-exit-button')).toBeDefined();
	});
});
