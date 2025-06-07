import { FC, useCallback, useState } from 'react';
import { Button, Flex, Form, Modal, Spin, Switch } from 'antd';
import { DeleteTwoTone, EditTwoTone, LoadingOutlined } from '@ant-design/icons';
import { ICellRendererParams } from 'ag-grid-community';
import { useAsyncApiData } from '../../hooks/useAsyncApiData';
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
		<>
			<Form size="small" layout="horizontal">
				<Flex gap="small" align="center" justify="end">
					<Switch checked={data.isEnabled} onChange={handleToggle} />
					<Button type="text" onClick={handleEdit}>
						<EditTwoTone />
					</Button>
					<Button type="text" onClick={() => setIsOpen(true)}>
						<DeleteTwoTone />
					</Button>
				</Flex>
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
		</>
	);
};
