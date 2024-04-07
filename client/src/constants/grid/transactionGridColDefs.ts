import { ColDef, ValueFormatterParams } from 'ag-grid-community';
import { formatDate } from '../../utils/DateUtils';
import { ITransactionsEnhanced } from '../../hooks/useTransactions/types';
import { ITransactionCategory } from '../../hooks/useCategorySettings/types';
import { ITransactionSource } from '../../hooks/useSourceSettings/types';

const ACCOUNT_TYPE_MAP: Record<string, string> = {
	account: 'Account',
	creditCard: 'Credit Card',
};

export const defaultTransactionColDefs: ColDef = {
	filter: true,
	sortable: true,
};

export const transactionColDefs = (): Array<ColDef> => [
	{
		headerName: 'Date',
		field: 'date',
		filter: 'agDateColumnFilter',
		minWidth: 120,
		valueFormatter: (params: ValueFormatterParams<ITransactionsEnhanced, string>) => formatDate(params.value!),
	},
	{
		headerName: 'From',
		field: 'accountType',
		minWidth: 120,
		valueFormatter: (params: ValueFormatterParams<ITransactionsEnhanced, string>) => ACCOUNT_TYPE_MAP[params.value!],
	},
	{
		headerName: 'Transaction',
		field: 'transactionSource',
		minWidth: 500,
	},
	{
		headerName: 'Amount',
		field: 'amount',
		filter: 'agNumberColumnFilter',
	},
	{
		headerName: 'Category',
		field: 'category',
		valueFormatter: (params: ValueFormatterParams<ITransactionsEnhanced, ITransactionCategory>) =>
			params.value?.name ?? '',
	},
	{
		headerName: 'Source',
		field: 'source',
		valueFormatter: (params: ValueFormatterParams<ITransactionsEnhanced, ITransactionSource>) =>
			params.value?.name ?? '',
	},
];
