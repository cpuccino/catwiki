import { FC } from "react";

import BreedSearch from "./breed-search";

const HomeBanner: FC = () => (
	<div className="c-home-banner">
		<img
			className="c-home-banner__background"
			src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
			alt=""
		/>
		<div className="c-home-banner__content">
			<h1 className="c-home-banner__heading">CatWiki</h1>
			<h4 className="c-home-banner__excerpt">Get to know more about your cat breed</h4>
			<BreedSearch />
		</div>
	</div>
);

export default HomeBanner;
