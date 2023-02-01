import { useRouter } from "next/router";
import { ChangeEvent, FC, useState } from "react";
import { FaTimes } from "react-icons/fa";

import { CatBreed } from "../api/catwiki";

type Props = {
	breeds: CatBreed[];
};

const BreedSearch: FC<Props> = props => {
	const { breeds } = props;

	const [value, setValue] = useState("");
	const router = useRouter();

	const handleOnEmptyClick = () => {
		setValue("");
	};

	const handleOnInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.currentTarget.value);
	};

	const handleOnBreedClick = (breedId: string) => {
		router.push(`/breeds/${breedId}`);
	};

	const renderPopup = (items: CatBreed[]) => {
		const matches = items.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));

		if (!matches.length) {
			return <div className="c-breed-search__popup-empty is-size-4">No results found</div>;
		}

		return matches.map(item => (
			<div
				key={item.name}
				className="c-breed-search__popup-item is-size-4"
				onClick={() => handleOnBreedClick(item.id)}
			>
				{item.name}
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
			{value && <div className="c-breed-search__popup">{renderPopup(breeds)}</div>}
		</div>
	);
};

export default BreedSearch;
