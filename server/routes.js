import { sourceApiHandlers } from './controllers/settings/SourceSettingsControllers.js';
import { transactionCategoryApiHandlers } from './controllers/settings/TransactionCategorySettingsControllers.js';
import { transactionsApiHandlers } from './controllers/transactions/TransactionsControllers.js';
import { pingRouteHandler } from './controllers/AppControllers.js';
const routes = {
    '/ping': pingRouteHandler,
    '/health': pingRouteHandler,
    // Transaction API
    '/transactions/:accountType{/:monthAndYear}': transactionsApiHandlers,
    // Settings API
    '/settings/sources{/:id}': sourceApiHandlers,
    '/settings/categories{/:id}': transactionCategoryApiHandlers,
};
export default routes;
