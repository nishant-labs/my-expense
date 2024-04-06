import { CellClassParams, ColDef } from 'ag-grid-community';
import { ITransactionSource } from '../../hooks/useSourceSettings/types';

export const sourceSettingsColDefs = (
	onDelete: (source: ITransactionSource) => void,
	onToggleStatus: (source: ITransactionSource) => void,
	onEdit: (source: ITransactionSource) => void,
): Array<ColDef> => [
	{
		headerName: 'Name',
		field: 'name',
	},
	{
		headerName: 'Expense flag',
		field: 'isExpense',
	},
	{
		headerName: 'Chart Color',
		field: 'chartColor',
		minWidth: 100,
		cellStyle: (params: CellClassParams) => ({
			backgroundColor: params.value,
			color: 'white',
		}),
	},
	{
		headerName: 'Action',
		type: 'rightAligned',
		minWidth: 140,
		cellRenderer: 'rowActionCellRenderer',
		cellRendererParams: {
			deleteItem: onDelete,
			toggleItem: onToggleStatus,
			editItem: onEdit,
		},
	},
];
