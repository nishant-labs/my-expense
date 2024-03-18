import { useCallback, useState } from 'react';
import { ApiError } from '../api/types';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ITransactionCategory } from '../state/settings/category/types';
import { selectSources } from '../state/settings/source/selector';
import { selectCategories, toggleCategoryFetchAgainFlag } from '../state/settings/category/selector';
import { deleteCategoryById, insertNewCategory, updateCategoryById } from '../api/CategorySettingsApi';

export function useCategorySettings() {
	const triggerToggle = useSetRecoilState(toggleCategoryFetchAgainFlag);
	const categories = useRecoilValue(selectCategories);
	const sourceList = useRecoilValue(selectSources);
	const [error, setError] = useState('');

	const onSave = useCallback(
		async (matchers: Array<string>, name: string, chartColor: string, sourceId: string, budget: number) => {
			setError('');
			const response = await insertNewCategory({
				name,
				matchers,
				chartColor,
				sourceId,
				budget,
			});

			if ((response as ApiError).error) {
				setError('Failed to create new category');
			} else {
				triggerToggle(true);
			}

			return response;
		},
		[triggerToggle],
	);

	const onDelete = useCallback(
		async (category: ITransactionCategory) => {
			setError('');
			const response = await deleteCategoryById(category.id);
			if ((response as ApiError).error) {
				setError(`Failed to delete category with id ${category.id}`);
			} else {
				triggerToggle(true);
			}
			return response;
		},
		[triggerToggle],
	);

	const onToggleStatus = useCallback(
		async (category: ITransactionCategory) => {
			setError('');
			const response = await updateCategoryById(category.id, {
				isEnabled: !category.isEnabled,
			});

			if ((response as ApiError).error) {
				setError(`Failed to toggle status for ${category.name}`);
			} else {
				triggerToggle(true);
			}

			return response;
		},
		[triggerToggle],
	);

	const onUpdate = useCallback(
		async (id: string, matchers: Array<string>, name: string, chartColor: string, sourceId: string, budget: number) => {
			setError('');
			const response = await updateCategoryById(id, {
				name,
				matchers,
				chartColor,
				sourceId,
				budget,
			});

			if ((response as ApiError).error) {
				setError(`Failed to update for ${name}`);
			} else {
				triggerToggle(true);
			}

			return response;
		},
		[triggerToggle],
	);

	const onUpdateTransactions = useCallback(
		async (category: ITransactionCategory, matchers: Array<string>) => {
			setError('');

			const response = await updateCategoryById(category.id, { matchers });

			if ((response as ApiError).error) {
				setError(`Failed to update transaction for ${category.name}`);
			} else {
				triggerToggle(true);
			}

			return response;
		},
		[triggerToggle],
	);

	return {
		categories,
		sourceList,
		error,
		onSave,
		onDelete,
		onUpdate,
		onToggleStatus,
		onUpdateTransactions,
	};
}
