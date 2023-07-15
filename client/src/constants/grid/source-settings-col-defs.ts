import { CellClassParams, ColDef } from 'ag-grid-community';
import { ITransactionSource } from '../../state/settings/source/types';

export const sourceSettingsColDefs = (
	onDelete: (source: ITransactionSource) => void,
	onToggleStatus: (source: ITransactionSource) => void
): Array<ColDef> => [
	{
		headerName: 'Name',
		field: 'name',
	},
	{
		headerName: 'Transactions',
		field: 'matchers',
	},
	{
		headerName: 'Chart Color',
		field: 'chartColor',
		cellStyle: (params: CellClassParams) => ({
			backgroundColor: params.value,
			color: 'white',
		}),
	},
	{
		headerName: 'Action',
		type: 'rightAligned',
		cellRenderer: 'deleteAndUpdateRowCellRenderer',
		cellRendererParams: {
			deleteItem: onDelete,
			toggleItem: onToggleStatus,
		},
	},
];
