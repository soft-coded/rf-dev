import logo from "../../images/logocrop.png";

export default function NavbarList() {
	return (
		<ul>
			<li className="logo-container">
				<a href="/">
					<img src={logo} alt="RiteFood" className="logo" />
				</a>
			</li>
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
	);
}
