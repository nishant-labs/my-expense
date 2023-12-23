import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
	base: mode === 'production' ? '/my-expense' : '',
	plugins: [
		react({
			include: ['**/*.tsx', '**/*.ts'],
		}),
		splitVendorChunkPlugin(),
	],
	appType: 'spa',
	build: {
		minify: false,
	},
}));
