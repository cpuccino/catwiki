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

	const fetchBreed = useCallback(async () => {
		if (!id) {
			return;
		}

		try {
			const data = await getBreed(id as string);
			console.log(data);
			if (data) setBreed(data);
		} catch (error) {
			console.log(`Cannot fetch breed data for "${id}."`);
			router.push("/");
		}
	}, [id]);

	const fetchImages = useCallback(async () => {
		if (!id) {
			return;
		}

		try {
			const data = await getBreedImages(id as string);
			console.log(data);
			if (data) setImages(data);
		} catch (error) {
			console.log(`Cannot fetch breed images for "${id}".`);
			router.push("/");
		}
	}, [id]);

	useEffect(() => {
		fetchBreed();
		fetchImages();
	}, [fetchBreed, fetchImages]);

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
