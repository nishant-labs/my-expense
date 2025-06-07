import { handlePostCall } from './ApiBase';
import { ITransactions, ITransactionsMutator } from '../hooks/useTransactions/types';
import { UseMutationResult, UseQueryResult, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ApiError } from './types';
import { ENDPOINTS, QUERY_KEYS } from '../constants/queryMapping';

export const useFetchTransactionsByMonth = (
	year: number,
	month: string,
	accountType?: string,
): UseQueryResult<Array<ITransactions>, ApiError> => {
	return useQuery<Array<ITransactions>, ApiError>({
		queryKey: [...QUERY_KEYS.TRANSACTIONS, year, month],
		meta: {
			endpoint: `${ENDPOINTS.TRANSACTIONS}${accountType ?? 'consolidated'}/${year}-${month}`,
		},
		enabled: !!(year && month),
	});
};

export const useTransactionUploader = (): UseMutationResult<string, ApiError, ITransactionsMutator> => {
	const queryClient = useQueryClient();
	const baseUrl = queryClient.getDefaultOptions().queries?.meta?.baseUrl;
	return useMutation({
		mutationFn: (mutator) =>
			handlePostCall<string>(`${baseUrl}${ENDPOINTS.TRANSACTIONS}${mutator.accountType}`, mutator.payload),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: QUERY_KEYS.TRANSACTIONS });
		},
	});
};
