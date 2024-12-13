import { describe, test, expect, vi, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import StashedGifs from './index';

describe('StashedGifsPage', () => {
	test('renders', () => {
		render(<StashedGifs />);
		expect(screen.getByTestId('StashedGifs-container')).toBeDefined();
		expect(screen.getByTestId('StashedGifs-exit-button')).toBeDefined();
		expect(screen.getByTestId('StashedGifs-gifs-container')).toBeDefined();
		expect(screen.getByTestId('StashedGifs-gif-card')).toBeDefined();
	});
});
