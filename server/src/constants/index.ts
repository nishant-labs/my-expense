import { MONGO_DB } from './environment.js';

export const MONGO_DB_CONNECTION_URL = `mongodb+srv://${MONGO_DB.USER_ID}:${MONGO_DB.PASS}@${MONGO_DB.HOST}/?retryWrites=true&w=majority&appName=${MONGO_DB.CLUSTER}`;
