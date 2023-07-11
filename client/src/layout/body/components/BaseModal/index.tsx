import { FC, ReactNode, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface ModalBaseProps {
	buttonText: string;
	modalTitle: string;
	children: ReactNode;
	onPrimaryAction: () => void;
	primaryButtonText: string;
}

export const BaseModal: FC<ModalBaseProps> = ({
	modalTitle,
	buttonText,
	children,
	onPrimaryAction,
	primaryButtonText,
}) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="primary" size="lg" onClick={handleShow}>
				{buttonText}
			</Button>

			<Modal
				size="lg"
				backdrop="static"
				show={show}
				onHide={handleClose}
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>{modalTitle}</Modal.Title>
				</Modal.Header>
				<Modal.Body>{children}</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={onPrimaryAction}>
						{primaryButtonText}
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
