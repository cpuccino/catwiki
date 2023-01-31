import Link from "next/link";
import { FC } from "react";
import { CatBreed } from "../api/catwiki";

const MAX_IMAGE_COUNT = 4;

type Props = {
	breeds: CatBreed[];
};

const HomeDiscover: FC<Props> = props => {
	const { breeds } = props;

	return (
		<div className="c-home-discover">
			<span className="c-home-discover__heading">Most searched breeds</span>
			<div className="c-home-discover__excerpt">
				<h2 className="c-home-discover__upsell is-size-1">66+ Breeds for you to discover</h2>
				<Link className="c-home-discover__see-more" href="/">
					SEE MORE ⟶
				</Link>
			</div>
			<div className="c-home-discover__exhibition">
				{breeds.slice(0, MAX_IMAGE_COUNT).map(breed => (
					<Link className="c-home-discover__breed" key={breed.id} href={`/breeds/${breed.id}`}>
						<div className="c-home-discover__breed-image">
							<img src={breed.image} alt={breed.name} />
						</div>
						<span>{breed.name}</span>
					</Link>
				))}
			</div>
		</div>
	);
};

export default HomeDiscover;
