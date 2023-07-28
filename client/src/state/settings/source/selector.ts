import { selector } from 'recoil';
import { transactionSourceState } from './state';

export const toggleSourceFetchAgainFlag = selector<boolean>({
	key: 'toggleSourceFetchAgainFlag',
	get: ({ get }) => get(transactionSourceState).fetchAgain,
	set: ({ set }, fetchAgain) => {
		set(transactionSourceState, (currentState) => ({
			...currentState,
			fetchAgain: fetchAgain as boolean,
		}));
	},
});

export const selectSources = selector({
	key: 'selectSources',
	get: ({ get }) => get(transactionSourceState).sourceList,
});
