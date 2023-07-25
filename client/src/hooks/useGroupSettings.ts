import { useCallback, useState } from 'react';
import { ApiError } from '../api/types';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ITransactionGroup } from '../state/settings/group/types';
import { selectSources } from '../state/settings/source/selector';
import {
	selectGroups,
	toggleGroupFetchAgainFlag,
} from '../state/settings/group/selector';
import {
	deleteGroupById,
	insertNewGroup,
	updateGroupById,
} from '../api/GroupSettingsApi';

export function useGroupSettings() {
	const triggerToggle = useSetRecoilState(toggleGroupFetchAgainFlag);
	const groupList = useRecoilValue(selectGroups);
	const sourceList = useRecoilValue(selectSources);
	const [error, setError] = useState('');

	const onSave = useCallback(
		async (
			matchers: Array<string>,
			name: string,
			chartColor: string,
			sourceId: string,
			budget: number
		) => {
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
		[triggerToggle]
	);

	const onDelete = useCallback(
		(group: ITransactionGroup) => {
			setError('');
			deleteGroupById(group.id).then((response) => {
				if ((response as ApiError).error) {
					setError(`Failed to delete group with id ${group.id}`);
				} else {
					triggerToggle(true);
				}
			});
		},
		[triggerToggle]
	);

	const onToggleStatus = useCallback(
		(group: ITransactionGroup) => {
			updateGroupById(group.id, {
				isEnabled: !group.isEnabled,
			}).then((response) => {
				if ((response as ApiError).error) {
					setError(`Failed to toggle status for ${group.name}`);
				} else {
					triggerToggle(true);
				}
			});
		},
		[triggerToggle]
	);

	const onUpdateTransactions = useCallback(
		(group: ITransactionGroup, matchers: Array<string>) => {
			updateGroupById(group.id, { matchers }).then((response) => {
				if ((response as ApiError).error) {
					setError(`Failed to update transaction for ${group.name}`);
				} else {
					triggerToggle(true);
				}
			});
		},
		[triggerToggle]
	);

	return {
		groupList,
		sourceList,
		error,
		onSave,
		onDelete,
		onToggleStatus,
		onUpdateTransactions
	};
}
