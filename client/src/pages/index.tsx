import Head from "next/head";
import { FC } from "react";

import HomeBanner from "../components/home-banner";
import HomeDiscover from "../components/home-discover";
import HomePromotion from "../components/home-promotion";
import Footer from "../components/footer";

const Index: FC = () => (
	<div>
		<Head>
			<title>Home</title>
		</Head>
		<HomeBanner />
		<HomeDiscover />
		<HomePromotion />
		<Footer />
	</div>
);

export default Index;
