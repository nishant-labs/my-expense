export const ENDPOINTS = {
	TRANSACTIONS: '/api/transactions/',
	SOURCE_SETTINGS: '/api/settings/sources',
	CATEGORY_SETTINGS: '/api/settings/categories',
} as const;

export const QUERY_KEYS = {
	TRANSACTIONS: ['transactions'],
	SOURCE_SETTINGS: ['settings', 'sources'],
	CATEGORY_SETTINGS: ['settings', 'categories'],
} as const;
