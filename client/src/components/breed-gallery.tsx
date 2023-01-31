import { FC } from "react";

import { CatImage } from "src/api/catwiki";

type Props = {
	breedImages: CatImage[];
};

const MAX_IMAGE_COUNT = 8;

const BreedGallery: FC<Props> = props => {
	const { breedImages } = props;

	return (
		<div className="c-breed-gallery">
			<h2 className="c-breed-gallery__title">Other photos</h2>

			<div className="c-breed-gallery__exhibition">
				{breedImages.slice(0, MAX_IMAGE_COUNT).map(image => (
					<div className="c-breed-gallery__breed">
						<div className="c-breed-gallery__breed-image">
							<img src={image.url} alt={image.breedName} />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default BreedGallery;
