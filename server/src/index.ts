import './services/StartupService.js';

import RestServer, { ServerConfiguration } from 'node-rest-server';
import mongoose from 'mongoose';
import { MONGO_DB_CONNECTION_URL, PORT } from './constants/environment.js';
import routes from './routes.js';

const serverConfig: ServerConfiguration = {
	basePath: '/api',
	port: PORT,
	logger: true,
	getDatabaseConnection: () => {
		if (!MONGO_DB_CONNECTION_URL) {
			throw Error('MONGO_DB_CONNECTION_URL not defined');
		}
		return mongoose.connect(MONGO_DB_CONNECTION_URL);
	},
};

RestServer(routes, serverConfig);
