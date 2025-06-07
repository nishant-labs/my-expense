import { UseMutationResult, UseQueryResult, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { handleDeleteCall, handlePostCall, handlePutCall } from './ApiBase';
import {
	ICategorySettingUpdateMutator,
	ITransactionCategory,
	ITransactionCategoryPayload,
} from '../hooks/useCategorySettings/types';
import { ENDPOINTS, QUERY_KEYS } from '../constants/queryMapping';
import { ApiError } from './types';

export const useFetchCategories = (): UseQueryResult<Array<ITransactionCategory>, ApiError> => {
	return useQuery<Array<ITransactionCategory>, ApiError>({
		queryKey: QUERY_KEYS.CATEGORY_SETTINGS,
		meta: {
			endpoint: ENDPOINTS.CATEGORY_SETTINGS,
		},
	});
};

export const useAddCategoryMutator = (): UseMutationResult<string, ApiError, ITransactionCategoryPayload> => {
	const queryClient = useQueryClient();

	const baseUrl = queryClient.getDefaultOptions().queries?.meta?.baseUrl as string;
	return useMutation({
		mutationFn: (payload: ITransactionCategoryPayload) =>
			handlePostCall<string>(`${baseUrl}${ENDPOINTS.CATEGORY_SETTINGS}`, payload),
		onSuccess: () => {
			void queryClient.invalidateQueries({ queryKey: QUERY_KEYS.CATEGORY_SETTINGS });
		},
	});
};

export const useUpdateCategoryByIdMutator = (): UseMutationResult<string, ApiError, ICategorySettingUpdateMutator> => {
	const queryClient = useQueryClient();

	const baseUrl = queryClient.getDefaultOptions().queries?.meta?.baseUrl as string;
	return useMutation({
		mutationFn: (mutator) =>
			handlePutCall<string>(`${baseUrl}${ENDPOINTS.CATEGORY_SETTINGS}/${mutator.id}`, mutator.payload),
		onSuccess: () => {
			void queryClient.invalidateQueries({ queryKey: QUERY_KEYS.CATEGORY_SETTINGS });
		},
	});
};

export const useDeleteCategoryByIdMutator = (): UseMutationResult<string, ApiError, string> => {
	const queryClient = useQueryClient();

	const baseUrl = queryClient.getDefaultOptions().queries?.meta?.baseUrl as string;
	return useMutation({
		mutationFn: (id: string) => handleDeleteCall<string>(`${baseUrl}${ENDPOINTS.CATEGORY_SETTINGS}/${id}`),
		onSuccess: () => {
			void queryClient.invalidateQueries({ queryKey: QUERY_KEYS.CATEGORY_SETTINGS });
		},
	});
};
