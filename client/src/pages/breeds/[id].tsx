import Head from "next/head";
import { useRouter } from "next/router";
import { FC, useState, useCallback, useEffect } from "react";

import BreedDetail from "../../components/breed-detail";
import BreedGallery from "../../components/breed-gallery";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { CatBreed, CatImage, getBreed, getBreedImages } from "../../api/catwiki";

const Breed: FC = () => {
	const [breed, setBreed] = useState<CatBreed>();
	const [images, setImages] = useState<CatImage[]>([]);

	const router = useRouter();
	const { id } = router.query;

	const findAlternativeImage = (catBreed: CatBreed, catImages: CatImage[]): string | undefined => {
		if (catBreed.image) {
			return catBreed.image;
		}

		if (!catImages.length) {
			return;
		}

		const referenceImage = catImages.find(image => image.id === catBreed.referenceImageId)?.url;
		if (referenceImage) {
			return referenceImage;
		}

		return catImages[0].url;
	};

	const fetchBreed = useCallback(async () => {
		if (!id) {
			return;
		}

		try {
			const [fetchedBreed, fetchedBreedImages] = await Promise.all([
				getBreed(id as string),
				getBreedImages(id as string)
			]);

			if (!fetchedBreed) {
				console.log(`Invalid breed "${id}".`);
				return router.push("/");
			}

			fetchedBreed.image = findAlternativeImage(fetchedBreed, fetchedBreedImages);

			setBreed(fetchedBreed);
			setImages(fetchedBreedImages);
		} catch (error) {
			console.log(`Cannot fetch breed data for "${id}."`);
			router.push("/");
		}
	}, [id]);

	useEffect(() => {
		fetchBreed();
	}, [fetchBreed]);

	return (
		<div>
			<Head>
				<title>Breed</title>
			</Head>
			<Header />
			{breed && (
				<>
					<BreedDetail breed={breed} />
					<BreedGallery breedImages={images} />
				</>
			)}
			<Footer />
		</div>
	);
};

export default Breed;
