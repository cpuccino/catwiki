import { Request, Response } from "express";

import { CatWikiService } from "../services/catwiki";

export const getBreeds = async (_req: Request, res: Response) => {
	const catWikiService = new CatWikiService();

	try {
		const breeds = await catWikiService.getBreeds();
		res.status(200).json(breeds);
	} catch (error) {
		res.status(500).json("Failed to get breeds.");
	}
};

export const getBreed = async (req: Request, res: Response) => {
	const catWikiService = new CatWikiService();

	const { breedId } = req.params;

	try {
		const breed = await catWikiService.getBreed(breedId);
		res.status(200).json(breed);
	} catch (error) {
		res.status(500).json(`Failed to get breed "${breedId}".`);
	}
};

export const getImages = async (req: Request, res: Response) => {
	const catWikiService = new CatWikiService();

	const { breeds } = req.query;

	try {
		const images = await catWikiService.getImages(breeds as string);
		res.status(200).json(images);
	} catch (error) {
		res.status(500).json(`Failed to get images for the following breedIds "${breeds}".`);
	}
};
