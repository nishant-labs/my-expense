export interface MutationPayload<T = unknown> {
	endpoint: string;
	payload: T;
}
