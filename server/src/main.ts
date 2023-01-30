import express from "express";

const main = () => {
  const app = express();
  const port = 5000;
  
  app.listen(port, () => {
		console.log(`Listening to port ${port}.`);
	});
}

main();