export const getPort = () => process.env.PORT || 5000;
export const getCatWikiApiKey = () => process.env.CATWIKI_API_KEY!;

export const validateEnvironmentVariables = () => {
	if (!process.env.CATWIKI_API_KEY) {
		throw new Error('Missing "CATWIKI_API_KEY" env.');
	}
};
