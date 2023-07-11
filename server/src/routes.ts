import { RouteConfiguration } from 'node-rest-server';
import { SourceReferenceDataModel } from './database/models/source-reference-data.js';
import { TransactionModel } from './database/models/transactions.js';

const routes: RouteConfiguration = {
	'/income': {
		method: 'GET',
		status: 200,
		controller: async (requestData, { getDatabaseConnection }) => {
			await getDatabaseConnection!(requestData);
			const data = await TransactionModel.find();

			return {
				data,
			};
		},
	},

	'/settings/sources/:id?': [
		{
			method: 'GET',
			controller: async (requestData, { getDatabaseConnection }) => {
				await getDatabaseConnection!(requestData);
				const sourceRef = await SourceReferenceDataModel.find();

				return {
					data: sourceRef.map((source) => ({
						id: source['_id'],
						identifier: source.sourceId,
						name: source.value,
						isEnabled: source.isEnabled,
					})),
					status: 200,
				};
			},
		},
		{
			method: 'POST',
			controller: async (requestData, { getDatabaseConnection }) => {
				const payload = requestData.body;
				await getDatabaseConnection!(requestData);
				const data = await SourceReferenceDataModel.create({
					sourceId: payload.identifier,
					value: payload.name,
					isEnabled: true,
				});
				return {
					data: 'Successfully inserted data',
					status: 200,
				};
			},
		},
		{
			method: 'PUT',
			controller: async (requestData, { getDatabaseConnection }) => {
				const payload = requestData.body;
				await getDatabaseConnection!(requestData);
				const data = await SourceReferenceDataModel.findByIdAndUpdate(
					requestData.pathParams.id,
					payload
				);
				return {
					data,
					status: 200,
				};
			},
		},
		{
			method: 'DELETE',
			controller: async (requestData, { getDatabaseConnection }) => {
				let deleteCount = 0;
				if (requestData.pathParams.id) {
					await getDatabaseConnection!(requestData);
					const response = await SourceReferenceDataModel.deleteOne({
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
			},
		},
	],
};

export default routes;
