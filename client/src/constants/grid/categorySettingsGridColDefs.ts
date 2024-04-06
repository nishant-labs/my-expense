import { CellClassParams, ColDef } from 'ag-grid-community';
import { ITransactionCategory } from '../../hooks/useCategorySettings/types';
import { ITransactionSource } from '../../hooks/useSourceSettings/types';
import { formatNumberAsCurrency } from '../../utils/NumberUtils';

export const categorySettingsColDefs = (
	onDelete: (category: ITransactionCategory) => void,
	onToggleStatus: (category: ITransactionCategory) => void,
	onUpdateTransactions: (category: ITransactionCategory, matchers: Array<string>) => void,
	onEdit: (category: ITransactionCategory) => void,
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
		minWidth: 350,
		autoHeight: true,
	},
	{
		headerName: 'Budget',
		field: 'budget',
		minWidth: 100,
		valueFormatter: (params) => formatNumberAsCurrency(Number(params.value ?? 0), true, 0),
	},
	{
		headerName: 'Chart Color',
		field: 'chartColor',
		minWidth: 110,
		cellStyle: (params: CellClassParams) => ({
			backgroundColor: params.value,
			color: 'white',
		}),
	},
	{
		headerName: 'Transaction Source',
		field: 'sourceId',
		valueFormatter: (params) => sourceList?.find((source) => source.id === params.value)?.name ?? 'Source Not Found',
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
