import type { MenuProps } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

export const TOP_MENUS: Array<MenuItem> = [
	{
		key: '/',
		label: 'Home',
	},
	{
		key: '/transactions',
		label: 'Transactions',
	},
	{
		key: '/summary',
		label: 'Year End Summary',
	},
	{
		key: 'settings',
		label: 'Settings',
		icon: <SettingOutlined />,
		children: [
			{
				key: '/settings/source',
				label: 'Source',
			},
			{
				key: '/settings/categories',
				label: 'Categories',
			},
		],
	},
];
