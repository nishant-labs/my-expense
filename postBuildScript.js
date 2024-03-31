const fs = require('fs');

const SERVER_HOST = process.env.SERVER_HOST;
const SERVER_PORT = process.env.SERVER_PORT;

console.group('PostProcessing config.json');
console.log('SERVER_HOST: ', SERVER_HOST);
console.log('SERVER_PORT: ', SERVER_PORT);
console.groupEnd();

fs.writeFileSync(
	'./client/config.json',
	JSON.stringify({
		baseUrl: `${SERVER_HOST}:${SERVER_PORT}`,
	}),
);
