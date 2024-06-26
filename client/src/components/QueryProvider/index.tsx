import { FC, ReactNode, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { appConfigQuery } from '../../state/config/selector';
import { createQueryClientInstance } from './QueryProviderService';
import { withAsyncDataLoader } from '../../hoc/withAsyncDataLoader';

interface QueryProviderProps {
	children: ReactNode;
}

const QueryProvider: FC<QueryProviderProps> = ({ children }) => {
	const [appConfig, setAppConfig] = useRecoilState(appConfigQuery);
	const [queryClientInstance, setQueryClientInstance] = useState<QueryClient>();

	useEffect(() => {
		if (appConfig.baseUrl) {
			setAppConfig(appConfig);
		}
	}, [appConfig, setAppConfig]);

	useEffect(() => {
		if (appConfig.baseUrl) {
			setQueryClientInstance(createQueryClientInstance(appConfig));
		}
	}, [appConfig]);

	if (!queryClientInstance) {
		return null;
	}

	return <QueryClientProvider client={queryClientInstance}>{children}</QueryClientProvider>;
};

export const QueryProviderWithLoader = withAsyncDataLoader(QueryProvider);
