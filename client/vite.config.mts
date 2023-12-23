import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
	base: mode === 'production' ? '/my-expense' : '',
	appType: 'spa',
	plugins: [
		react({
			include: ['**/*.tsx', '**/*.ts'],
		}),
		splitVendorChunkPlugin(),
	],
}));
