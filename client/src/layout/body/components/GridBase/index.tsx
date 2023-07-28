import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import { CSSProperties, FC, useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef, GridReadyEvent } from 'ag-grid-community';

interface GridBaseProps {
	rowData: Array<unknown>;
	colDefs: Array<ColDef>;
	components?: {
		[p: string]: unknown;
	};
	styles?: CSSProperties;
}

export const GridBase: FC<GridBaseProps> = ({ rowData, colDefs, components, styles = {} }) => {
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
				rowHeight={40}
				suppressRowClickSelection
				suppressCellFocus
				enableCellTextSelection
				columnDefs={colDefs}
				rowData={rowData ?? []}
				onGridReady={(gEvent) => setGridEvent(gEvent)}
				components={components}
				pagination
				paginationAutoPageSize
			/>
		</div>
	);
};
