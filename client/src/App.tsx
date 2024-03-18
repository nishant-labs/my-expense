import { useRecoilState } from 'recoil';
import { AppRouter } from './router.tsx';
import { SourceSettingsLoader, CategorySettingsLoader } from './components/ApiLoaders';
import { withAsyncDataLoader } from './hoc/withAsyncDataLoader/index.tsx';
import { appConfigQuery } from './state/config/selector.ts';
import { useEffect } from 'react';

export function MyExpenseApp() {
	const [appConfig, setAppConfig] = useRecoilState(appConfigQuery);
	useEffect(() => {
		if (appConfig.baseUrl && !window.EXPENSE_API_HOST) {
			setAppConfig(appConfig);
			window.EXPENSE_API_HOST = appConfig.baseUrl;
		}
	}, [appConfig, setAppConfig]);

	return (
		<>
			<AppRouter />
			<SourceSettingsLoader />
			<CategorySettingsLoader />
		</>
	);
}

export const MyExpenseAppWithLoader = withAsyncDataLoader(MyExpenseApp);
