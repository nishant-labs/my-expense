import { Button, Modal, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Form from 'react-bootstrap/Form';
import { Trash, PencilSquare } from 'react-bootstrap-icons';
import { ICellRendererParams } from 'ag-grid-community';
import { useAsyncApiData } from '../../hooks/useAsyncApiData';
import { FC, useCallback, useState } from 'react';
import { ApiResponse } from '../../api/types';

interface RowActionCellRendererProps extends ICellRendererParams {
	deleteItem: (data: unknown) => Promise<ApiResponse<unknown>>;
	toggleItem: (data: unknown) => Promise<ApiResponse<unknown>>;
	editItem: (data: unknown) => Promise<ApiResponse<unknown>>;
}

export const RowActionCellRenderer: FC<RowActionCellRendererProps> = ({ deleteItem, toggleItem, editItem, data }) => {
	const [isOpen, setIsOpen] = useState(false);

	const deleteAsyncCaller = useCallback(() => {
		setIsOpen(false);
		return deleteItem(data);
	}, [data, deleteItem]);

	const toggleAsyncCaller = useCallback(() => toggleItem(data), [data, toggleItem]);

	const handleEdit = useCallback(() => editItem(data), [data, editItem]);

	const [deleteApiState, handleDelete] = useAsyncApiData(deleteAsyncCaller, true);
	const [toggleApiState, handleToggle] = useAsyncApiData(toggleAsyncCaller, true);

	if (deleteApiState.loading || toggleApiState.loading) {
		return <Spin fullscreen indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />;
	}

	return (
		<div>
			<Form>
				<Form.Check
					style={{ display: 'inline-grid' }}
					type="switch"
					name={`category-${data.id}`}
					checked={data.isEnabled}
					onChange={handleToggle}
				/>

				<Button type="text" onClick={handleEdit}>
					<PencilSquare />
				</Button>
				<Button type="text" onClick={() => setIsOpen(true)}>
					<Trash />
				</Button>
			</Form>
			<Modal
				title={`Delete ${data.name}`}
				open={isOpen}
				onOk={handleDelete}
				okText="Delete"
				onCancel={() => setIsOpen(false)}
				cancelText="Cancel"
			>
				Are you sure, want to delete?
			</Modal>
		</div>
	);
};
