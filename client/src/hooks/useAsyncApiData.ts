import { useCallback, useEffect, useState } from 'react';
import { ApiError, ApiResponse } from '../api/types';

interface IAsyncApiData<T> {
	data: T | null;
	loading: boolean;
	error: string | null;
}

export function useAsyncApiData<T>(
	apiCaller: () => Promise<ApiResponse<T>>,
	onDemandOnly = false
): [IAsyncApiData<T>, () => Promise<void>] {
	const [apiState, setApiState] = useState<IAsyncApiData<T>>({
		data: null,
		loading: false,
		error: null,
	});

	const fetchAgain = useCallback(async () => {
		setApiState((prevState) => ({ ...prevState, loading: true }));
		const response = await apiCaller();

		if ((response as unknown as ApiError)?.error) {
			setApiState((prevState) => ({
				...prevState,
				loading: false,
				error: (response as unknown as ApiError).error,
			}));
		} else {
			setApiState((prevState) => ({
				...prevState,
				loading: false,
				data: response as T,
			}));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (!onDemandOnly) {
			fetchAgain();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return [apiState, fetchAgain];
}
