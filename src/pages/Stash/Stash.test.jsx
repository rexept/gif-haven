import { describe, test, expect, } from 'vitest';
import { render, screen } from '@testing-library/react';
import Stash from './index';

describe('Stash', () => {
	test('renders', () => {
		render(<StashedGifs />);
		expect(screen.getByTestId('StashedGifs-container')).toBeDefined();
		expect(screen.getByTestId('StashedGifs-exit-button')).toBeDefined();
		expect(screen.getByTestId('StashedGifs-gifs-container')).toBeDefined();
	});
});
