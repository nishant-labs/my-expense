import { useCallback, useMemo, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { groupSettingsColDefs } from '../../../../../constants/grid/group-settings-col-defs';
import { settingsGridComponents } from '../../../components/GridCellRenderers';
import { GridBase } from '../../../components/GridBase';
import { TransactionSelectorInput } from '../../../components/TransactionSelectorInput';
import { useGroupSettings } from '../../../../../hooks/useGroupSettings';

export const TransactionGroup = () => {
	const { groupList, sourceList, error, onDelete, onSave, onToggleStatus, onUpdateTransactions } = useGroupSettings();
	const [newMatchers, setNewMatchers] = useState<Array<string>>([]);
	const [color, setColor] = useState('#000000');
	const [newLabel, setNewLabel] = useState('');
	const [sourceId, setSourceId] = useState('');
	const [budget, setBudget] = useState('');

	const handleSave = useCallback(() => {
		onSave(newMatchers, newLabel, color, sourceId, parseInt(budget)).then(() => {
			setNewMatchers([]);
			setNewLabel('');
			setColor('');
			setSourceId('');
			setBudget('');
		});
	}, [onSave, newMatchers, newLabel, color, sourceId, budget]);

	const colDefs = useMemo(
		() => groupSettingsColDefs(onDelete, onToggleStatus, onUpdateTransactions, sourceList),
		[onDelete, onToggleStatus, onUpdateTransactions, sourceList],
	);

	return (
		<>
			<Row className="mb-2">
				<Col>
					<Form.Control
						placeholder="Enter Label"
						value={newLabel}
						onChange={(event) => setNewLabel(event.target.value)}
					/>
				</Col>
				<Col>
					<TransactionSelectorInput selected={newMatchers} onChange={setNewMatchers} />
				</Col>
				<Col sm={2}>
					<Form.Control
						placeholder="Enter Budget"
						type="number"
						step="any"
						min="1"
						value={budget}
						onChange={(event) => setBudget(event.target.value)}
					/>
				</Col>
				<Col sm={1}>
					<Form.Control
						type="color"
						value={color}
						onChange={(event) => setColor(event.target.value)}
						title="Choose your color"
					/>
				</Col>
				<Col>
					<Form.Select aria-label="Source Selector" onChange={(event) => setSourceId(event.target.value)}>
						<option>Select Source</option>
						{sourceList.map((source, index) => (
							<option key={`source-${index}`} value={source.id}>
								{source.name}
							</option>
						))}
					</Form.Select>
				</Col>
			</Row>
			<Row>
				<Col className="text-end">
					<Button
						variant="outline-secondary"
						disabled={!newLabel || newMatchers.length === 0 || !color || !sourceId}
						onClick={handleSave}
					>
						Add Group
					</Button>
				</Col>
			</Row>
			<Row>
				<Col>
					<p>{error}</p>
					<GridBase colDefs={colDefs} rowData={groupList} components={settingsGridComponents} />
				</Col>
			</Row>
		</>
	);
};
