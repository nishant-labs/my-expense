import dotenv from 'dotenv';

export const initEnv = () => {
	console.log(`Loading Configuration for ${process.env.NODE_ENV}`);
	dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
};

// Initialize Environment config
initEnv();
