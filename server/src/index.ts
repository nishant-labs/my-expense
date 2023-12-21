import RestServer, { ServerConfiguration } from 'node-rest-server';
import mongoose from 'mongoose';
import routes from './routes.js';

const serverConfig: ServerConfiguration = {
	basePath: '/api',
	port: 7800,
	logger: true,
	getDatabaseConnection: () => {
		return mongoose.connect('mongodb://localhost:27017/myexpense');
	},
};

RestServer(routes, serverConfig);
