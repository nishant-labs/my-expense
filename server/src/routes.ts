import { RouteConfiguration } from 'node-rest-server';
import { sourceApiHandlers } from './controllers/settings/SourceSettingsControllers.js';
import { groupApiHandlers } from './controllers/settings/GroupSettingsControllers.js';
import { transactionsApiHandlers } from './controllers/transactions/TransactionsControllers.js';

const routes: RouteConfiguration = {
	'/transactions/:accountType/:monthAndYear?': transactionsApiHandlers,

	// Settings API
	'/settings/sources/:id?': sourceApiHandlers,
	'/settings/groups/:id?': groupApiHandlers,
};

export default routes;
