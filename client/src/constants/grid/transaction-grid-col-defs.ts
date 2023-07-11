import { ColDef } from 'ag-grid-community';

export const defaultTransactionColDefs: ColDef = {
	filter: true,
};

export const transactionColDefs = (): Array<ColDef> => [
	{
		headerName: 'Date',
		field: 'date',
		filter: 'agDateColumnFilter',
	},
	{
		headerName: 'Transaction',
		field: 'transactionOf',
	},
	{
		headerName: 'Amount',
		field: 'amount',
		filter: 'agNumberColumnFilter',
	},
	{
		headerName: 'Group',
		field: 'group',
	},
	{
		headerName: 'Source',
		field: 'source',
	},
];