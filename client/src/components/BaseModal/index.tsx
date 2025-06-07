import { FC, ReactNode, useCallback, useState } from 'react';
import { Spin, Modal, Button } from 'antd';

interface ModalBaseProps {
	buttonText: string;
	modalTitle: string;
	children: ReactNode;
	onPrimaryAction: (close: () => void) => Promise<void>;
	primaryButtonText: string;
	isLoading?: boolean;
}

export const BaseModal: FC<ModalBaseProps> = ({
	modalTitle,
	buttonText,
	children,
	onPrimaryAction,
	primaryButtonText,
	isLoading,
}) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const handlePrimaryAction = useCallback(() => {
		void onPrimaryAction(handleClose);
	}, [onPrimaryAction]);

	return (
		<>
			<Button type="primary" onClick={handleShow}>
				{buttonText}
			</Button>
			<Modal
				title={modalTitle}
				open={show}
				onOk={handlePrimaryAction}
				okText={primaryButtonText}
				onCancel={handleClose}
				cancelText="Close"
			>
				<Spin percent={100} spinning={isLoading}>
					{children}
				</Spin>
			</Modal>
		</>
	);
};
