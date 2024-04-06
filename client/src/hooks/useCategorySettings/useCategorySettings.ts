import { useCallback } from 'react';
import { ITransactionCategory } from './types';
import {
	useAddCategoryMutator,
	useDeleteCategoryByIdMutator,
	useFetchCategories,
	useUpdateCategoryByIdMutator,
} from '../../api/CategorySettingsApi';
import { useQueryClient } from '@tanstack/react-query';
import { ITransactionSource } from '../useSourceSettings/types';
import { QUERY_KEYS } from '../../constants/queryMapping';

export function useCategorySettings() {
	const queryClient = useQueryClient();
	const categoryResult = useFetchCategories();
	const addCategoryMutator = useAddCategoryMutator();
	const deleteCategoryMutator = useDeleteCategoryByIdMutator();
	const updateCategoryMutator = useUpdateCategoryByIdMutator();

	const sourceList = queryClient.getQueryData<Array<ITransactionSource>>(QUERY_KEYS.SOURCE_SETTINGS);

	const onSave = useCallback(
		async (matchers: Array<string>, name: string, chartColor: string, sourceId: string, budget: number) => {
			return addCategoryMutator.mutateAsync({
				name,
				matchers,
				chartColor,
				sourceId,
				budget,
			});
		},
		[addCategoryMutator],
	);

	const onDelete = useCallback(
		async (category: ITransactionCategory) => {
			return deleteCategoryMutator.mutateAsync(category.id);
		},
		[deleteCategoryMutator],
	);

	const onToggleStatus = useCallback(
		async (category: ITransactionCategory) => {
			return updateCategoryMutator.mutateAsync({
				id: category.id,
				payload: {
					isEnabled: !category.isEnabled,
				},
			});
		},
		[updateCategoryMutator],
	);

	const onUpdate = useCallback(
		async (id: string, matchers: Array<string>, name: string, chartColor: string, sourceId: string, budget: number) => {
			return updateCategoryMutator.mutateAsync({
				id,
				payload: {
					name,
					matchers,
					chartColor,
					sourceId,
					budget,
				},
			});
		},
		[updateCategoryMutator],
	);

	const onUpdateTransactions = useCallback(
		async (category: ITransactionCategory, matchers: Array<string>) => {
			return updateCategoryMutator.mutateAsync({
				id: category.id,
				payload: {
					matchers,
				},
			});
		},
		[updateCategoryMutator],
	);

	return {
		categories: categoryResult.data,
		sourceList,
		error: addCategoryMutator.error || updateCategoryMutator.error || deleteCategoryMutator.error,
		onSave,
		onDelete,
		onUpdate,
		onToggleStatus,
		onUpdateTransactions,
	};
}
