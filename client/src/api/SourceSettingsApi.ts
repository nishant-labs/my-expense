import { handleDeleteCall, handleGetCall, handlePostCall, handlePutCall } from './ApiBase';
import { ITransactionSource, ITransactionSourcePayload } from '../state/settings/source/types';

export const fetchAllSources = async () => {
	return await handleGetCall<Array<ITransactionSource>>('/api/settings/sources');
};

export const insertNewSource = async (payload: ITransactionSourcePayload) => {
	return await handlePostCall<string>('/api/settings/sources', payload);
};

export const deleteSourceById = async (id: string) => {
	return await handleDeleteCall<string>(`/api/settings/sources/${id}`);
};

export const updateSourceById = async (id: string, payload: Partial<ITransactionSource>) => {
	return await handlePutCall<string>(`/api/settings/sources/${id}`, payload);
};
