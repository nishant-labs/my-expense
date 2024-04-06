export interface ApiSuccess<T> {
	data: T;
}

export interface ApiError {
	error: string;
}

export type ApiResponse<T> = Promise<T>;
