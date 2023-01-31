import Link from "next/link";
import { FC } from "react";
import { FaSign } from "react-icons/fa";

const Logo: FC = () => (
		<Link className="c-logo" href="/">
			<span>CatWiki</span>
			<FaSign />
		</Link>
	);

export default Logo;
