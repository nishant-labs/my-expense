import { ChangeEvent, useCallback, useState } from 'react';
import { Alert, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { BaseModal } from '../../../../components/BaseModal';
import { parseCSVFileToTransaction } from '../../../../utils/FileHandler';
import { useTransactionUploader } from '../../../../api/TransactionsApi';
import { FormSelectBase } from '../../../../components/FormSelectBase';
import { ACCOUNT_TYPE } from '../../../../constants';

export const UploadTransaction = () => {
	const { mutateAsync, isPending, isSuccess, isError } = useTransactionUploader();
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
					mutateAsync({ accountType, payload: transactions }).then(() => {
						close();
					});
				});
			} else {
				alert('Please select file to upload');
			}
		},
		[selectedFile, accountType, mutateAsync],
	);

	return (
		<BaseModal
			modalTitle="Upload Latest Transactions"
			buttonText="Upload"
			primaryButtonText="Upload"
			onPrimaryAction={handleTransactionUpload}
			isLoading={isPending}
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
			<Row>
				<Col>
					<Form.Group controlId="formFile" className="mb-3">
						<Form.Label>Select CSV file</Form.Label>
						<Form.Control type="file" accept="text/csv" onChange={handleFileSelection} />
					</Form.Group>
				</Col>
			</Row>
			{isSuccess && <Alert variant="success">Successfully uploaded {accountType} transactions</Alert>}
			{isError && <Alert variant="error">Something went wrong while uploading transaction, try again later</Alert>}
		</BaseModal>
	);
};
