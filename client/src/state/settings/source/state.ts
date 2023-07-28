import { atom } from 'recoil';
import { ITransactionSourceState } from './types';

export const transactionSourceState = atom<ITransactionSourceState>({
	key: 'transactionSource',
	default: {
		sourceList: [],
		fetchAgain: false,
	},
});
