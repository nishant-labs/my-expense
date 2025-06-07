import { useCallback, useState } from 'react';
import { Button, Form, Select, Upload, Alert } from 'antd';
import type { GetProp, UploadFile, UploadProps } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { BaseModal } from '../../../../components/BaseModal';
import { parseCSVFileToTransaction } from '../../../../utils/FileHandler';
import { useTransactionUploader } from '../../../../api/TransactionsApi';
import { ACCOUNT_TYPE } from '../../../../constants';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

export const UploadTransaction = () => {
	const [form] = Form.useForm();
	const [fileList, setFileList] = useState<Array<UploadFile>>([]);

	const { mutateAsync, isPending, isSuccess, isError } = useTransactionUploader();
	const [accountType, setAccountType] = useState('');

	const handleTransactionUpload = useCallback(
		async (close: () => void) => {
			if (fileList.length > 0 && accountType) {
				const transactions = await parseCSVFileToTransaction(fileList[0].originFileObj as File);
				await mutateAsync({ accountType, payload: transactions });
				close();
			} else {
				alert('Please select file to upload');
			}
		},
		[fileList, accountType, mutateAsync],
	);

	const handleUploadFileRemove = useCallback((file: UploadFile) => {
		setFileList((oldList) => {
			const index = oldList.indexOf(file);
			const newFileList = oldList.slice();
			newFileList.splice(index, 1);
			return newFileList;
		});
	}, []);

	const handleUploadFileBeforeUpload = useCallback((file: FileType) => {
		setFileList((oldFileList) => [...oldFileList, file]);
		return false;
	}, []);

	return (
		<BaseModal
			modalTitle="Upload Latest Transactions"
			buttonText="Upload new transaction CSV"
			primaryButtonText="Upload"
			onPrimaryAction={handleTransactionUpload}
			isLoading={isPending}
		>
			<Form form={form} name="upload-form" layout="vertical">
				<Form.Item name="accountType" label="Account type for transactions">
					<Select
						placeholder="Account Type"
						value={accountType}
						options={ACCOUNT_TYPE}
						onChange={setAccountType}
						allowClear
					/>
				</Form.Item>
				<Form.Item layout="horizontal" name="file" label="Select CSV file">
					<Upload
						accept="text/csv"
						maxCount={1}
						fileList={fileList}
						onRemove={handleUploadFileRemove}
						beforeUpload={handleUploadFileBeforeUpload}
					>
						<Button disabled={fileList.length > 0} icon={<UploadOutlined />}>
							Select File
						</Button>
					</Upload>
				</Form.Item>
			</Form>

			{isSuccess && <Alert type="success" message={`Successfully uploaded ${accountType} transactions`} />}
			{isError && <Alert type="error" message="Something went wrong while uploading transaction, try again later" />}
		</BaseModal>
	);
};
