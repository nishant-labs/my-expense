import axios from 'axios';
import { ApiSuccess, ApiResponse } from './types';

export async function handlePostCall<T>(endpoint: string, payload: unknown): ApiResponse<T> {
	const response = await axios.post<ApiSuccess<T>>(endpoint, payload);
	return response.data?.data;
}

export async function handleDeleteCall<T>(endpoint: string): ApiResponse<T> {
	const response = await axios.delete<ApiSuccess<T>>(endpoint);
	return response.data?.data;
}

export async function handlePutCall<T>(endpoint: string, payload: unknown): ApiResponse<T> {
	const response = await axios.put<ApiSuccess<T>>(endpoint, payload);
	return response.data?.data;
}
