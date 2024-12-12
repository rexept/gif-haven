import { describe, test, expect, vi, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StashedGifsButton } from './index';

describe('StashedGifsButton', () => {
	test('renders', () => {
		render(<StashedGifsButton />);
		expect(screen.getByTestId('StashedGifsButton-container')).toBeDefined();
		expect(screen.getByTestId('StashedGifsButton-button')).toBeDefined();
	});
});
