import RestServer, { ServerConfiguration } from 'node-rest-server';
import mongoose from 'mongoose';
import ngrok from '@ngrok/ngrok';

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

// Get your endpoint online
ngrok
	.connect({ addr: 7800, authtoken_from_env: true })
	.then((listener) => console.log(`Ingress established at: ${listener.url()}`));
