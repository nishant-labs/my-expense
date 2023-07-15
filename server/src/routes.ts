import { RouteConfiguration } from 'node-rest-server';
import { TransactionModel } from './database/models/transactions.js';
import { sourceApiHandlers } from './controllers/SourceSettingsControllers.js';
import { groupApiHandlers } from './controllers/GroupSettingsControllers.js';

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

	'/settings/sources/:id?': sourceApiHandlers,
	'/settings/groups/:id?': groupApiHandlers,
};

export default routes;
