import { CellClassParams, ColDef } from 'ag-grid-community';
import { ITransactionCategory } from '../../state/settings/category/types';
import { ITransactionSource } from '../../state/settings/source/types';
import { formatNumberAsCurrency } from '../../utils/NumberUtils';

export const categorySettingsColDefs = (
	onDelete: (group: ITransactionCategory) => void,
	onToggleStatus: (group: ITransactionCategory) => void,
	onUpdateTransactions: (group: ITransactionCategory, matchers: Array<string>) => void,
	onEdit: (group: ITransactionCategory) => void,
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
		width: 350,
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
		width: 110,
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
		width: 140,
		cellRenderer: 'rowActionCellRenderer',
		cellRendererParams: {
			deleteItem: onDelete,
			toggleItem: onToggleStatus,
			editItem: onEdit,
		},
	},
];
