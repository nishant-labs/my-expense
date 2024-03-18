import { memo, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { fetchAllCategories } from '../../api/CategorySettingsApi';
import { ApiError } from '../../api/types';
import { ITransactionCategory } from '../../state/settings/category/types';
import { transactionCategoryState } from '../../state/settings/category/state';

export const CategorySettingsLoader = memo(() => {
	const [{ fetchAgain }, setCategoryState] = useRecoilState(transactionCategoryState);
	useEffect(() => {
		fetchAllCategories().then((res) => {
			if (!(res as ApiError).error) {
				setCategoryState({
					fetchAgain: false,
					categories: res as ITransactionCategory[],
				});
			}
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (fetchAgain) {
			fetchAllCategories().then((res) => {
				if (!(res as ApiError).error) {
					setCategoryState({
						fetchAgain: false,
						categories: res as ITransactionCategory[],
					});
				}
			});
		}
	}, [fetchAgain, setCategoryState]);

	return <></>;
});
