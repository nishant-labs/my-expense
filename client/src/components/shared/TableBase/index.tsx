import { FC, ReactElement, memo } from 'react';
import Table from 'react-bootstrap/Table';

export type TableColumnType = string | number | ((currentRow: Array<TableColumnType>) => ReactElement);

interface TableBaseProps {
	headers: Array<string>;
	rowData: Array<Array<TableColumnType>>;
}

export const TableBase: FC<TableBaseProps> = memo(({ headers, rowData }) => {
	return (
		<>
			<Table responsive>
				<thead>
					<tr>
						{headers.map((header, index) => (
							<th key={`th-${index}`}>
								<strong>{header}</strong>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rowData.map((colData, rowIndex) => (
						<tr key={`th-${rowIndex}`}>
							{colData.map((data, index) => {
								if (typeof data === 'function') {
									return <td key={`th-${index}`}>{data(colData)}</td>;
								}
								return <td key={`th-${index}`}>{data ?? ''}</td>;
							})}
						</tr>
					))}
				</tbody>
			</Table>
		</>
	);
});
