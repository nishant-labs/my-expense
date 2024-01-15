import { RouteConfiguration } from 'node-rest-server';
import { sourceApiHandlers } from './controllers/settings/SourceSettingsControllers';
import { groupApiHandlers } from './controllers/settings/GroupSettingsControllers';
import { transactionsApiHandlers } from './controllers/transactions/TransactionsControllers';

const routes: RouteConfiguration = {
	'/transactions/:accountType/:monthAndYear?': transactionsApiHandlers,

	// Settings API
	'/settings/sources/:id?': sourceApiHandlers,
	'/settings/groups/:id?': groupApiHandlers,
};

export default routes;
