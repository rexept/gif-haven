import { describe, test, expect, vi, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import { GifCard } from './index';

describe('GifCard', () => {
	let mockGif;

	beforeAll(() => {
		mockGif = {
			images: {
				downsized: {
					url: 'google.com'
				}
			},
			title: 'Kings',
			username: '123',
			alt_text: 'Gif',
		};
	});

	test('renders', () => {
		render(<GifCard gif={mockGif} />);
		expect(screen.getByTestId('GifCard-container')).toBeDefined();
		expect(screen.getByTestId('GifCard-gif-link')).toBeDefined();
		expect(screen.getByTestId('GifCard-gif')).toBeDefined();
		expect(screen.getByTestId('GifCard-description')).toBeDefined();
		expect(screen.getByTestId('GifCard-favorite')).toBeDefined();
	});
});
