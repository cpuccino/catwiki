import dotenv from "dotenv";

import express, { json, urlencoded } from "express";
import cors from "cors";
import morgan from "morgan";

import { getCatWikiApiKey, getPort, validateEnvironmentVariables } from "./utilities/environment";

const main = () => {
	dotenv.config();
	validateEnvironmentVariables();

	const app = express();

	const port = getPort();
	console.log(getPort(), getCatWikiApiKey());

	app.use(cors());
	app.use(json());
	app.use(urlencoded({ extended: false }));
	app.use(morgan("dev"));

	app.listen(port, () => {
		console.log(`Listening to port ${port}.`);
	});
};

main();
