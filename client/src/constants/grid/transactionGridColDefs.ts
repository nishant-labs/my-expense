import { ColDef, ValueFormatterParams } from 'ag-grid-community';
import { formatDate } from '../../utils/DateUtils';

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
		valueFormatter: (params: ValueFormatterParams<object, string>) => formatDate(params.value!),
	},
	{
		headerName: 'From',
		field: 'accountType',
		minWidth: 120,
		valueFormatter: (params: ValueFormatterParams<object, string>) => ACCOUNT_TYPE_MAP[params.value!],
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
		headerName: 'Group',
		field: 'groupName',
	},
	{
		headerName: 'Source',
		field: 'sourceName',
	},
];
