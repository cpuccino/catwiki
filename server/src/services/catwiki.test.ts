import axios from "axios";

import { CatWikiService } from "./catwiki";
import {
	getBreedsSuccessResponseDataMock,
	getBreedSuccessResponseDataMock,
	getImagesSuccessResponseDataMock
} from "./catwiki.mock";

jest.mock("axios");
const mockedAxios = axios as jest.MockedFunction<typeof axios>;

describe("Service: CatWikiService", () => {
	const catWikiService = new CatWikiService();

	describe("Given the getBreed method is called", () => {
		describe("And breedId is valid", () => {
			beforeEach(() => {
				mockedAxios.mockResolvedValue({ data: getBreedSuccessResponseDataMock });
			});

			it("Should return a CatBreed object", async () => {
				const breed = await catWikiService.getBreed("VALID_BREED_ID");

				expect(breed).toEqual({
					id: "abys",
					name: "Abyssinian",
					description:
						"The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
					origin: "Egypt",
					temperament: "Active, Energetic, Independent, Intelligent, Gentle",
					lifespan: "14 - 15",
					traits: {
						adaptability: 5,
						affectionLevel: 5,
						childFriendly: 3,
						grooming: 1,
						intelligence: 5,
						healthIssues: 2,
						socialNeeds: 5,
						strangerFriendly: 5
					},
					referenceImageId: "0XYvRd7oD"
				});
			});
		});

		describe("And the breedId is invalid", () => {
			beforeEach(() => {
				mockedAxios.mockResolvedValue({ data: {} });
			});

			it("Should return null", async () => {
				const breed = await catWikiService.getBreed("INVALID_BREED_ID");

				expect(breed).toEqual(null);
			});
		});

		describe("And something went wrong with the request", () => {
			const error = { message: "Request failed." };

			beforeEach(() => {
				mockedAxios.mockRejectedValue(error);
			});

			it("Should throw an error", async () => {
				expect(catWikiService.getBreed("VALID_BREED_ID")).rejects.toEqual(error);
			});
		});
	});

	describe("Given the getBreeds method is called", () => {
		describe("And the request was sent through successfully", () => {
			beforeEach(() => {
				mockedAxios.mockResolvedValue({ data: getBreedsSuccessResponseDataMock });
			});

			it("Should return multiple CatBreed objects", async () => {
				const breeds = await catWikiService.getBreeds();

				expect(breeds).toEqual([
					{
						id: "abys",
						name: "Abyssinian",
						description:
							"The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
						origin: "Egypt",
						temperament: "Active, Energetic, Independent, Intelligent, Gentle",
						lifespan: "14 - 15",
						traits: {
							adaptability: 5,
							affectionLevel: 5,
							childFriendly: 3,
							grooming: 1,
							intelligence: 5,
							healthIssues: 2,
							socialNeeds: 5,
							strangerFriendly: 5
						},
						image: "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
						referenceImageId: "0XYvRd7oD"
					},
					{
						id: "aege",
						name: "Aegean",
						description:
							"Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
						origin: "Greece",
						temperament: "Affectionate, Social, Intelligent, Playful, Active",
						lifespan: "9 - 12",
						traits: {
							adaptability: 5,
							affectionLevel: 4,
							childFriendly: 4,
							grooming: 3,
							intelligence: 3,
							healthIssues: 1,
							socialNeeds: 4,
							strangerFriendly: 4
						},
						image: "https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg",
						referenceImageId: "ozEvzdVM-"
					}
				]);
			});
		});

		describe("And something went wrong with the request", () => {
			const error = { message: "Request failed." };

			beforeEach(() => {
				mockedAxios.mockRejectedValue(error);
			});

			it("Should throw an error", async () => {
				expect(catWikiService.getBreeds()).rejects.toEqual(error);
			});
		});
	});

	describe("Given the getImages method is called", () => {
		describe("And the request was sent through successfully", () => {
			const env = process.env;
			const apiKeyMock = "API_KEY";

			beforeEach(() => {
				mockedAxios.mockResolvedValue({ data: getImagesSuccessResponseDataMock });
				process.env = { ...env, CATWIKI_API_KEY: apiKeyMock };
			});

			afterEach(() => {
				process.env = env;
			});

			it("Should return multiple CatImage objects", async () => {
				const images = await catWikiService.getImages();

				expect(images).toEqual([
					{
						breedId: "abys",
						breedName: "Abyssinian",
						id: "xnzzM6MBI",
						url: "https://cdn2.thecatapi.com/images/xnzzM6MBI.jpg"
					},
					{
						breedId: "abys",
						breedName: "Abyssinian",
						id: "EHG3sOpAM",
						url: "https://cdn2.thecatapi.com/images/EHG3sOpAM.jpg"
					}
				]);
				expect(mockedAxios).toHaveBeenCalledWith(expect.any(String), {
					headers: expect.objectContaining({
						"x-api-key": apiKeyMock
					}),
					params: expect.objectContaining({
						has_breeds: 1,
						limit: 25
					})
				});
			});
		});

		describe("And something went wrong with the request", () => {
			const error = { message: "Request failed." };

			beforeEach(() => {
				mockedAxios.mockRejectedValue(error);
			});

			it("Should throw an error", async () => {
				expect(catWikiService.getBreeds()).rejects.toEqual(error);
			});
		});
	});
});
