import { UseMutationResult, UseQueryResult, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { handleDeleteCall, handlePostCall, handlePutCall } from './ApiBase';
import {
	ISourceSettingUpdateMutator,
	ITransactionSource,
	ITransactionSourcePayload,
} from '../hooks/useSourceSettings/types';
import { ApiError } from './types';
import { ENDPOINTS, QUERY_KEYS } from '../constants/queryMapping';

export const useFetchSources = (): UseQueryResult<Array<ITransactionSource>, ApiError> => {
	return useQuery({
		queryKey: QUERY_KEYS.SOURCE_SETTINGS,
		meta: {
			endpoint: ENDPOINTS.SOURCE_SETTINGS,
		},
	});
};

export const useAddSourceMutator = (): UseMutationResult<string, ApiError, ITransactionSourcePayload> => {
	const queryClient = useQueryClient();

	const baseUrl = queryClient.getDefaultOptions().queries?.meta?.baseUrl;
	return useMutation({
		mutationFn: (payload: ITransactionSourcePayload) =>
			handlePostCall<string>(`${baseUrl}${ENDPOINTS.SOURCE_SETTINGS}`, payload),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: QUERY_KEYS.SOURCE_SETTINGS });
		},
	});
};

export const useUpdateSourceByIdMutator = (): UseMutationResult<string, ApiError, ISourceSettingUpdateMutator> => {
	const queryClient = useQueryClient();

	const baseUrl = queryClient.getDefaultOptions().queries?.meta?.baseUrl;
	return useMutation({
		mutationFn: (mutator) =>
			handlePutCall<string>(`${baseUrl}${ENDPOINTS.SOURCE_SETTINGS}/${mutator.id}`, mutator.payload),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: QUERY_KEYS.SOURCE_SETTINGS });
		},
	});
};

export const useDeleteSourceByIdMutator = (): UseMutationResult<string, ApiError, string> => {
	const queryClient = useQueryClient();

	const baseUrl = queryClient.getDefaultOptions().queries?.meta?.baseUrl;
	return useMutation({
		mutationFn: (id: string) => handleDeleteCall<string>(`${baseUrl}${ENDPOINTS.SOURCE_SETTINGS}/${id}`),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: QUERY_KEYS.SOURCE_SETTINGS });
		},
	});
};
