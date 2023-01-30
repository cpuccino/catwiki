import { AppProps } from "next/app";
import { StrictMode } from "react";
import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
  #root, #__next {
    isolation: isolate;
  }

  *, *::before, *::after {
    margin: 0;
    box-sizing: border-box;
  }
  
  html, body {
    height: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word; 
    hyphens: auto;
  }
`;

const App = (props: AppProps) => {
	const { Component, pageProps } = props;

	return (
		<>
			<Reset />
			<StrictMode>
				<Component {...pageProps} />
			</StrictMode>
		</>
	);
};

export default App;
