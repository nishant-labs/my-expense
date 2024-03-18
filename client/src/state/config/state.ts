import { atom } from 'recoil';
import { AppConfig } from './types';

export const appConfigState = atom<AppConfig>({
	key: 'appConfig',
	default: {
		baseUrl: '',
	},
});
