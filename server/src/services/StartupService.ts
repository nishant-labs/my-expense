import dotenv from 'dotenv';

export const initEnv = (nodeEnv: string | undefined) => {
	if (nodeEnv) {
		console.log(`Loading Configuration for ${nodeEnv}`);
		dotenv.config({ path: `.env.${nodeEnv}` });
	} else {
		dotenv.config();
	}
};

// Initialize Environment config
initEnv(process.env.NODE_ENV);
