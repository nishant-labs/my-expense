import { selector } from 'recoil';
import { transactionGroupState } from './state';

export const toggleGroupFetchAgainFlag = selector<boolean>({
	key: 'toggleGroupFetchAgainFlag',
	get: ({ get }) => get(transactionGroupState).fetchAgain,
	set: ({ set }, fetchAgain) => {
		set(transactionGroupState, (currentState) => ({
			...currentState,
			fetchAgain: fetchAgain as boolean,
		}));
	},
});

export const selectGroups = selector({
	key: 'selectGroups',
	get: ({ get }) => get(transactionGroupState).groupList,
});
