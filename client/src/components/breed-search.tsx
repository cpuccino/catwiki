import { ChangeEvent, FC, useState } from "react";

import { FaTimes } from "react-icons/fa";
import { CatBreed } from "src/api/catwiki";
import { catBreedMock } from "src/mock/cat-breed";

const BreedSearch: FC = () => {
	const [value, setValue] = useState("");

	const handleOnEmptyClick = () => {
		setValue("");
	};

	const handleOnInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.currentTarget.value);
	};

	const renderPopup = (breeds: CatBreed[]) => {
		const matches = breeds.filter(breed => breed.name.includes(value));

		if (!matches.length) {
			return <div className="c-breed-search__popup-empty is-size-4">No results found</div>;
		}

		return matches.map(breed => (
			<div key={breed.name} className="c-breed-search__popup-item is-size-4">
				{breed.name}
			</div>
		));
	};

	return (
		<div className="c-breed-search">
			<input
				className="c-breed-search__input"
				placeholder="Enter your breed"
				onChange={handleOnInputChange}
				value={value}
			/>
			<div className="c-breed-search__empty" onClick={handleOnEmptyClick}>
				<FaTimes />
			</div>
			{value && <div className="c-breed-search__popup">{renderPopup(catBreedMock)}</div>}
		</div>
	);
};

export default BreedSearch;
