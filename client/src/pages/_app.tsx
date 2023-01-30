import { AppProps } from "next/app";
import { StrictMode } from "react";

import "../styles/main.scss";

const App = (props: AppProps) => {
	const { Component, pageProps } = props;

	return (
		<StrictMode>
			<Component {...pageProps} />
		</StrictMode>
	);
};

export default App;
