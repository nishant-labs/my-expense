import './services/StartupService.js';

import RestServer, { ServerConfiguration } from 'node-rest-server';
import mongoose from 'mongoose';
import { MONGO_DB_CONNECTION_URL, PORT } from './constants/environment.js';
import routes from './routes.js';

const databaseConnectionInit = () => {
	let isInit = false;

	return async (url: string) => {
		try {
			if (!isInit) {
				isInit = true;
				await mongoose.connect(url, {
					dbName: 'myexpense',
					serverApi: { version: '1', strict: true, deprecationErrors: true },
				});
				console.log('Pinged your deployment. You successfully connected to MongoDB!');
			}
		} catch (e) {
			isInit = false;
			console.error('Error: ', e);
		}
	};
};

const createConnection = databaseConnectionInit();

const serverConfig: ServerConfiguration = {
	basePath: '/api',
	port: PORT,
	logger: {
		enable: true,
		name: 'my-expense-api',
		level: 'info',
		file: './logs/my-expense-api.log',
	},
	getDatabaseConnection: async () => {
		if (!MONGO_DB_CONNECTION_URL) {
			throw Error('MONGO_DB_CONNECTION_URL not defined');
		}
		return createConnection(MONGO_DB_CONNECTION_URL);
	},
};

RestServer(routes, serverConfig);
