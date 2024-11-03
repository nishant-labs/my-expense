import { FC, ReactNode, useCallback, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
			<Button variant="primary" size="lg" onClick={handleShow}>
				{buttonText}
			</Button>

			<Modal size="lg" backdrop="static" show={show} onHide={handleClose} keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>{modalTitle}</Modal.Title>
				</Modal.Header>
				<Modal.Body>{children}</Modal.Body>
				<Modal.Footer>
					{isLoading && <Spinner animation="border" />}
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handlePrimaryAction}>
						{primaryButtonText}
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
