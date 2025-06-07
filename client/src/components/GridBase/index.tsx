import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import { CSSProperties, FC, useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef, GridReadyEvent } from 'ag-grid-community';

interface GridBaseProps {
	rowData?: Array<unknown>;
	defaultColDef?: ColDef;
	colDefs: Array<ColDef>;
	components?: {
		[p: string]: unknown;
	};
	styles?: CSSProperties;
	pagination?: boolean;
	rowHeight?: number;
}

export const GridBase: FC<GridBaseProps> = ({
	rowData,
	defaultColDef,
	colDefs,
	components,
	pagination,
	rowHeight = 40,
	styles = {},
}) => {
	const [gridEvent, setGridEvent] = useState<GridReadyEvent | null>(null);

	useEffect(() => {
		setTimeout(() => {
			gridEvent?.api.sizeColumnsToFit();
		}, 100);
	}, [gridEvent]);

	return (
		<div
			className="ag-theme-alpine"
			style={{
				height: 'calc(100vh - 240px)',
				width: '100%',
				...styles,
			}}
		>
			<AgGridReact
				rowHeight={rowHeight}
				suppressCellFocus
				enableCellTextSelection
				defaultColDef={defaultColDef}
				columnDefs={colDefs}
				rowData={rowData ?? []}
				onGridReady={(gEvent) => setGridEvent(gEvent)}
				components={components}
				pagination={pagination}
				paginationAutoPageSize
			/>
		</div>
	);
};
