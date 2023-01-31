import { FC } from "react";

import BreedSearch from "./breed-search";

const HomeBanner: FC = () => {
	return (
		<div className="c-home-banner">
			<img
				className="c-home-banner__background"
				src="https://img5.goodfon.com/wallpaper/nbig/0/16/chiornyi-fon-kot-vzgliad-koshka-kisa.jpg"
			/>
			<div className="c-home-banner__content">
				<h1 className="c-home-banner__heading">CatWiki</h1>
				<h4>Get to know more about your cat breed</h4>
				<BreedSearch />
			</div>
		</div>
	);
};

export default HomeBanner;
