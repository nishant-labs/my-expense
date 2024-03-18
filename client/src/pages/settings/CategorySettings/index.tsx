import { useCallback, useMemo, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { categorySettingsColDefs } from '../../../constants/grid/categorySettingsGridColDefs';
import { settingsGridComponents } from '../../../components/GridCellRenderers';
import { GridBase } from '../../../components/GridBase';
import { TransactionSelectorInput } from '../../../components/TransactionSelectorInput';
import { useCategorySettings } from '../../../hooks/useCategorySettings';
import { ITransactionCategory } from '../../../state/settings/category/types';
import { withAsyncDataLoader } from '../../../hoc/withAsyncDataLoader';

export const CategorySettings = () => {
	const { categories, sourceList, error, onDelete, onSave, onUpdate, onToggleStatus, onUpdateTransactions } =
		useCategorySettings();
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

	const handleEdit = useCallback((category: ITransactionCategory) => {
		setEditId(category.id);
		setNewMatchers(category.matchers);
		setNewLabel(category.name);
		setColor(category.chartColor);
		setSourceId(category.sourceId);
		setBudget(category.budget?.toString() || '');
	}, []);

	const colDefs = useMemo(
		() => categorySettingsColDefs(onDelete, onToggleStatus, onUpdateTransactions, handleEdit, sourceList),
		[handleEdit, onDelete, onToggleStatus, onUpdateTransactions, sourceList],
	);

	return (
		<>
			<h2>Category Settings</h2>
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
						{editId ? 'Update' : 'Add Category'}
					</Button>
					<Button variant="outline-secondary" onClick={handleClear}>
						Clear
					</Button>
				</Col>
			</Row>
			<Row>
				<Col>
					<p>{error}</p>
					<GridBase colDefs={colDefs} rowData={categories} components={settingsGridComponents} />
				</Col>
			</Row>
		</>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export default withAsyncDataLoader(CategorySettings);
