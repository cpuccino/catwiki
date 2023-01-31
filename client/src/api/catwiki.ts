import { getApiUrl } from "../utilities/environment";

export type CatBreed = {
	id: string;
	name: string;
	description: string;
	origin: string;
	temperament: string;
	lifespan: string;
	traits: {
		adaptability: number;
		affectionLevel: number;
		childFriendly: number;
		grooming: number;
		intelligence: number;
		healthIssues: number;
		socialNeeds: number;
		strangerFriendly: number;
	};
	referenceImageId?: string;
	image?: string;
};

export type CatImage = {
	id: string;
	url: string;
	breedId: string;
	breedName: string;
};

export const getBreeds = async (): Promise<CatBreed[]> => {
	const url = `${getApiUrl()}/breeds`;
	return await fetch(url).then(res => res.json());
};

export const getBreed = async (breedId: string): Promise<CatBreed | null> => {
	const url = `${getApiUrl()}/breeds/${breedId}`;
	return await fetch(url).then(res => res.json());
};

export const getBreedImages = async (breedId?: string): Promise<CatImage[]> => {
	const url = `${getApiUrl()}/images${breedId ? `?breeds=${breedId}` : ""}`;
	return await fetch(url).then(res => res.json());
};
