import { ChangeEvent, useCallback, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { BaseModal } from '../../../../components/BaseModal';
import { parseCSVFileToTransaction } from '../../../../utils/FileHandler';
import { insertTransactions } from '../../../../api/TransactionsApi';
import { FormSelectBase } from '../../../../components/FormSelectBase';
import { ACCOUNT_TYPE } from '../../../../constants';

export const UploadTransaction = () => {
	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [accountType, setAccountType] = useState('');

	const handleFileSelection = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		const fileList = event.currentTarget.files!;
		if (fileList.length > 0) {
			setSelectedFile(fileList.item(0));
		}
	}, []);

	const handleTransactionUpload = useCallback(
		(close: () => void) => {
			if (selectedFile && accountType) {
				parseCSVFileToTransaction(selectedFile).then((transactions) => {
					insertTransactions(accountType, transactions).then(() => {
						close();
					});
				});
			} else {
				alert('Please select file to upload');
			}
		},
		[selectedFile, accountType],
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
						<Form.Label>Account type for transactions</Form.Label>
						<FormSelectBase
							ariaLabel="Account Type"
							selected={accountType}
							options={ACCOUNT_TYPE}
							onSelect={(value) => setAccountType(value as string)}
						/>
					</Form.Group>
				</Col>
			</Row>
			<Row className="mb-4">
				<Col>
					<Form.Group controlId="formFile" className="mb-3">
						<Form.Label>Select CSV file</Form.Label>
						<Form.Control type="file" accept="text/csv" onChange={handleFileSelection} />
					</Form.Group>
				</Col>
			</Row>
		</BaseModal>
	);
};
