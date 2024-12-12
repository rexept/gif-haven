import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		include: ['**/*.test.jsx', '**/*.test.js'],
		setupFiles: './setupTests.js', // Optional: To configure Jest-like matchers from jest-dom
	},
});
