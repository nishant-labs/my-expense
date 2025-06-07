import { FC, useMemo, useState } from 'react';
import { ICellRendererParams } from 'ag-grid-community';
import { EditOutlined } from '@ant-design/icons';
import { Flex, Modal, Select } from 'antd';

import './styles.css';

interface ListItemWithEditCellRendererProps<T> extends ICellRendererParams<T, Array<string>, unknown> {
	updateItem: (data: T, list: Array<string>) => void;
}

export const ListItemWithEditCellRenderer: FC<ListItemWithEditCellRendererProps<Record<string, string>>> = ({
	value,
	data,
	updateItem,
}) => {
	const [show, setShow] = useState(false);
	const [updatedList, setUpdatedList] = useState<Array<string>>(value!);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleUpdate = () => {
		handleClose();
		updateItem(data!, updatedList);
	};

	const options = useMemo(() => updatedList.map((item) => ({ label: item, value: item })), [updatedList]);

	return (
		<Flex align="middle" justify="space-between" wrap={false}>
			<div>
				{value?.length === 1 ? (
					<span>{value[0]}</span>
				) : (
					<div className="list-renderer">
						<ul>
							{value?.map((valueItem, index) => (
								<li className="lh-sm" key={`${data?.id}-${index}`}>
									<span className="text-truncate">{valueItem}</span>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
			<div>
				<EditOutlined onClick={handleShow} />
				<Modal
					title="Edit Transactions"
					open={show}
					onOk={handleUpdate}
					okText="Save Changes"
					onCancel={handleClose}
					cancelText="Close"
				>
					<Select
						mode="tags"
						style={{ width: '100%' }}
						placeholder="Select transactions"
						onChange={setUpdatedList}
						options={options}
						value={updatedList}
					/>
				</Modal>
			</div>
		</Flex>
	);
};
