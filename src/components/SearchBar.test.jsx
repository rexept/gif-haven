import { describe, test, expect, vi, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SearchBar } from './index';

describe('SearchBar', () => {
	let mockFn;

	beforeAll(() => {
		mockFn = vi.fn();
	});

	test('renders', () => {
		render(<SearchBar onSearchUpdate={mockFn} />);
		expect(screen.getByTestId('SearchBar-container')).toBeDefined();
		expect(screen.getByTestId('SearchBar-icon')).toBeDefined();
		expect(screen.getByTestId('SearchBar-input')).toBeDefined();
		expect(screen.getByTestId('SearchBar-button')).toBeDefined();
	});
});
