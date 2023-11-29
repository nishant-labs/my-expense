import { CellClassParams, ColDef } from 'ag-grid-community';
import { ITransactionGroup } from '../../state/settings/group/types';
import { ITransactionSource } from '../../state/settings/source/types';
import { formatNumberAsCurrency } from '../../utils/NumberUtils';

export const groupSettingsColDefs = (
	onDelete: (group: ITransactionGroup) => void,
	onToggleStatus: (group: ITransactionGroup) => void,
	onUpdateTransactions: (group: ITransactionGroup, matchers: Array<string>) => void,
	onEdit: (group: ITransactionGroup) => void,
	sourceList: Array<ITransactionSource>,
): Array<ColDef> => [
	{
		headerName: 'Name',
		field: 'name',
	},
	{
		headerName: 'Transactions',
		field: 'matchers',
		cellRenderer: 'listItemWithEditCellRenderer',
		cellRendererParams: {
			updateItem: onUpdateTransactions,
		},
		valueFormatter: (params) => params?.value?.join(''),
		autoHeight: true,
	},
	{
		headerName: 'Budget',
		field: 'budget',
		width: 100,
		valueFormatter: (params) => formatNumberAsCurrency(Number(params.value ?? 0), true, 0),
	},
	{
		headerName: 'Chart Color',
		field: 'chartColor',
		width: 120,
		cellStyle: (params: CellClassParams) => ({
			backgroundColor: params.value,
			color: 'white',
		}),
		valueFormatter: () => ' ',
	},
	{
		headerName: 'Transaction Source',
		field: 'sourceId',
		valueFormatter: (params) => sourceList?.find((source) => source.id === params.value)?.name ?? 'Source Not Found',
	},
	{
		headerName: 'Action',
		type: 'rightAligned',
		width: 200,
		cellRenderer: 'rowActionCellRenderer',
		cellRendererParams: {
			deleteItem: onDelete,
			toggleItem: onToggleStatus,
			editItem: onEdit,
		},
	},
];
