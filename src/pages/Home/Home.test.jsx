import { describe, test, expect, vi, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StashedGifsButton, SearchBar, GifList } from '../../components';

describe('Home', () => {
	let mockFn;

	let mockGif;
	let mockGifList;

	beforeAll(() => {
		mockFn = vi.fn();

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
		mockGifList = [mockGif, mockGif, mockGif];
	});

	test('renders', () => {
		render(<SearchBar onSearchUpdate={mockFn} />);
		render(<StashedGifsButton />);
		render(<GifList gifs={mockGifList} />);

		expect(screen.getByTestId('SearchBar-container')).toBeDefined();
		expect(screen.getByTestId('StashedGifsButton-container')).toBeDefined();
		expect(screen.getByTestId('GifList-container')).toBeDefined();
	});
});
