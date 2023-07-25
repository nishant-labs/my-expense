import { atom } from 'recoil';
import { ITransactionsState } from './types';

export const transactionState = atom<ITransactionsState>({
	key: 'transactions',
	default: {},
});
