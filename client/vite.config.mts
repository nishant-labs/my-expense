import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
	base: mode === 'production' && process.env.TARGET === 'gh' ? '/my-expense' : '',
	appType: 'spa',
	plugins: [
		react({
			include: ['**/*.tsx', '**/*.ts'],
		}),
		splitVendorChunkPlugin(),
	],
}));
