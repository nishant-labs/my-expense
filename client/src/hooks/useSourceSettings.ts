import { useCallback, useState } from 'react';
import { ApiError } from '../api/types';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ITransactionSource } from '../state/settings/source/types';
import { selectSources, toggleSourceFetchAgainFlag } from '../state/settings/source/selector';
import { deleteSourceById, insertNewSource, updateSourceById } from '../api/SourceSettingsApi';

export function useSourceSettings() {
	const triggerToggle = useSetRecoilState(toggleSourceFetchAgainFlag);
	const sourceList = useRecoilValue(selectSources);
	const [error, setError] = useState('');

	const onSave = useCallback(
		async (name: string, chartColor: string, isExpense: boolean) => {
			setError('');
			const response = await insertNewSource({ name, chartColor, isExpense });

			if ((response as ApiError).error) {
				setError('Failed to create new source');
			} else {
				triggerToggle(true);
			}

			return response;
		},
		[triggerToggle],
	);

	const onUpdate = useCallback(
		async (id: string, name: string, chartColor: string, isExpense: boolean) => {
			setError('');

			const response = await updateSourceById(id, {
				name,
				chartColor,
				isExpense,
			});

			if ((response as ApiError).error) {
				setError(`Failed to update source ${name}`);
			} else {
				triggerToggle(true);
			}
			return response;
		},
		[triggerToggle],
	);

	const onDelete = useCallback(
		async (source: ITransactionSource) => {
			setError('');
			const response = await deleteSourceById(source.id);

			if ((response as ApiError).error) {
				setError(`Failed to delete source with id ${source.id}`);
			} else {
				triggerToggle(true);
			}

			return response;
		},
		[triggerToggle],
	);

	const onToggleStatus = useCallback(
		async (source: ITransactionSource) => {
			const response = await updateSourceById(source.id, {
				isEnabled: !source.isEnabled,
			});

			if ((response as ApiError).error) {
				setError(`Failed to update source ${source.name}`);
			} else {
				triggerToggle(true);
			}

			return response;
		},
		[triggerToggle],
	);

	return {
		sourceList,
		error,
		onSave,
		onUpdate,
		onDelete,
		onToggleStatus,
	};
}
