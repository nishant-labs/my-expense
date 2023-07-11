import {
	handleDeleteCall,
	handleGetCall,
	handlePostCall,
	handlePutCall,
} from './api-base';
import { ITransactionSource } from '../state/settings/source/types';

export const fetchAllSources = async () => {
	return await handleGetCall<Array<ITransactionSource>>(
		'/api/settings/sources'
	);
};

export const insertNewSource = async (payload: unknown) => {
	return await handlePostCall<string>('/api/settings/sources', payload);
};

export const deleteSourceById = async (id: string) => {
	return await handleDeleteCall<string>(`/api/settings/sources/${id}`);
};

export const updateSourceById = async (id: string, payload: unknown) => {
	return await handlePutCall<string>(`/api/settings/sources/${id}`, payload);
};
