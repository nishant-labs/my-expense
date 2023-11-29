import { CellClassParams, ColDef } from 'ag-grid-community';
import { ITransactionSource } from '../../state/settings/source/types';

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
		width: 100,
		cellStyle: (params: CellClassParams) => ({
			backgroundColor: params.value,
			color: 'white',
		}),
	},
	{
		headerName: 'Action',
		type: 'rightAligned',
		width: 140,
		cellRenderer: 'rowActionCellRenderer',
		cellRendererParams: {
			deleteItem: onDelete,
			toggleItem: onToggleStatus,
			editItem: onEdit,
		},
	},
];
