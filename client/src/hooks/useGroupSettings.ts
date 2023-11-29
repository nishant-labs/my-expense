import { useCallback, useState } from 'react';
import { ApiError } from '../api/types';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ITransactionGroup } from '../state/settings/group/types';
import { selectSources } from '../state/settings/source/selector';
import { selectGroups, toggleGroupFetchAgainFlag } from '../state/settings/group/selector';
import { deleteGroupById, insertNewGroup, updateGroupById } from '../api/GroupSettingsApi';

export function useGroupSettings() {
	const triggerToggle = useSetRecoilState(toggleGroupFetchAgainFlag);
	const groupList = useRecoilValue(selectGroups);
	const sourceList = useRecoilValue(selectSources);
	const [error, setError] = useState('');

	const onSave = useCallback(
		async (matchers: Array<string>, name: string, chartColor: string, sourceId: string, budget: number) => {
			setError('');
			const response = await insertNewGroup({
				name,
				matchers,
				chartColor,
				sourceId,
				budget,
			});

			if ((response as ApiError).error) {
				setError('Failed to create new group');
			} else {
				triggerToggle(true);
			}

			return response;
		},
		[triggerToggle],
	);

	const onDelete = useCallback(
		async (group: ITransactionGroup) => {
			setError('');
			const response = await deleteGroupById(group.id);
			if ((response as ApiError).error) {
				setError(`Failed to delete group with id ${group.id}`);
			} else {
				triggerToggle(true);
			}
			return response;
		},
		[triggerToggle],
	);

	const onToggleStatus = useCallback(
		async (group: ITransactionGroup) => {
			setError('');
			const response = await updateGroupById(group.id, {
				isEnabled: !group.isEnabled,
			});

			if ((response as ApiError).error) {
				setError(`Failed to toggle status for ${group.name}`);
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
			const response = await updateGroupById(id, {
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
		async (group: ITransactionGroup, matchers: Array<string>) => {
			setError('');

			const response = await updateGroupById(group.id, { matchers });

			if ((response as ApiError).error) {
				setError(`Failed to update transaction for ${group.name}`);
			} else {
				triggerToggle(true);
			}

			return response;
		},
		[triggerToggle],
	);

	return {
		groupList,
		sourceList,
		error,
		onSave,
		onDelete,
		onUpdate,
		onToggleStatus,
		onUpdateTransactions,
	};
}
