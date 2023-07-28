export interface ITransactionSource extends ITransactionSourcePayload {
	id: string;
	isEnabled: boolean;
}

export interface ITransactionSourcePayload {
	name: string;
	chartColor: string;
	isExpense: boolean;
}

export interface ITransactionSourceState {
	sourceList: Array<ITransactionSource>;
	fetchAgain: boolean;
}
