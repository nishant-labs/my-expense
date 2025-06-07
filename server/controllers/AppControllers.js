export const pingRouteHandler = {
    method: 'GET',
    status: 200,
    controller: () => ({
        payload: 'pong',
    }),
};
export const healthRouteHandler = {
    method: 'GET',
    status: 200,
    controller: () => ({
        payload: 'UP',
    }),
};
