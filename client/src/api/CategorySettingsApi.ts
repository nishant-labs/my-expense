import { handleDeleteCall, handleGetCall, handlePostCall, handlePutCall } from './ApiBase';
import { ITransactionCategory, ITransactionCategoryPayload } from '../state/settings/category/types';

export const fetchAllCategories = async () => {
	return await handleGetCall<Array<ITransactionCategory>>('/api/settings/categories');
};

export const insertNewCategory = async (payload: ITransactionCategoryPayload) => {
	return await handlePostCall<string>('/api/settings/categories', payload);
};

export const deleteCategoryById = async (id: string) => {
	return await handleDeleteCall<string>(`/api/settings/categories/${id}`);
};

export const updateCategoryById = async (id: string, payload: Partial<ITransactionCategory>) => {
	return await handlePutCall<string>(`/api/settings/categories/${id}`, payload);
};
