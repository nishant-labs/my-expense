import process from 'node:process';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint2';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
	base: mode === 'production' && process.env.TARGET === 'gh' ? '/my-expense' : '',
	appType: 'spa',
	plugins: [
		react({
			include: ['**/*.tsx', '**/*.ts'],
		}),
		eslint({ lintOnStart: true, include: ['client/src/**/*.tsx', 'client/src/**/*.ts'], cache: false }),
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
