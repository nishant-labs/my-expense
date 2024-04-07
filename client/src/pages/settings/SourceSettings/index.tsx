import { useCallback, useMemo, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { sourceSettingsColDefs } from '../../../constants/grid/sourceSettingGridColDefs';
import { settingsGridComponents } from '../../../components/GridCellRenderers';
import { GridBase } from '../../../components/GridBase';
import { useSourceSettings } from '../../../hooks/useSourceSettings';
import { ITransactionSource } from '../../../hooks/useSourceSettings/types';
import { withAsyncDataLoader } from '../../../hoc/withAsyncDataLoader';

export const SourceSettings = () => {
	const { error, sourceList, onDelete, onSave, onToggleStatus, onUpdate } = useSourceSettings();
	const [editId, setEditId] = useState<string | null>(null);
	const [color, setColor] = useState('#000000');
	const [newLabel, setNewLabel] = useState('');
	const [expenseFlag, setExpenseFlag] = useState<boolean | null>(null);

	const handleClear = useCallback(() => {
		setEditId(null);
		setNewLabel('');
		setColor('');
		setExpenseFlag(null);
	}, []);

	const handleSave = useCallback(() => {
		onSave(newLabel, color, expenseFlag!).then(() => {
			handleClear();
		});
	}, [onSave, newLabel, color, expenseFlag, handleClear]);

	const handleUpdate = useCallback(() => {
		onUpdate(editId!, newLabel, color, expenseFlag!).then(() => {
			handleClear();
		});
	}, [onUpdate, editId, newLabel, color, expenseFlag, handleClear]);

	const handleEdit = useCallback((source: ITransactionSource) => {
		setEditId(source.id);
		setNewLabel(source.name);
		setColor(source.chartColor);
		setExpenseFlag(source.isExpense);
	}, []);

	const colDefs = useMemo(
		() => sourceSettingsColDefs(onDelete, onToggleStatus, handleEdit),
		[onDelete, onToggleStatus, handleEdit],
	);

	return (
		<>
			<h2>Source Settings</h2>
			<Row className="mb-2">
				<Col sm={4}>
					<Form.Control
						placeholder="Enter Label"
						value={newLabel}
						onChange={(event) => setNewLabel(event.target.value)}
					/>
				</Col>
				<Col sm={1}>
					<Form.Check
						// inline
						onChange={(event) => setExpenseFlag(event.target.checked)}
						checked={expenseFlag!}
						label="Expense"
						type="checkbox"
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
			</Row>
			<Row>
				<Col className="text-end">
					<Button className="mx-2" disabled={!newLabel || !color} onClick={editId ? handleUpdate : handleSave}>
						{editId ? 'Update' : 'Add Source'}
					</Button>
					<Button variant="outline-secondary" onClick={handleClear}>
						Clear
					</Button>
				</Col>
			</Row>
			<Row>
				<Col>
					<p>{error?.error}</p>
					<GridBase colDefs={colDefs} rowData={sourceList} components={settingsGridComponents} />
				</Col>
			</Row>
		</>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export default withAsyncDataLoader(SourceSettings);
