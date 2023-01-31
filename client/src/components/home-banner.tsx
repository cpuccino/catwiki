import { FC } from "react";

import { CatBreed } from "../api/catwiki";
import BreedSearch from "./breed-search";

type Props = {
	breeds: CatBreed[];
};

const HomeBanner: FC<Props> = props => {
	const { breeds } = props;
	return (
		<div className="c-home-banner">
			<img className="c-home-banner__background" src="/assets/images/home-banner.webp" alt="" />
			<div className="c-home-banner__content">
				<h1 className="c-home-banner__heading">CatWiki</h1>
				<h4 className="c-home-banner__excerpt">Get to know more about your cat breed</h4>
				<BreedSearch breeds={breeds} />
			</div>
		</div>
	);
};

export default HomeBanner;
