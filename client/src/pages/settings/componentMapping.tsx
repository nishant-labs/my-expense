import { GroupSettings } from './GroupSettings';
import { SourceSettings } from './SourceSettings';

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
