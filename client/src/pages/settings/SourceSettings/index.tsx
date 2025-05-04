import { useCallback, useMemo, useState } from 'react';
import { Row, Col, Button, Flex } from 'antd';
import Form from 'react-bootstrap/Form';
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
	const [expenseFlag, setExpenseFlag] = useState<boolean | null>(false);

	const handleClear = useCallback(() => {
		setEditId(null);
		setNewLabel('');
		setColor('');
		setExpenseFlag(null);
	}, []);

	const handleSave = useCallback(async () => {
		await onSave(newLabel, color, expenseFlag!);
		handleClear();
	}, [onSave, newLabel, color, expenseFlag, handleClear]);

	const handleUpdate = useCallback(async () => {
		await onUpdate(editId!, newLabel, color, expenseFlag!);
		handleClear();
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
			<Row gutter={2} justify="space-between" wrap={false}>
				<Col span={4}>
					<Form.Control
						placeholder="Enter Label"
						value={newLabel}
						onChange={(event) => setNewLabel(event.target.value)}
					/>
				</Col>
				<Col span={4}>
					<Form.Check
						onChange={(event) => setExpenseFlag(event.target.checked)}
						checked={expenseFlag!}
						label="Expense"
						type="checkbox"
					/>
				</Col>
				<Col span={4}>
					<Form.Control
						type="color"
						value={color}
						onChange={(event) => setColor(event.target.value)}
						title="Choose your color"
					/>
				</Col>
				<Col>
					<Flex gap="middle" wrap>
						<Button type="primary" disabled={!newLabel || !color} onClick={editId ? handleUpdate : handleSave}>
							{editId ? 'Update' : 'Add Source'}
						</Button>
						<Button onClick={handleClear}>Clear</Button>
					</Flex>
				</Col>
			</Row>
			<Row>
				<Col span={24}>
					<p>{error?.error}</p>
					<GridBase colDefs={colDefs} rowData={sourceList} components={settingsGridComponents} />
				</Col>
			</Row>
		</>
	);
};

export default withAsyncDataLoader(SourceSettings);
