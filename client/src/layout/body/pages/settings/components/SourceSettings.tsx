import { useCallback, useMemo, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { sourceSettingsColDefs } from '../../../../../constants/grid/sourceSettingGridColDefs';
import { settingsGridComponents } from '../../../components/GridCellRenderers';
import { GridBase } from '../../../components/GridBase';
import { useSourceSettings } from '../../../../../hooks/useSourceSettings';

export const SourceSettings = () => {
	const { error, sourceList, onDelete, onSave, onToggleStatus } = useSourceSettings();
	const [color, setColor] = useState('#000000');
	const [newLabel, setNewLabel] = useState('');
	const [expenseFlag, setExpenseFlag] = useState<boolean | null>(null);

	const handleSave = useCallback(() => {
		onSave(newLabel, color, expenseFlag!).then(() => {
			setNewLabel('');
			setColor('');
		});
	}, [onSave, newLabel, color, expenseFlag]);

	const colDefs = useMemo(() => sourceSettingsColDefs(onDelete, onToggleStatus), [onDelete, onToggleStatus]);

	return (
		<>
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
					<Button variant="outline-secondary" disabled={!newLabel || !color} onClick={handleSave}>
						Add Source
					</Button>
				</Col>
			</Row>
			<Row>
				<Col>
					<p>{error}</p>
					<GridBase colDefs={colDefs} rowData={sourceList} components={settingsGridComponents} />
				</Col>
			</Row>
		</>
	);
};
