import Head from "next/head";
import { FC, useEffect, useState } from "react";

import HomeBanner from "../components/home-banner";
import HomeDiscover from "../components/home-discover";
import HomePromotion from "../components/home-promotion";
import Footer from "../components/footer";
import { CatBreed, getBreeds } from "../api/catwiki";

const Index: FC = () => {
	const [breeds, setBreeds] = useState<CatBreed[]>([]);

	const fetchBreeds = async () => {
		try {
			const fetchedBreeds = await getBreeds();
			setBreeds(fetchedBreeds);
		} catch (error) {
			console.log("Cannot fetch breeds");
		}
	};

	useEffect(() => {
		fetchBreeds();
	}, []);

	return (
		<div>
			<Head>
				<title>Home</title>
			</Head>
			<HomeBanner breeds={breeds} />
			<HomeDiscover breeds={breeds} />
			<HomePromotion />
			<Footer />
		</div>
	);
};

export default Index;
