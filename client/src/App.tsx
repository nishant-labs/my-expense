import { AppRouter } from './router.tsx';
import { SourceSettingsLoader, GroupSettingsLoader } from './components/ApiLoaders';

export function MyExpenseApp() {
	return (
		<>
			<AppRouter />
			<SourceSettingsLoader />
			<GroupSettingsLoader />
		</>
	);
}
