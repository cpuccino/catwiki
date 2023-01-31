import axios from "axios";

import { getCatWikiApiKey } from "../utilities/environment";

export class CatWikiService {
	public static readonly API_VERSION = "v1";
	public static readonly BASE_PATH = `https://api.thecatapi.com/${CatWikiService.API_VERSION}`;

	public getBreed = async (breedId: string): Promise<CatBreed | null> => {
		const path = `${CatWikiService.BASE_PATH}/breeds/${breedId}`;
		const headers = { "x-api-key": getCatWikiApiKey() };

		const { data } = await axios<CatWikiApiGetBreedResponseData>(path, {
			headers
		});

		return Object.keys(data).length ? this.extractBreedFromGetBreedsResponse(data) : null;
	};

	public getBreeds = async (): Promise<CatBreed[]> => {
		const path = `${CatWikiService.BASE_PATH}/breeds`;
		const headers = { "x-api-key": getCatWikiApiKey() };
		const params = { limit: 100 };

		const { data } = await axios<CatWikiApiGetBreedsResponseData>(path, {
			headers,
			params
		});

		return data.map(breedsResponse => this.extractBreedFromGetBreedsResponse(breedsResponse));
	};

	public getImages = async (breedIds?: string): Promise<CatImage[]> => {
		const path = `${CatWikiService.BASE_PATH}/images/search`;
		const headers = { "x-api-key": getCatWikiApiKey() };
		const params = { has_breeds: 1, limit: 25, breed_ids: breedIds };

		const { data } = await axios<CatWikiApiGetImagesResponseData>(path, {
			headers,
			params
		});

		return data
			.filter(image => image.breeds.length)
			.map(image => ({
				id: image.id,
				url: image.url,
				breedId: image.breeds[0].id,
				breedName: image.breeds[0].name
			}));
	};

	private extractBreedFromGetBreedsResponse = (
		response: CatWikiApiGetBreedResponseData
	): CatBreed => {
		const {
			id,
			name,
			description,
			origin,
			temperament,
			life_span,
			adaptability,
			affection_level,
			child_friendly,
			grooming,
			intelligence,
			health_issues,
			social_needs,
			stranger_friendly,
			image,
			reference_image_id
		} = response;

		return {
			id,
			name,
			description,
			origin,
			temperament,
			lifespan: life_span,
			traits: {
				adaptability,
				affectionLevel: affection_level,
				childFriendly: child_friendly,
				grooming,
				intelligence,
				healthIssues: health_issues,
				socialNeeds: social_needs,
				strangerFriendly: stranger_friendly
			},
			image: image?.url,
			referenceImageId: reference_image_id
		};
	};
}

type CatWikiApiGetBreedResponseData = {
	weight: {
		imperial: string;
		metric: string;
	};
	id: string;
	name: string;
	cfa_url?: string;
	vetstreet_url?: string;
	vcahospitals_url?: string;
	temperament: string;
	origin: string;
	country_codes: string;
	country_code: string;
	description: string;
	life_span: string;
	indoor: number;
	lap?: number;
	alt_names?: string;
	adaptability: number;
	affection_level: number;
	child_friendly: number;
	dog_friendly: number;
	energy_level: number;
	grooming: number;
	health_issues: number;
	intelligence: number;
	shedding_level: number;
	social_needs: number;
	stranger_friendly: number;
	vocalisation: number;
	experimental: number;
	hairless: number;
	natural: number;
	rare: number;
	rex: number;
	suppressed_tail: number;
	short_legs: number;
	wikipedia_url?: string;
	hypoallergenic: number;
	reference_image_id?: string;
	image?: {
		id: string;
		width: number;
		height: number;
		url: string;
	};
	cat_friendly?: number;
	bidability?: number;
};

type CatWikiApiGetBreedsResponseData = CatWikiApiGetBreedResponseData[];

type CatWikiApiGetImagesResponseData = {
	id: string;
	url: string;
	width: number;
	height: number;
	breeds: CatWikiApiGetBreedResponseData[];
}[];

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
