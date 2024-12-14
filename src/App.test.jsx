import { describe, test, expect, vi, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StashedGifsButton, SearchBar, GifList } from './components';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
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
		render(
			<BrowserRouter>
				<StashedGifsButton />
			</BrowserRouter>
		);
		render(
			<BrowserRouter>
				<GifList gifs={mockGifList} />
			</BrowserRouter>
		);

		expect(screen.getByTestId('SearchBar-container')).toBeDefined();
		expect(screen.getByTestId('StashedGifsButton-container')).toBeDefined();
		expect(screen.getByTestId('GifList-container')).toBeDefined();
	});
});
