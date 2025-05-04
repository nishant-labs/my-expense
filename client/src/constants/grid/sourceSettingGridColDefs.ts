import { CellClassParams, ColDef } from 'ag-grid-community';
import { ITransactionSource } from '../../hooks/useSourceSettings/types';

export const sourceSettingsColDefs = (
	onDelete: (source: ITransactionSource) => Promise<string>,
	onToggleStatus: (source: ITransactionSource) => Promise<string>,
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
		minWidth: 150,
		maxWidth: 150,
		suppressAutoSize: true,
		suppressSizeToFit: true,
		sortable: false,
		cellRenderer: 'rowActionCellRenderer',
		cellRendererParams: {
			deleteItem: onDelete,
			toggleItem: onToggleStatus,
			editItem: onEdit,
		},
	},
];
