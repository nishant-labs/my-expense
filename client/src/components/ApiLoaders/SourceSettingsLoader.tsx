import { memo, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { fetchAllSources } from '../../api/SourceSettingsApi';
import { ApiError } from '../../api/types';
import { ITransactionSource } from '../../state/settings/source/types';
import { transactionSourceState } from '../../state/settings/source/state';

export const SourceSettingsLoader = memo(() => {
	const [{ fetchAgain }, setSourceState] = useRecoilState(transactionSourceState);
	useEffect(() => {
		fetchAllSources().then((res) => {
			if (!(res as ApiError).error) {
				setSourceState({
					fetchAgain: false,
					sourceList: res as ITransactionSource[],
				});
			}
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (fetchAgain) {
			fetchAllSources().then((res) => {
				if (!(res as ApiError).error) {
					setSourceState({
						fetchAgain: false,
						sourceList: res as ITransactionSource[],
					});
				}
			});
		}
	}, [fetchAgain, setSourceState]);

	return <></>;
});
