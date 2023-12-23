import axios from 'axios';
import { ApiResponse, ApiError } from './types';

declare global {
	interface Window {
		EXPENSE_API_HOST: string;
	}
}

const basePath = () => window.EXPENSE_API_HOST ?? 'http://localhost:7800';
const commonConfig = {
	headers: {
		'ngrok-skip-browser-warning': 'true',
	},
};

interface ApiSuccess<T> {
	data: T;
}

export async function handlePostCall<T>(path: string, payload: unknown): ApiResponse<T> {
	try {
		const response = await axios.post<ApiSuccess<T>>(`${basePath()}${path}`, payload, commonConfig);
		return response.data?.data;
	} catch (error) {
		return { error } as ApiError;
	}
}

export async function handleGetCall<T>(path: string): ApiResponse<T> {
	try {
		const response = await axios.get<ApiSuccess<T>>(`${basePath()}${path}`, commonConfig);
		return response.data?.data;
	} catch (error) {
		return { error } as ApiError;
	}
}

export async function handleDeleteCall<T>(path: string): ApiResponse<T> {
	try {
		const response = await axios.delete<ApiSuccess<T>>(`${basePath()}${path}`, commonConfig);
		return response.data?.data;
	} catch (error) {
		return { error } as ApiError;
	}
}

export async function handlePutCall<T>(path: string, payload: unknown): ApiResponse<T> {
	try {
		const response = await axios.put<ApiSuccess<T>>(`${basePath()}${path}`, payload, commonConfig);
		return response.data?.data;
	} catch (error) {
		return { error } as ApiError;
	}
}
