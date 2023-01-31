import dotenv from "dotenv";

import express, { json, urlencoded } from "express";
import cors from "cors";
import morgan from "morgan";

import { getPort, validateEnvironmentVariables } from "./utilities/environment";
import { catWikiRouter } from "./routes/catwiki";

const main = () => {
	dotenv.config();
	validateEnvironmentVariables();

	const app = express();

	const port = getPort();

	app.use(cors());
	app.use(json());
	app.use(urlencoded({ extended: false }));
	app.use(morgan("dev"));

	app.use(catWikiRouter);

	app.listen(port, () => {
		console.log(`Listening to port ${port}.`);
	});
};

main();
