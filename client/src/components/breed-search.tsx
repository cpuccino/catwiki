import { ChangeEvent, FC, useState } from "react";

import { FaTimes } from "react-icons/fa";
import { catBreedMock } from "src/mock/cat-breed";

const BreedSearch: FC = () => {
	const [value, setValue] = useState("");

	const handleOnEmptyClick = () => {
		setValue("");
	};

	const handleOnInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.currentTarget.value);
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
			<div className="c-breed-search__popup">
				{catBreedMock.map(breed => (
					<div className="c-breed-search__popup-item is-size-4">{breed.name}</div>
				))}
			</div>
		</div>
	);
};

export default BreedSearch;
