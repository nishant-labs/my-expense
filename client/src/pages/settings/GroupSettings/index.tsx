import { useCallback, useMemo, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { groupSettingsColDefs } from '../../../constants/grid/groupSettingsGridColDefs';
import { settingsGridComponents } from '../../../components/GridCellRenderers';
import { GridBase } from '../../../components/GridBase';
import { TransactionSelectorInput } from '../../../components/TransactionSelectorInput';
import { useGroupSettings } from '../../../hooks/useGroupSettings';
import { ITransactionGroup } from '../../../state/settings/group/types';
import { withAsyncDataLoader } from '../../../hoc/withAsyncDataLoader';

export const GroupSettings = () => {
	const { groupList, sourceList, error, onDelete, onSave, onUpdate, onToggleStatus, onUpdateTransactions } =
		useGroupSettings();
	const [editId, setEditId] = useState<string | null>(null);
	const [newMatchers, setNewMatchers] = useState<Array<string>>([]);
	const [color, setColor] = useState('#000000');
	const [newLabel, setNewLabel] = useState('');
	const [sourceId, setSourceId] = useState('');
	const [budget, setBudget] = useState('');

	const handleClear = useCallback(() => {
		setEditId(null);
		setNewMatchers([]);
		setNewLabel('');
		setColor('');
		setSourceId('');
		setBudget('');
	}, []);

	const handleSave = useCallback(() => {
		onSave(newMatchers, newLabel, color, sourceId, parseInt(budget)).then(() => {
			handleClear();
		});
	}, [onSave, newMatchers, newLabel, color, sourceId, budget, handleClear]);

	const handleUpdate = useCallback(() => {
		onUpdate(editId!, newMatchers, newLabel, color, sourceId, parseInt(budget)).then(() => {
			handleClear();
		});
	}, [onUpdate, editId, newMatchers, newLabel, color, sourceId, budget, handleClear]);

	const handleEdit = useCallback((group: ITransactionGroup) => {
		setEditId(group.id);
		setNewMatchers(group.matchers);
		setNewLabel(group.name);
		setColor(group.chartColor);
		setSourceId(group.sourceId);
		setBudget(group.budget?.toString() || '');
	}, []);

	const colDefs = useMemo(
		() => groupSettingsColDefs(onDelete, onToggleStatus, onUpdateTransactions, handleEdit, sourceList),
		[handleEdit, onDelete, onToggleStatus, onUpdateTransactions, sourceList],
	);

	return (
		<>
			<h2>Group Settings</h2>
			<Row className="mb-2">
				<Col>
					<Form.Control
						placeholder="Enter Label"
						value={newLabel}
						onChange={(event) => setNewLabel(event.target.value)}
					/>
				</Col>
				<Col>
					<TransactionSelectorInput selected={newMatchers} options={newMatchers} onChange={setNewMatchers} />
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
					<Form.Select
						aria-label="Source Selector"
						value={sourceId}
						onChange={(event) => setSourceId(event.target.value)}
					>
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
						className="mx-2"
						disabled={!newLabel || newMatchers.length === 0 || !color || !sourceId}
						onClick={editId ? handleUpdate : handleSave}
					>
						{editId ? 'Update' : 'Add Group'}
					</Button>
					<Button variant="outline-secondary" onClick={handleClear}>
						Clear
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

// eslint-disable-next-line react-refresh/only-export-components
export default withAsyncDataLoader(GroupSettings);
