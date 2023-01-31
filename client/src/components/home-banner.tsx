import { FC } from "react";

import BreedSearch from "./breed-search";

const HomeBanner: FC = () => (
	<div className="c-home-banner">
		<img className="c-home-banner__background" src="/assets/images/home-banner.webp" alt="" />
		<div className="c-home-banner__content">
			<h1 className="c-home-banner__heading">CatWiki</h1>
			<h4 className="c-home-banner__excerpt">Get to know more about your cat breed</h4>
			<BreedSearch />
		</div>
	</div>
);

export default HomeBanner;
