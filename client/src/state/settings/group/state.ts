import { atom } from 'recoil';
import { ITransactionGroupState } from './types';

export const transactionGroupState = atom<ITransactionGroupState>({
	key: 'transactionGroup',
	default: {
		groupList: [],
		fetchAgain: false,
	},
});
