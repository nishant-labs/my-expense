import { ColDef } from 'ag-grid-community';

export const defaultTransactionColDefs: ColDef = {
	filter: true,
	sortable: true,
};

export const transactionColDefs = (): Array<ColDef> => [
	{
		headerName: 'Date',
		field: 'date',
		filter: 'agDateColumnFilter',
		width: 250,
	},
	{
		headerName: 'Transaction',
		field: 'transactionSource',
		width: 500,
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
