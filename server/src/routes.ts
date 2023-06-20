import { RouteConfiguration } from 'node-rest-server';
import { SourceSettingsModel } from './database/models/source-settings.js';
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
};

export default routes;
