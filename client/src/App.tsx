import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { AppRouter } from './router';
import { withAsyncDataLoader } from './hoc/withAsyncDataLoader';
import { ENDPOINTS, QUERY_KEYS } from './constants/queryMapping';

export function MyExpenseApp() {
	const queryClient = useQueryClient();

	useEffect(() => {
		void queryClient.prefetchQuery({
			queryKey: QUERY_KEYS.SOURCE_SETTINGS,
			meta: {
				endpoint: ENDPOINTS.SOURCE_SETTINGS,
			},
		});

		void queryClient.prefetchQuery({
			queryKey: QUERY_KEYS.CATEGORY_SETTINGS,
			meta: {
				endpoint: ENDPOINTS.CATEGORY_SETTINGS,
			},
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <AppRouter />;
}

export const MyExpenseAppWithLoader = withAsyncDataLoader(MyExpenseApp);
