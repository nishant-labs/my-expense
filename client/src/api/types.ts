export interface ApiError {
	error: string;
}

export type ApiResponse<T> = Promise<T | ApiError>;
