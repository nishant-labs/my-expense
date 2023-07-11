import { atom } from 'recoil';
import { ITransactionSource } from './types';

export const transactionSourceState = atom<Array<ITransactionSource>>({
	key: 'transactionSource',
	default: [],
});
