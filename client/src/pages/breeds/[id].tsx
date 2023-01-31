import Head from "next/head";
import { useRouter } from "next/router";
import { FC, useState, useCallback, useEffect } from "react";

import BreedDetail from "src/components/breed-detail";
import BreedGallery from "src/components/breed-gallery";
import Footer from "src/components/footer";
import { CatBreed, CatImage } from "src/api/catwiki";
import { catBreedMock, catImagesMock } from "src/mock/cat-breed";
import Header from "src/components/header";

const Breed: FC = () => {
	const [breed, setBreed] = useState<CatBreed>();
	const [images, setImages] = useState<CatImage[]>([]);

	const router = useRouter();
	const { id } = router.query;

	const fetchBreed = useCallback(async () => {
		setBreed(catBreedMock.find(breed => breed.id === id));
	}, [id]);

	const fetchImages = useCallback(async () => {
		setImages(catImagesMock);
	}, [id]);

	useEffect(() => {
		fetchBreed();
		fetchImages();
	}, [fetchBreed, fetchImages]);

	console.log(id);

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
