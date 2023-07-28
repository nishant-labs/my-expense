import { selectorFamily } from 'recoil';
import { transactionState } from './state';
import { ISelectorPayload, ITransactions } from './types';

export const transactionByMonthSelector = selectorFamily<Array<ITransactions>, ISelectorPayload>({
	key: 'transactionByMonthSelector',
	get:
		({ year, month }) =>
		({ get }) => {
			const state = get(transactionState);
			return state[`${year}_${month}`] ?? [];
		},
	set:
		({ year, month }) =>
		({ set }, transactionList) => {
			set(transactionState, (currentState) => ({
				...currentState,
				[`${year}_${month}`]: transactionList as Array<ITransactions>,
			}));
		},
});
