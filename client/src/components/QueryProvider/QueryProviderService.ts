import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { AppConfig } from '../../state/config/types';

export const createQueryClientInstance = (appConfig: AppConfig) =>
	new QueryClient({
		defaultOptions: {
			queries: {
				meta: {
					baseUrl: appConfig.baseUrl,
				},
				queryFn: async ({ meta }) => {
					const { data } = await axios.get(`${appConfig.baseUrl}${meta?.endpoint}`);
					return data?.data;
				},
			},
		},
	});
