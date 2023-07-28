export interface ITransactionGroup extends ITransactionGroupPayload {
	id: string;
	isEnabled: boolean;
}

export interface ITransactionGroupPayload {
	name: string;
	matchers: Array<string>;
	chartColor: string;
	sourceId: string;
	budget: number;
}

export interface ITransactionGroupState {
	groupList: Array<ITransactionGroup>;
	fetchAgain: boolean;
}