import { selector } from 'recoil';
import { fetchAllSources } from '../../../api/settings-api';
import { ApiError } from '../../../api/types';
import { ITransactionSource } from './types';

export const fetchSourcesSelector = selector<Array<ITransactionSource>>({
	key: 'fetchSourcesSelector',
	get: async () => {
		const response = await fetchAllSources();
		if ((response as ApiError).error) {
			return [];
		}
		return response as unknown as ITransactionSource[];
	},
});
