import { RouteConfigItem } from 'node-rest-server';

export const pingRouteHandler: RouteConfigItem = {
	method: 'GET',
	status: 200,
	controller: () => ({
		payload: 'pong',
	}),
};

export const healthRouteHandler: RouteConfigItem = {
	method: 'GET',
	status: 200,
	controller: () => ({
		payload: 'UP',
	}),
};
