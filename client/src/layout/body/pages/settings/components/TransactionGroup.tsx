import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRecoilState } from 'recoil';
import { AgGridReact } from 'ag-grid-react';
import { GridReadyEvent } from 'ag-grid-community';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { HexColorPicker } from 'react-colorful';
import { sourceSettingsColDefs } from '../../../../../constants/grid/source-settings-col-defs';
import { ApiError } from '../../../../../api/types';
import { ITransactionSource } from '../../../../../state/settings/source/types';
import { transactionSourceState } from '../../../../../state/settings/source/state';
import {
	deleteSourceById,
	fetchAllSources,
	insertNewSource,
	updateSourceById,
} from '../../../../../api/settings-api';
import { settingsGridComponents } from '../../../components/GridCellRenderers';

export const TransactionGroup = () => {
	const [transactionSources, setTransactionSource] = useRecoilState(
		transactionSourceState
	);
	const [newIdentifier, setNewIdentifier] = useState('');
	const [newLabel, setNewLabel] = useState('');
	const [error, setError] = useState('');
	const [color, setColor] = useState('');

	const loadData = useCallback(async () => {
		const latestSources = await fetchAllSources();
		if ((latestSources as ApiError).error) {
			setError('Failed to create new source');
		} else {
			setTransactionSource(latestSources as ITransactionSource[]);
		}
	}, [setTransactionSource]);

	const onSave = useCallback(
		(identifier: string, name: string) => {
			setError('');
			insertNewSource({ identifier, name }).then((response) => {
				if ((response as ApiError).error) {
					setError('Failed to create new source');
				} else {
					loadData();
					setNewIdentifier('');
					setNewLabel('');
				}
			});
		},
		[loadData]
	);

	const onDelete = useCallback(
		(source: ITransactionSource) => {
			setError('');
			deleteSourceById(source.id).then((response) => {
				if ((response as ApiError).error) {
					setError(`Failed to delete source with id ${source.id}`);
				} else {
					loadData();
				}
			});
		},
		[loadData]
	);

	const onToggleStatus = useCallback(
		(source: ITransactionSource) => {
			updateSourceById(source.id, {
				isEnabled: !source.isEnabled,
			}).then((response) => {
				if ((response as ApiError).error) {
					setError(`Failed to update source ${source.identifier}`);
				} else {
					loadData();
				}
			});
		},
		[loadData]
	);

	const handleSave = useCallback(() => {
		onSave(newIdentifier, newLabel);
	}, [newIdentifier, newLabel, onSave]);

	const handleGridReady = useCallback((gridEvent: GridReadyEvent) => {
		gridEvent.api.sizeColumnsToFit();
	}, []);

	const colDefs = useMemo(
		() => sourceSettingsColDefs(onDelete, onToggleStatus),
		[onDelete, onToggleStatus]
	);

	useEffect(() => {
		loadData();
	}, [loadData]);

	return (
		<>
			<Row>
				<Col>
					<InputGroup className="mb-3">
						<Form.Control
							placeholder="Enter Identifier"
							value={newIdentifier}
							onChange={(event) => setNewIdentifier(event.target.value)}
						/>
						<Form.Control
							placeholder="Enter Label"
							value={newLabel}
							onChange={(event) => setNewLabel(event.target.value)}
						/>
						<HexColorPicker color={color} onChange={setColor} />
						<Button
							variant="outline-secondary"
							disabled={!newLabel || !newIdentifier}
							onClick={handleSave}
						>
							Add Group
						</Button>
					</InputGroup>
				</Col>
			</Row>
			<Row>
				<Col>
					<p>{error}</p>
					<div
						className="ag-theme-alpine"
						style={{
							height: 'calc(100vh - 222px)',
							width: '100%',
						}}
					>
						<AgGridReact
							rowHeight={40}
							suppressRowClickSelection
							suppressCellFocus
							columnDefs={colDefs}
							rowData={transactionSources ?? []}
							onGridReady={handleGridReady}
							components={settingsGridComponents}
							pagination
							paginationAutoPageSize
						/>
					</div>
				</Col>
			</Row>
		</>
	);
};
