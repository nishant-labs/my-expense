import './services/StartupService.js';

import RestServer, { ServerConfiguration } from 'node-rest-server';
import mongoose from 'mongoose';
import { MONGO_DB_CONNECTION_URL } from './constants/index.js';
import routes from './routes.js';

const serverConfig: ServerConfiguration = {
	basePath: '/api',
	port: 7800,
	logger: true,
	getDatabaseConnection: () => {
		return mongoose.connect(MONGO_DB_CONNECTION_URL);
	},
};

RestServer(routes, serverConfig);
