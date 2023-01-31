import Link from "next/link";
import { FC } from "react";

const HomePromotion: FC = () => (
	<div className="c-home-promotion">
		<div className="c-home-promotion__left">
			<h2 className="c-home-promotion__title is-size-1">Why should you have a cat?</h2>
			<p className="c-home-promotion__excerpt">
				Having a cat around you can actually trigger the release of calming chemicals in your body
				which lower your stress and anxiety levels
			</p>
			<Link className="c-home-promotion__read-more" href="/">
				READ MORE ⟶
			</Link>
		</div>
		<div className="c-home-promotion__right">
			<img src="/assets/images/home-promotion.webp" alt="" />
		</div>
	</div>
);

export default HomePromotion;
