import { ColDef, ValueFormatterParams } from 'ag-grid-community';
import { formatNumberAsCurrency } from '../../utils/NumberUtils';

export const defaultExpenseDetailsColDefs: ColDef = {
	sortable: true,
};

export const expenseDetailsColDefs: Array<ColDef> = [
	{
		headerName: 'Group',
		field: 'groupName',
	},
	{
		headerName: 'Budget',
		field: 'amount',
		width: 120,
		type: 'rightAligned',
		valueFormatter: (params: ValueFormatterParams<object, string>) =>
			formatNumberAsCurrency(parseInt(params.value ?? '0'), false),
	},
	{
		headerName: 'Amount',
		field: 'amount',
		width: 120,
		type: 'rightAligned',
		valueFormatter: (params: ValueFormatterParams<object, string>) =>
			formatNumberAsCurrency(parseInt(params.value ?? '0'), false),
	},
];
