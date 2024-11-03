import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
	base: mode === 'production' && process.env.TARGET === 'gh' ? '/my-expense' : '',
	appType: 'spa',
	plugins: [
		react({
			include: ['**/*.tsx', '**/*.ts'],
		}),
	],
	build: {
		rollupOptions: {
			output: {
				manualChunks: (id: string) => {
					if (id.includes('node_modules')) {
						return 'vendor';
					}
				},
			},
		},
	},
}));
