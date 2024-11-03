import { ControllerOptions, HttpRequest, RouteConfigItem } from 'node-rest-server';
import { TransactionCategoryTable } from '../../database/index.js';
import { ObjectId } from 'mongoose';

interface InsertCategoryPayload {
	name?: string;
	matchers?: Array<string>;
	chartColor?: string;
	budget?: number;
	sourceId?: ObjectId;
}

const getCategoryHandler = async (requestData: HttpRequest, { getDatabaseConnection }: ControllerOptions) => {
	await getDatabaseConnection!(requestData);
	const response = await TransactionCategoryTable.findAll();

	return {
		data: response.map((category) => ({
			id: category['_id'],
			name: category.categoryName,
			matchers: category.transactionMatchers,
			budget: category.budget,
			chartColor: category.chartColor,
			sourceId: category.sourceId,
			isEnabled: category.isEnabled,
		})),
		status: 200,
	};
};

const insertCategoryHandler = async (requestData: HttpRequest, { getDatabaseConnection }: ControllerOptions) => {
	const { budget, chartColor, matchers, name, sourceId } = requestData.body as InsertCategoryPayload;
	await getDatabaseConnection!(requestData);
	await TransactionCategoryTable.create({
		transactionMatchers: matchers,
		categoryName: name,
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

	const data = await TransactionCategoryTable.updateById(pathParams?.id, sanitizedPayload);
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
		const response = await TransactionCategoryTable.deleteById(pathParams?.id);
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
