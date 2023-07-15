export interface ITransactionSource extends ITransactionSourcePayload {
	id: string;
	isEnabled: boolean;
}

export interface ITransactionSourcePayload {
	name: string;
	matchers: Array<string>;
	chartColor: string;
}

export interface ITransactionSourceState {
	sourceList: Array<ITransactionSource>;
	fetchAgain: boolean;
}
