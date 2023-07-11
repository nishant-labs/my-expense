import { ColDef } from 'ag-grid-community';
import { ITransactionSource } from '../../state/settings/source/types';

export const sourceSettingsColDefs = (
	onDelete: (source: ITransactionSource) => void,
	onToggleStatus: (source: ITransactionSource) => void
): Array<ColDef> => [
	{
		headerName: 'Identifier',
		field: 'identifier',
	},
	{
		headerName: 'Name',
		field: 'name',
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
