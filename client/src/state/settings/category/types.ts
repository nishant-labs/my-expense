export interface ITransactionCategory extends ITransactionCategoryPayload {
	id: string;
	isEnabled: boolean;
}

export interface ITransactionCategoryPayload {
	name: string;
	matchers: Array<string>;
	chartColor: string;
	sourceId: string;
	budget: number;
}

export interface ITransactionCategoryState {
	categories: Array<ITransactionCategory>;
	fetchAgain: boolean;
}
