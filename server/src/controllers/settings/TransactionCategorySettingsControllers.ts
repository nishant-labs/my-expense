import { ControllerOptions, HttpRequest, RouteConfigItem } from 'node-rest-server';
import { TransactionCategoryDataModel } from '../../database/mongodb/models/index.js';

interface InsertCategoryPayload {
	name?: string;
	matchers?: string;
	chartColor?: string;
	budget?: string;
	sourceId?: string;
}

const getCategoryHandler = async (requestData: HttpRequest, { getDatabaseConnection }: ControllerOptions) => {
	await getDatabaseConnection!(requestData);
	const response = await TransactionCategoryDataModel.find();

	return {
		data: response.map((group) => ({
			id: group['_id'],
			name: group.groupName,
			matchers: group.transactionMatchers,
			budget: group.budget,
			chartColor: group.chartColor,
			sourceId: group.sourceId,
			isEnabled: group.isEnabled,
		})),
		status: 200,
	};
};

const insertCategoryHandler = async (requestData: HttpRequest, { getDatabaseConnection }: ControllerOptions) => {
	const { budget, chartColor, matchers, name, sourceId } = requestData.body as InsertCategoryPayload;
	await getDatabaseConnection!(requestData);
	await TransactionCategoryDataModel.create({
		transactionMatchers: matchers,
		groupName: name,
		chartColor: chartColor,
		isEnabled: true,
		sourceId,
		budget,
	});
	return {
		data: 'Successfully inserted data',
		status: 200,
	};
};

const updateCategoryHandler = async (requestData: HttpRequest, { getDatabaseConnection }: ControllerOptions) => {
	const { body, pathParams } = requestData;
	const { matchers, ...restPayload } = body as InsertCategoryPayload;
	await getDatabaseConnection!(requestData);

	const sanitizedPayload = {
		...restPayload,
		...(matchers ? { transactionMatchers: matchers } : {}),
	};

	const data = await TransactionCategoryDataModel.findByIdAndUpdate(pathParams?.id, sanitizedPayload);
	return {
		data,
		status: 200,
	};
};

const deleteCategoryHandler = async (requestData: HttpRequest, { getDatabaseConnection }: ControllerOptions) => {
	const { pathParams } = requestData;
	let deleteCount = 0;
	if (pathParams?.id) {
		await getDatabaseConnection!(requestData);
		const response = await TransactionCategoryDataModel.deleteOne({
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

export const transactionCategoryApiHandlers: Array<RouteConfigItem> = [
	{
		method: 'GET',
		controller: getCategoryHandler,
	},
	{
		method: 'POST',
		controller: insertCategoryHandler,
	},
	{
		method: 'PUT',
		controller: updateCategoryHandler,
	},
	{
		method: 'DELETE',
		controller: deleteCategoryHandler,
	},
];
