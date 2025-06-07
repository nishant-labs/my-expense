import { useCallback, useMemo, useState } from 'react';
import { Row, Col, Button, Flex, Form, Checkbox, Input, ColorPicker, Card } from 'antd';
import { sourceSettingsColDefs } from '../../../constants/grid/sourceSettingGridColDefs';
import { settingsGridComponents } from '../../../components/GridCellRenderers';
import { GridBase } from '../../../components/GridBase';
import { useSourceSettings } from '../../../hooks/useSourceSettings';
import { ITransactionSource } from '../../../hooks/useSourceSettings/types';
import { withAsyncDataLoader } from '../../../hoc/withAsyncDataLoader';
import { AggregationColor } from 'antd/es/color-picker/color';

export const SourceSettings = () => {
	const { error, sourceList, onDelete, onSave, onToggleStatus, onUpdate } = useSourceSettings();
	const [editId, setEditId] = useState<string | null>(null);
	const [color, setColor] = useState<AggregationColor>(new AggregationColor('#000000'));
	const [newLabel, setNewLabel] = useState('');
	const [expenseFlag, setExpenseFlag] = useState<boolean | null>(false);

	const handleClear = useCallback(() => {
		setEditId(null);
		setNewLabel('');
		setColor(new AggregationColor('#000000'));
		setExpenseFlag(null);
	}, []);

	const handleSave = useCallback(async () => {
		await onSave(newLabel, color.toHexString(), expenseFlag!);
		handleClear();
	}, [onSave, newLabel, color, expenseFlag, handleClear]);

	const handleUpdate = useCallback(async () => {
		await onUpdate(editId!, newLabel, color.toHexString(), expenseFlag!);
		handleClear();
	}, [onUpdate, editId, newLabel, color, expenseFlag, handleClear]);

	const handleEdit = useCallback((source: ITransactionSource) => {
		setEditId(source.id);
		setNewLabel(source.name);
		setColor(new AggregationColor(source.chartColor));
		setExpenseFlag(source.isExpense);
	}, []);

	const colDefs = useMemo(
		() => sourceSettingsColDefs(onDelete, onToggleStatus, handleEdit),
		[onDelete, onToggleStatus, handleEdit],
	);

	return (
		<>
			<h2>Source Settings</h2>
			<Card title="Source Settings">
				<Row justify="space-between" wrap={false}>
					<Col span={10}>
						<Flex gap="middle" justify="space-between" wrap={false}>
							<Form.Item layout="horizontal" label="Enter Name">
								<Input value={newLabel} onChange={(event) => setNewLabel(event.target.value)} />
							</Form.Item>
							<Form.Item layout="horizontal" label="Is Money Out">
								<Checkbox checked={expenseFlag!} onChange={(event) => setExpenseFlag(event.target.checked)} />
							</Form.Item>
							<Form.Item layout="horizontal" label="Choose your color">
								<ColorPicker value={color} onChange={setColor} />
							</Form.Item>
						</Flex>
					</Col>
					<Col span={3}>
						<Flex gap="middle" justify="end" wrap>
							<Button type="primary" disabled={!newLabel || !color} onClick={editId ? handleUpdate : handleSave}>
								{editId ? 'Update' : 'Add Source'}
							</Button>
							<Button onClick={handleClear}>Clear</Button>
						</Flex>
					</Col>
				</Row>
			</Card>

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
