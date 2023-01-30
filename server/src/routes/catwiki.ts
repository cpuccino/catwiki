import { Router } from "express";

import { getBreed, getBreeds, getImages } from "../controllers/catwiki";

export const catWikiRouter = Router();

catWikiRouter.get("/breeds", getBreeds);
catWikiRouter.get("/breeds/:breedId", getBreed);
catWikiRouter.get("/images", getImages);
