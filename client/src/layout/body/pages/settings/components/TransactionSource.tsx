import { useCallback, useMemo, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { sourceSettingsColDefs } from '../../../../../constants/grid/source-settings-col-defs';
import { settingsGridComponents } from '../../../components/GridCellRenderers';
import { GridBase } from '../../../components/GridBase';
import { TransactionSelectorInput } from '../../../components/TransactionSelectorInput';
import { ColorChooser } from '../../../components/ColorChooser';
import { useSourceSettings } from '../../../../../hooks/useSourceSettings';

export const TransactionSource = () => {
	const { error, sourceList, onDelete, onSave, onToggleStatus } =
		useSourceSettings();
	const [newMatchers, setNewMatchers] = useState<Array<string>>([]);
	const [color, setColor] = useState('');
	const [newLabel, setNewLabel] = useState('');

	const handleSave = useCallback(() => {
		onSave(newMatchers, newLabel, color).then(() => {
			setNewLabel('');
			setNewMatchers([]);
			setColor('');
		});
	}, [onSave, newMatchers, newLabel, color]);

	const colDefs = useMemo(
		() => sourceSettingsColDefs(onDelete, onToggleStatus),
		[onDelete, onToggleStatus]
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
					<TransactionSelectorInput
						selected={newMatchers}
						onChange={setNewMatchers}
					/>
				</Col>
				<Col>
					<ColorChooser onChange={setColor} color={color} />
				</Col>
			</Row>
			<Row>
				<Col className="text-end">
					<Button
						variant="outline-secondary"
						disabled={!newLabel || newMatchers.length === 0 || !color}
						onClick={handleSave}
					>
						Add Source
					</Button>
				</Col>
			</Row>
			<Row>
				<Col>
					<p>{error}</p>
					<GridBase
						colDefs={colDefs}
						rowData={sourceList}
						components={settingsGridComponents}
					/>
				</Col>
			</Row>
		</>
	);
};
