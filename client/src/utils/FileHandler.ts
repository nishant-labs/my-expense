import Papa from 'papaparse';
import { transformCSVToTransactionPayload } from './TransactionUtils';
import { ITransactionsPayload } from '../state/transactions/types';

export const parseCSVFileToTransaction = (
	csvFile: File
): Promise<Array<ITransactionsPayload>> =>
	new Promise((resolve, reject) => {
		Papa.parse<string[]>(csvFile, {
			skipEmptyLines: true,
			complete: (results) => {
				if (results.errors.length > 0) {
					reject(results.errors);
				} else {
					const data = transformCSVToTransactionPayload(results.data);
					resolve(data);
				}
			},
		});
		return;
	});
