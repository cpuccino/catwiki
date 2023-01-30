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
	image?: string;
};

export type CatImage = {
	id: string;
	url: string;
	breedId: string;
	breedName: string;
};
