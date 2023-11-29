import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import { Trash, PencilSquare } from 'react-bootstrap-icons';
import { ICellRendererParams } from 'ag-grid-community';
import { useAsyncApiData } from '../../hooks/useAsyncApiData';
import { FC, useCallback } from 'react';
import { ApiResponse } from '../../api/types';

interface RowActionCellRendererProps extends ICellRendererParams {
	deleteItem: (data: unknown) => Promise<ApiResponse<unknown>>;
	toggleItem: (data: unknown) => Promise<ApiResponse<unknown>>;
	editItem: (data: unknown) => Promise<ApiResponse<unknown>>;
}

export const RowActionCellRenderer: FC<RowActionCellRendererProps> = ({ deleteItem, toggleItem, editItem, data }) => {
	const deleteAsyncCaller = useCallback(() => deleteItem(data), [data, deleteItem]);
	const toggleAsyncCaller = useCallback(() => toggleItem(data), [data, toggleItem]);

	const handleEdit = useCallback(() => editItem(data), [data, editItem]);

	const [deleteApiState, handleDelete] = useAsyncApiData(deleteAsyncCaller, true);
	const [toggleApiState, handleToggle] = useAsyncApiData(toggleAsyncCaller, true);

	if (deleteApiState.loading || toggleApiState.loading) {
		return <Spinner animation="border" />;
	}

	return (
		<div>
			<Form>
				<Form.Check
					style={{ display: 'inline-grid' }}
					type="switch"
					name={`group-${data.id}`}
					checked={data.isEnabled}
					onChange={handleToggle}
				/>

				<Button variant="link" onClick={handleEdit}>
					<PencilSquare />
				</Button>
				<Button variant="link" onClick={handleDelete}>
					<Trash />
				</Button>
			</Form>
		</div>
	);
};
