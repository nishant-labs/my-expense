import { CellClassParams, ColDef } from 'ag-grid-community';
import { ITransactionCategory } from '../../hooks/useCategorySettings/types';
import { ITransactionSource } from '../../hooks/useSourceSettings/types';
import { formatNumberAsCurrency } from '../../utils/NumberUtils';

export const categorySettingsColDefs = (
	onDelete: (category: ITransactionCategory) => Promise<string>,
	onToggleStatus: (category: ITransactionCategory) => Promise<string>,
	onUpdateTransactions: (category: ITransactionCategory, matchers: Array<string>) => Promise<string>,
	onEdit: (category: ITransactionCategory) => void,
	sourceList?: Array<ITransactionSource>,
): Array<ColDef<ITransactionCategory>> => [
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
		valueFormatter: ({ value }) => (value as Array<string>)?.join(''),
		minWidth: 350,
		autoHeight: true,
	},
	{
		headerName: 'Budget',
		field: 'budget',
		minWidth: 150,
		maxWidth: 150,
		valueFormatter: ({ value }) => (value ? formatNumberAsCurrency(Number(value), true, 0) : ' '),
	},
	{
		headerName: 'Chart Color',
		field: 'chartColor',
		minWidth: 150,
		maxWidth: 150,
		cellStyle: ({ value }: CellClassParams<ITransactionCategory, string>) => ({
			backgroundColor: value ?? 'inherit',
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
