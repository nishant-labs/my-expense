/* eslint-disable no-undef */
import { writeFileSync } from 'node:fs';
import process from 'node:process';

const SERVER_HOST = process.env.SERVER_HOST;
const SERVER_PORT = process.env.SERVER_PORT;

console.group('PostProcessing config.json');
console.log('SERVER_HOST: ', SERVER_HOST);
console.log('SERVER_PORT: ', SERVER_PORT);
console.groupEnd();

writeFileSync(
	'./client/config.json',
	JSON.stringify({
		baseUrl: `${SERVER_HOST}:${SERVER_PORT}`,
	}),
);
