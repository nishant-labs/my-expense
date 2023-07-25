import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import { Trash } from 'react-bootstrap-icons';
import { ICellRendererParams } from 'ag-grid-community';
import { useAsyncApiData } from '../../../../hooks/useAsyncApiData';
import { FC, useCallback } from 'react';
import { ApiResponse } from '../../../../api/types';

interface DeleteAndUpdateRowCellRendererProps extends ICellRendererParams {
	deleteItem: (params: ICellRendererParams) => Promise<ApiResponse<unknown>>;
	toggleItem: (params: ICellRendererParams) => Promise<ApiResponse<unknown>>;
}

export const DeleteAndUpdateRowCellRenderer: FC<
	DeleteAndUpdateRowCellRendererProps
> = ({ deleteItem, toggleItem, data }) => {
	const deleteAsyncCaller = useCallback(
		() => deleteItem(data),
		[data, deleteItem]
	);
	const toggleAsyncCaller = useCallback(
		() => toggleItem(data),
		[data, toggleItem]
	);

	const [deleteApiState, handleDelete] = useAsyncApiData(
		deleteAsyncCaller,
		true
	);
	const [toggleApiState, handleToggle] = useAsyncApiData(
		toggleAsyncCaller,
		true
	);

	if (deleteApiState.loading || toggleApiState.loading) {
		return <Spinner animation="border" />;
	}

	return (
		<div>
			<Form>
				<Form.Check
					inline
					type="switch"
					name={`group-${data.id}`}
					label={data.isEnabled ? 'Disable' : 'Enable'}
					checked={data.isEnabled}
					onChange={handleToggle}
				/>

				<Button variant="link" size="sm" onClick={handleDelete}>
					<Trash />
				</Button>
			</Form>
		</div>
	);
};
