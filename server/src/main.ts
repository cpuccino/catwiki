import express, { json, urlencoded } from "express";
import cors from "cors";
import morgan from "morgan";

const main = () => {
	const app = express();
	const port = 5000;

	app.use(cors());
	app.use(json());
	app.use(urlencoded({ extended: false }));
	app.use(morgan("dev"));

	app.listen(port, () => {
		console.log(`Listening to port ${port}.`);
	});
};

main();
