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
					Read more ⟶
				</Link>
			</div>
			<div className="c-home-promotion__right">
				<img src="https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" />
			</div>
		</div>
	);

export default HomePromotion;
