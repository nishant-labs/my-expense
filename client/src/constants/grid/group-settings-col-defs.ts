import { CellClassParams, ColDef } from 'ag-grid-community';
import { ITransactionGroup } from '../../state/settings/group/types';
import { ITransactionSource } from '../../state/settings/source/types';

export const groupSettingsColDefs = (
	onDelete: (group: ITransactionGroup) => void,
	onToggleStatus: (group: ITransactionGroup) => void,
	sourceList: Array<ITransactionSource>
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
		headerName: 'Budget',
		field: 'budget',
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
		headerName: 'Transaction Source',
		field: 'sourceId',
		valueFormatter: (params) =>
			sourceList.find((source) => source.id === params.value)?.name ??
			'Source Not Found',
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
