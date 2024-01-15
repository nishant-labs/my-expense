import { ControllerOptions, HttpRequest, RouteConfigItem } from 'node-rest-server';
import { SourceReferenceDataModel } from '../../database/models/SourceReferenceModel';

interface InsertSourcePayload {
	name?: string;
	chartColor?: string;
	isExpense?: string;
	isEnabled?: boolean;
}

const getSourceListHandler = async (requestData: HttpRequest, { getDatabaseConnection }: ControllerOptions) => {
	await getDatabaseConnection!(requestData);
	const response = await SourceReferenceDataModel.find();

	return {
		data: response.map((source) => ({
			id: source['_id'],
			name: source.sourceName,
			chartColor: source.chartColor,
			isExpense: source.isExpense,
			isEnabled: source.isEnabled,
		})),
		status: 200,
	};
};

const insertSourceHandler = async (requestData: HttpRequest, { getDatabaseConnection }: ControllerOptions) => {
	const payload = requestData.body as InsertSourcePayload;
	await getDatabaseConnection!(requestData);
	await SourceReferenceDataModel.create({
		sourceName: payload.name,
		chartColor: payload.chartColor,
		isExpense: payload.isExpense,
		isEnabled: true,
	});
	return {
		data: 'Successfully inserted data',
		status: 200,
	};
};

const updateSourceHandler = async (requestData: HttpRequest, { getDatabaseConnection }: ControllerOptions) => {
	const { body, pathParams } = requestData;
	const { name, ...restPayload } = body as InsertSourcePayload;
	const sanitizedPayload = { ...restPayload, ...(name ? { sourceName: name } : {}) };

	await getDatabaseConnection!(requestData);
	const data = await SourceReferenceDataModel.findByIdAndUpdate(pathParams?.id, sanitizedPayload);
	return {
		data,
		status: 200,
	};
};

const deleteSourceHandler = async (requestData: HttpRequest, { getDatabaseConnection }: ControllerOptions) => {
	const { pathParams } = requestData;
	let deleteCount = 0;
	if (pathParams?.id) {
		await getDatabaseConnection!(requestData);
		const response = await SourceReferenceDataModel.deleteOne({
			_id: pathParams?.id,
		});
		deleteCount = response.deletedCount;
	}
	if (deleteCount > 0) {
		return {
			data: 'Successfully Deleted Data',
			status: 200,
		};
	}
	return {
		data: 'Failed to Delete Data',
		status: 400,
	};
};

export const sourceApiHandlers: Array<RouteConfigItem> = [
	{
		method: 'GET',
		controller: getSourceListHandler,
	},
	{
		method: 'POST',
		controller: insertSourceHandler,
	},
	{
		method: 'PUT',
		controller: updateSourceHandler,
	},
	{
		method: 'DELETE',
		controller: deleteSourceHandler,
	},
];
