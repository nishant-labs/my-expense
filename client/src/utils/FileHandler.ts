export interface CSVFileParsedResponse {
	data: Array<Array<string>>;
	error?: Error;
}

const csvStringToArray = (
	csvData: string,
	delimiter = ','
): Array<Array<string>> => {
	return csvData
		.split('\r\n')
		.filter((line) => line && line.trim() && !line.startsWith('//'))
		.map((line) => line.split(delimiter));
};

export const parseCSVFileAsync = (csvFile: File) =>
	new Promise<CSVFileParsedResponse>((resolve, reject) => {
		const response: CSVFileParsedResponse = {
			data: [],
			error: undefined,
		};
		try {
			const fileReader = new FileReader();
			fileReader.onload = () => {
				response.data = csvStringToArray(fileReader.result as string);
				resolve(response);
			};
			fileReader.readAsText(csvFile, 'UTF-8');
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (e: any) {
			console.log(e);
			response.error = e;
			reject(response);
		}
	});
