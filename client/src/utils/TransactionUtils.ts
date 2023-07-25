import { parse } from 'date-fns';
import { ITransactions } from '../state/transactions/types';

export const transformCSVToTransactionPayload = (
	csvData: Array<Array<string>>
): Array<ITransactions> => {
	const transformedData: Array<ITransactions> = [];
	const fieldMap = {
		date: -1,
		transactionSource: -1,
		amount: -1,
	};
	const [header, ...rowData] = csvData;

	header.map((headerValue, index) => {
		if (headerValue === 'date') {
			fieldMap.date = index;
		}
		if (headerValue === 'source') {
			fieldMap.transactionSource = index;
		}
		if (headerValue === 'amount') {
			fieldMap.amount = index;
		}
	});

	if (
		fieldMap.date === -1 ||
		fieldMap.transactionSource === -1 ||
		fieldMap.amount === -1
	) {
		return transformedData;
	}

	rowData.forEach((curValue) => {
		const data: ITransactions = {
			date: parse(curValue[fieldMap.date], 'dd/MM/yyyy', new Date()),
			transactionSource: curValue[fieldMap.transactionSource],
			amount: Number(curValue[fieldMap.amount].replaceAll('"', '')),
		};
		transformedData.push(data);
	});

	return transformedData;
};
