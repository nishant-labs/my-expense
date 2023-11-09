import { GroupSettings } from './components/GroupSettings';
import { SourceSettings } from './components/SourceSettings';

export const settingsComponentMapping = [
	{
		eventKey: 'source',
		title: 'Source Settings',
		component: <SourceSettings />,
	},
	{
		eventKey: 'group',
		title: 'Group Settings',
		component: <GroupSettings />,
	},
];
