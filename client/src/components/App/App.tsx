import { Link, Outlet } from "react-router-dom";
import pigeonPng from "@/assets/img/pigeon.png";
import pigeonJpg from "@/assets/img/girl.jpg";
import AquariumSvg from "@/assets/img/aquarium.svg";

export const App = () => {
	return (
		<>
			<header>
				<Link to={"/"}>Main</Link>
				<Link to={"/about"}>About</Link>
				<Link to={"/shop"}>Shop</Link>
			</header>
			<div>
				<p>PLATFORM: {__PLATFORM__}</p>
				<Outlet />
				<img src={pigeonPng} alt="pigeon" width={100} />
				<img src={pigeonJpg} alt="red girl" width={100} />
				<AquariumSvg width={50} height={50} />
			</div>
		</>
	);
};
