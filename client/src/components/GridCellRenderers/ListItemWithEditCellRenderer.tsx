import { FC, useState } from 'react';
import { ICellRendererParams } from 'ag-grid-community';
import { PencilSquare } from 'react-bootstrap-icons';
import { Modal } from 'antd';
import { TransactionSelectorInput } from '../TransactionSelectorInput';

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
	return (
		<>
			{value?.length === 1 ? (
				<span className="text-truncate">{value[0]}</span>
			) : (
				<div className="list-renderer">
					<ul className="small m-0">
						{value?.map((valueItem, index) => (
							<li className="lh-sm" key={`${data?.id}-${index}`}>
								<span className="text-truncate">{valueItem}</span>
							</li>
						))}
					</ul>
				</div>
			)}

			<PencilSquare style={{ float: 'right', cursor: 'pointer', marginBottom: '5px' }} onClick={handleShow} />
			<Modal
				title="Edit Transactions"
				open={show}
				onOk={handleUpdate}
				okText="Save Changes"
				onCancel={handleClose}
				cancelText="Close"
			>
				<TransactionSelectorInput selected={updatedList} onChange={setUpdatedList} />
			</Modal>
		</>
	);
};
