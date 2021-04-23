import React, { useEffect } from "react";

import "./navbar.scss";
import logo from "../../images/logo.jpg";

export default function Navbar() {
	useEffect(() => {
		document.addEventListener("scroll", () => {
			const navbar = document.querySelector("nav")!;
			if (window.pageYOffset > 2) navbar.classList.add("sticky");
			else navbar.classList.remove("sticky");
		});
	}, []);

	return (
		<nav>
			<div className="inner">
				<ul>
					<a href="/" className="logo-container">
						<img src={logo} alt="RiteFood" className="logo" />
					</a>
					<li>
						<a href="#top">Home</a>
					</li>
					<li>
						<a href="#problems">Problems</a>
					</li>
					<li>
						<a href="#solution">Solution</a>
					</li>
					<li>
						<a href="#research">Research</a>
					</li>
					<li>Blogs</li>
					<li>News</li>
					<li>Contact Us</li>
				</ul>
			</div>
		</nav>
	);
}
