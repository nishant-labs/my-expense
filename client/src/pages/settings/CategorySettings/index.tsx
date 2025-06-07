import { useCallback, useMemo, useState } from 'react';
import { Row, Col, Button, Flex, Form, Input, InputNumber, ColorPicker, Select, Card } from 'antd';
import { categorySettingsColDefs } from '../../../constants/grid/categorySettingsGridColDefs';
import { settingsGridComponents } from '../../../components/GridCellRenderers';
import { GridBase } from '../../../components/GridBase';
import { useCategorySettings } from '../../../hooks/useCategorySettings/useCategorySettings';
import { ITransactionCategory } from '../../../hooks/useCategorySettings/types';
import { withAsyncDataLoader } from '../../../hoc/withAsyncDataLoader';
import { AggregationColor } from 'antd/es/color-picker/color';

export const CategorySettings = () => {
	const { categories, sourceList, error, onDelete, onSave, onUpdate, onToggleStatus, onUpdateTransactions } =
		useCategorySettings();
	const [editId, setEditId] = useState<string | null>(null);
	const [newMatchers, setNewMatchers] = useState<Array<string>>([]);
	const [color, setColor] = useState(new AggregationColor('#FFFFFF'));
	const [newLabel, setNewLabel] = useState('');
	const [sourceId, setSourceId] = useState('');
	const [budget, setBudget] = useState<string | null>(null);

	const handleClear = useCallback(() => {
		setEditId(null);
		setNewMatchers([]);
		setNewLabel('');
		setColor(new AggregationColor('#FFFFFF'));
		setSourceId('');
		setBudget('');
	}, []);

	const handleSave = useCallback(() => {
		onSave(newMatchers, newLabel, color.toHexString(), sourceId, parseInt(budget ?? '')).then(() => {
			handleClear();
		});
	}, [onSave, newMatchers, newLabel, color, sourceId, budget, handleClear]);

	const handleUpdate = useCallback(() => {
		onUpdate(editId!, newMatchers, newLabel, color.toHexString(), sourceId, parseInt(budget ?? '')).then(() => {
			handleClear();
		});
	}, [onUpdate, editId, newMatchers, newLabel, color, sourceId, budget, handleClear]);

	const handleEdit = useCallback((category: ITransactionCategory) => {
		setEditId(category.id);
		setNewMatchers(category.matchers);
		setNewLabel(category.name);
		setColor(new AggregationColor(category.chartColor));
		setSourceId(category.sourceId);
		setBudget(category.budget?.toString() || '');
	}, []);

	const colDefs = useMemo(
		() => categorySettingsColDefs(onDelete, onToggleStatus, onUpdateTransactions, handleEdit, sourceList),
		[handleEdit, onDelete, onToggleStatus, onUpdateTransactions, sourceList],
	);

	const sourceOptions = useMemo(
		() => sourceList?.map((source) => ({ value: source.id, label: source.name })) ?? [],
		[sourceList],
	);

	const matcherOptions = useMemo(() => newMatchers.map((item) => ({ label: item, value: item })), [newMatchers]);

	return (
		<>
			<h2>Category Settings</h2>
			<Card>
				<Row justify="space-between" align="middle" wrap={false}>
					<Col span={16}>
						<Flex gap="middle" justify="space-between" wrap={true}>
							<Form.Item label="Enter Name">
								<Input value={newLabel} onChange={(event) => setNewLabel(event.target.value)} />
							</Form.Item>
							<Form.Item label="Select  Transactions">
								<Select
									mode="tags"
									style={{ width: '400px' }}
									placeholder="Select transactions"
									onChange={setNewMatchers}
									options={matcherOptions}
									value={newMatchers}
								/>
							</Form.Item>

							<Form.Item label="Enter Budget">
								<InputNumber min="1" step="any" value={budget} onChange={(value) => setBudget(value)} />
							</Form.Item>
							<Form.Item label="Choose your color">
								<ColorPicker value={color} onChange={setColor} />
							</Form.Item>
							<Form.Item label="Select Source" style={{ width: '300px' }}>
								<Select options={sourceOptions} onChange={(selectedItem) => setSourceId(selectedItem.value)} />
							</Form.Item>
						</Flex>
					</Col>
					<Col span={4}>
						<Flex gap="middle" justify="end" wrap>
							<Button
								disabled={!newLabel || newMatchers.length === 0 || !color || !sourceId}
								onClick={editId ? handleUpdate : handleSave}
							>
								{editId ? 'Update' : 'Add Category'}
							</Button>
							<Button onClick={handleClear}>Clear</Button>
						</Flex>
					</Col>
				</Row>
			</Card>

			<Row>
				<Col span={24}>
					<p>{error?.error}</p>
					<GridBase colDefs={colDefs} rowData={categories} components={settingsGridComponents} />
				</Col>
			</Row>
		</>
	);
};

export default withAsyncDataLoader(CategorySettings);
