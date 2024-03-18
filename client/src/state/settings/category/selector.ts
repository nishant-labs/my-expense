import { selector } from 'recoil';
import { transactionCategoryState } from './state';

export const toggleCategoryFetchAgainFlag = selector<boolean>({
	key: 'toggleCategoryFetchAgainFlag',
	get: ({ get }) => get(transactionCategoryState).fetchAgain,
	set: ({ set }, fetchAgain) => {
		set(transactionCategoryState, (currentState) => ({
			...currentState,
			fetchAgain: fetchAgain as boolean,
		}));
	},
});

export const selectCategories = selector({
	key: 'selectCategories',
	get: ({ get }) => get(transactionCategoryState).categories,
});
