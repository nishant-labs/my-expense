import { TransactionGroup } from './components/TransactionGroup';
import { TransactionSource } from './components/TransactionSource';

export const settingsComponentMapping = [
	{
		eventKey: 'source',
		title: 'Source Settings',
		component: <TransactionSource />,
	},
	{
		eventKey: 'group',
		title: 'Group Settings',
		component: <TransactionGroup />,
	},
];
