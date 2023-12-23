import { AppRouter } from './router.tsx';
import { SourceSettingsLoader } from './hoc/SourceSettingsLoader';
import { GroupSettingsLoader } from './hoc/GroupSettingsLoader.tsx';

export function MyExpenseApp() {
	return (
		<>
			<AppRouter />
			<SourceSettingsLoader />
			<GroupSettingsLoader />
		</>
	);
}
