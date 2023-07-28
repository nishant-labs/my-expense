import { handleDeleteCall, handleGetCall, handlePostCall, handlePutCall } from './ApiBase';
import { ITransactionGroup, ITransactionGroupPayload } from '../state/settings/group/types';

export const fetchAllGroups = async () => {
	return await handleGetCall<Array<ITransactionGroup>>('/api/settings/groups');
};

export const insertNewGroup = async (payload: ITransactionGroupPayload) => {
	return await handlePostCall<string>('/api/settings/groups', payload);
};

export const deleteGroupById = async (id: string) => {
	return await handleDeleteCall<string>(`/api/settings/groups/${id}`);
};

export const updateGroupById = async (id: string, payload: Partial<ITransactionGroup>) => {
	return await handlePutCall<string>(`/api/settings/groups/${id}`, payload);
};
