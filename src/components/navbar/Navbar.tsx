import { useEffect } from "react";

import "./navbar.scss";
import NavbarList from "./NavbarList";
import NavbarSideMenu from "./NavbarSideMenu";
import vars from "../../variables";

export default function Navbar() {
	useEffect(() => {
		const mediaQueryTab1 = window.matchMedia(
			"(max-width: " + vars.tabMaxWidth1 + ")"
		);
		if (!mediaQueryTab1.matches) {
			document.addEventListener("scroll", () => {
				const navbar = document.querySelector("nav")!;
				if (window.pageYOffset > 2) navbar.className = "sticky";
				else navbar.className = "";
			});
		}
	}, []);

	function handleOpen(): void {
		const drawer = document.querySelector<HTMLElement>(".nav-side-menu")!;
		const backdrop = document.querySelector<HTMLElement>(".backdrop")!;
		drawer.style.transform = "translateX(0%)";
		backdrop.style.display = "block";
		backdrop.style.animation = "fade-in 0.3s ease-in-out forwards";
	}

	return (
		<>
			<nav>
				<div className="inner">
					<NavbarList />
				</div>
			</nav>
			<button className="side-menu-open" onClick={handleOpen}>
				<div></div>
				<div></div>
				<div></div>
			</button>
			<NavbarSideMenu />
		</>
	);
}
