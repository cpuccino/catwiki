import { FC } from "react";
import { CatBreed } from "../api/catwiki";

type Props = {
	breed: CatBreed;
};

const BreedDetail: FC<Props> = props => {
	const { breed } = props;

	const { name, description, image, temperament, origin, lifespan, traits } = breed;

	return (
		<div className="c-breed-detail">
			<div className="c-breed-detail__left">
				<div className="c-breed-detail__breed-img">
					<img src={image} alt={name} />
				</div>
			</div>
			<div className="c-breed-detail__right">
				<h1 className="c-breed-detail__name">{name}</h1>
				<p className="c-breed-detail__description">{description}</p>

				<div className="c-breed-detail__info">
					<h4 className="c-breed-detail__label">Temperament:</h4>
					<span className="c-breed-detail__value">{temperament}</span>
				</div>
				<div className="c-breed-detail__info">
					<h4 className="c-breed-detail__label">Origin:</h4>
					<span className="c-breed-detail__value">{origin}</span>
				</div>
				<div className="c-breed-detail__info">
					<h4 className="c-breed-detail__label">Lifespan:</h4>
					<span className="c-breed-detail__value">{lifespan} years</span>
				</div>

				{Object.keys(traits).map(key => {
					const traitLabel = key.charAt(0).toUpperCase() + key.replace(/([A-Z])/g, " $1").slice(1);
					const value = traits[key as keyof typeof traits];

					return (
						<div key={traitLabel} className="c-breed-detail__trait">
							<h4 className="c-breed-detail__label">{traitLabel}:</h4>
							<div className="c-breed-detail__bars">
								{Array(5)
									.fill(null)
									.map((_, idx) => (
										<div
											className={`c-breed-detail__bar ${idx <= value ? "is-filled" : ""}`}
											key={idx}
										/>
									))}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default BreedDetail;
