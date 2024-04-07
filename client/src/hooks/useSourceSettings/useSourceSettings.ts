import { useCallback } from 'react';
import { ITransactionSource } from './types';
import {
	useDeleteSourceByIdMutator,
	useAddSourceMutator,
	useUpdateSourceByIdMutator,
	useFetchSources,
} from '../../api/SourceSettingsApi';

export function useSourceSettings() {
	const sourceResult = useFetchSources();
	const addSourceMutator = useAddSourceMutator();
	const deleteSourceMutator = useDeleteSourceByIdMutator();
	const updateSourceMutator = useUpdateSourceByIdMutator();

	const onSave = useCallback(
		async (name: string, chartColor: string, isExpense: boolean) => {
			return addSourceMutator.mutateAsync({ name, chartColor, isExpense });
		},
		[addSourceMutator],
	);

	const onUpdate = useCallback(
		async (id: string, name: string, chartColor: string, isExpense: boolean) => {
			return updateSourceMutator.mutateAsync({
				id,
				payload: {
					name,
					chartColor,
					isExpense,
				},
			});
		},
		[updateSourceMutator],
	);

	const onDelete = useCallback(
		async (source: ITransactionSource) => {
			return deleteSourceMutator.mutateAsync(source.id);
		},
		[deleteSourceMutator],
	);

	const onToggleStatus = useCallback(
		async (source: ITransactionSource) => {
			return updateSourceMutator.mutateAsync({
				id: source.id,
				payload: {
					isEnabled: !source.isEnabled,
				},
			});
		},
		[updateSourceMutator],
	);

	return {
		sourceList: sourceResult.data,
		error: addSourceMutator.error || updateSourceMutator.error || deleteSourceMutator.error,
		onSave,
		onUpdate,
		onDelete,
		onToggleStatus,
	};
}
