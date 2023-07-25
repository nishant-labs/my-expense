import { ChangeEvent, useCallback, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { BaseModal } from '../../../../components/BaseModal';
import { parseCSVFileAsync } from '../../../../../../utils/FileHandler';
import { transformCSVToTransactionPayload } from '../../../../../../utils/TransactionUtils';
import { insertTransactions } from '../../../../../../api/TransactionsApi';

export const UploadTransaction = () => {
	const [selectedFile, setSelectedFile] = useState<File | null>(null);

	const handleFileSelection = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			const fileList = event.currentTarget.files!;
			if (fileList.length > 0) {
				setSelectedFile(fileList.item(0));
			}
		},
		[]
	);

	const handleTransactionUpload = useCallback(
		(close: () => void) => {
			if (selectedFile) {
				parseCSVFileAsync(selectedFile).then(({ data, error }) => {
					if (!error) {
						const payload = transformCSVToTransactionPayload(data);
						insertTransactions(payload).then(() => {
							close();
						});
					}
				});
			} else {
				alert('Please select file to upload');
			}
		},
		[selectedFile]
	);

	return (
		<BaseModal
			modalTitle="Upload Latest Transactions"
			buttonText="Upload"
			primaryButtonText="Upload"
			onPrimaryAction={handleTransactionUpload}
		>
			<Row className="mb-4">
				<Col>
					<Form.Group controlId="formFile" className="mb-3">
						<Form.Label>Select CSV file</Form.Label>
						<Form.Control
							type="file"
							accept="text/csv"
							onChange={handleFileSelection}
						/>
					</Form.Group>
				</Col>
			</Row>
		</BaseModal>
	);
};
