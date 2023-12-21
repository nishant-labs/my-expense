import { ControllerOptions, HttpRequest, RouteConfigItem } from 'node-rest-server';
import { GroupReferenceDataModel } from '../database/models/GroupReferenceModel.js';

interface InsertGroupPayload {
	name?: string;
	matchers?: string;
	chartColor?: string;
	budget?: string;
	sourceId?: string;
}

const getGroupListHandler = async (requestData: HttpRequest, { getDatabaseConnection }: ControllerOptions) => {
	await getDatabaseConnection!(requestData);
	const response = await GroupReferenceDataModel.find();

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

const insertGroupHandler = async (requestData: HttpRequest, { getDatabaseConnection }: ControllerOptions) => {
	const { budget, chartColor, matchers, name, sourceId } = requestData.body as InsertGroupPayload;
	await getDatabaseConnection!(requestData);
	await GroupReferenceDataModel.create({
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

const updateGroupHandler = async (requestData: HttpRequest, { getDatabaseConnection }: ControllerOptions) => {
	const { matchers, ...restPayload } = requestData.body as InsertGroupPayload;
	await getDatabaseConnection!(requestData);

	const sanitizedPayload = {
		...restPayload,
		...(matchers ? { transactionMatchers: matchers } : {}),
	};

	const data = await GroupReferenceDataModel.findByIdAndUpdate(requestData.pathParams.id, sanitizedPayload);
	return {
		data,
		status: 200,
	};
};

const deleteGroupHandler = async (requestData: HttpRequest, { getDatabaseConnection }: ControllerOptions) => {
	let deleteCount = 0;
	if (requestData.pathParams.id) {
		await getDatabaseConnection!(requestData);
		const response = await GroupReferenceDataModel.deleteOne({
			_id: requestData.pathParams.id,
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

export const groupApiHandlers: Array<RouteConfigItem> = [
	{
		method: 'GET',
		controller: getGroupListHandler,
	},
	{
		method: 'POST',
		controller: insertGroupHandler,
	},
	{
		method: 'PUT',
		controller: updateGroupHandler,
	},
	{
		method: 'DELETE',
		controller: deleteGroupHandler,
	},
];
