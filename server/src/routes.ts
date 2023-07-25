import { RouteConfiguration } from 'node-rest-server';
import { TransactionModel } from './database/models/TransactionsModel.js';
import { sourceApiHandlers } from './controllers/SourceSettingsControllers.js';
import { groupApiHandlers } from './controllers/GroupSettingsControllers.js';
import { transactionsApiHandlers } from './controllers/TransactionsControllers.js';

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

	'/transactions/:monthAndYear?': transactionsApiHandlers,

	// Settings API
	'/settings/sources/:id?': sourceApiHandlers,
	'/settings/groups/:id?': groupApiHandlers,
};

export default routes;
