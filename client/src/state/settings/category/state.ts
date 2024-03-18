import { atom } from 'recoil';
import { ITransactionCategoryState } from './types';

export const transactionCategoryState = atom<ITransactionCategoryState>({
	key: 'transactionCategory',
	default: {
		categories: [],
		fetchAgain: false,
	},
});
