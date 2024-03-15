import { selector } from 'recoil';
import { appConfigState } from './state';
import { AppConfig } from './types';

export const appConfigQuery = selector<AppConfig>({
	key: 'appConfigQuery',

	get: async () => {
		const response = await fetch('config.json');
		const config = await response.json();
		return config;
	},

	set: ({ set }, config) => {
		set(appConfigState, config);
	},
});
