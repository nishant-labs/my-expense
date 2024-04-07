import { CellClassParams, ColDef } from 'ag-grid-community';
import { ITransactionCategory } from '../../hooks/useCategorySettings/types';
import { ITransactionSource } from '../../hooks/useSourceSettings/types';
import { formatNumberAsCurrency } from '../../utils/NumberUtils';

export const categorySettingsColDefs = (
	onDelete: (category: ITransactionCategory) => void,
	onToggleStatus: (category: ITransactionCategory) => void,
	onUpdateTransactions: (category: ITransactionCategory, matchers: Array<string>) => void,
	onEdit: (category: ITransactionCategory) => void,
	sourceList?: Array<ITransactionSource>,
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
		valueFormatter: ({ value }) => value?.join(''),
		minWidth: 350,
		autoHeight: true,
	},
	{
		headerName: 'Budget',
		field: 'budget',
		minWidth: 100,
		valueFormatter: ({ value }) => (value ? formatNumberAsCurrency(Number(value), true, 0) : ' '),
	},
	{
		headerName: 'Chart Color',
		field: 'chartColor',
		minWidth: 110,
		cellStyle: ({ value }: CellClassParams) => ({
			backgroundColor: value,
			color: 'white',
		}),
	},
	{
		headerName: 'Transaction Source',
		field: 'sourceId',
		valueFormatter: ({ value }) => sourceList?.find((source) => source.id === value)?.name ?? 'Source Not Found',
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
