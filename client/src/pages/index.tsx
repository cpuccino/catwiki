import Head from "next/head";
import { FC } from "react";

import HomeBanner from "src/components/home-banner";
import HomeDiscover from "src/components/home-discover";
import HomePromotion from "src/components/home-promotion";
import Footer from "src/components/footer";

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
