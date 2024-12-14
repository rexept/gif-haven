import { describe, test, expect, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import { GifList } from './index';

describe('GifList', () => {
	let mockGif;
	let mockGifList;

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
		mockGifList = [mockGif, mockGif, mockGif];
	});

	test('renders', () => {
	  render(<GifList gifs={mockGifList} />);
	  expect(screen.getByTestId('GifList-container')).toBeDefined();
	});
});
