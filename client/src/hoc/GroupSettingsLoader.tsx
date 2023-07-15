import { memo, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { fetchAllGroups } from '../api/group-settings-api';
import { ApiError } from '../api/types';
import { ITransactionGroup } from '../state/settings/group/types';
import { transactionGroupState } from '../state/settings/group/state';

export const GroupSettingsLoader = memo(() => {
	const [{ fetchAgain, groupList }, setGroupState] = useRecoilState(
		transactionGroupState
	);
	useEffect(() => {
		fetchAllGroups().then((res) => {
			if (!(res as ApiError).error) {
				setGroupState({
					fetchAgain: false,
					groupList: res as ITransactionGroup[],
				});
			}
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (fetchAgain && groupList.length !== 0) {
			fetchAllGroups().then((res) => {
				if (!(res as ApiError).error) {
					setGroupState({
						fetchAgain: false,
						groupList: res as ITransactionGroup[],
					});
				}
			});
		}
	}, [fetchAgain, setGroupState, groupList.length]);

	return <></>;
});
