import Head from "next/head";
import { FC } from "react";

const Index: FC = () => {
	return (
		<div>
			<Head>
				<title>Home</title>
			</Head>
			<div className="is-size-1">Hello world! - client</div>
		</div>
	);
};

export default Index;
