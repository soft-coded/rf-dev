import { useEffect } from "react";

import NavList from "./NavbarList";

export default function NavbarSideMenu() {
	function handleClose(): void {
		const drawer = document.querySelector<HTMLElement>(".nav-side-menu")!;
		const backdrop = document.querySelector<HTMLElement>(".backdrop")!;
		drawer.style.transform = "translateX(-100%)";
		backdrop.style.animation = "fade-out 0.3s ease-in-out";
		setTimeout(() => {
			backdrop.style.display = "none";
		}, 299);
	}

	useEffect(() => {
		const backdrop = document.querySelector<HTMLElement>(".backdrop")!;
		backdrop.addEventListener("click", handleClose);
	}, []);

	return (
		<section className="nav-side-menu">
			<NavList></NavList>
		</section>
	);
}
