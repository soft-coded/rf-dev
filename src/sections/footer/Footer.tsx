import { FaFacebook, FaTwitter } from "react-icons/fa";

import data from "../../data/footer";
import "./footer.scss";

export default function Footer() {
	return (
		<footer id="footer" className="footer">
			<div className="inner">
				<div className="socials">
					<div className="follow">
						Follow us on:
						<FaFacebook color="blue" />
						<FaTwitter color="lightblue" />
					</div>
					<div className="newsletter">
						<h4>Our Newsletter:</h4>
						<form>
							<input type="email" name="email" placeholder="Email" />
							<button type="submit">Send</button>
						</form>
					</div>
				</div>
				<hr />
				<div className="subsection">
					<div className="contact-details">
						<h4>Contact</h4>
						<ul className="contact">
							{data.contact.map((details, i) => (
								<li key={i}>{details}</li>
							))}
						</ul>
					</div>
					<div className="site-links">
						<h4>Site Links</h4>
						<ul>
							{data.siteLinks.map((details, i) => (
								<li key={i}>{details}</li>
							))}
						</ul>
					</div>
					<p className="description">{data.description}</p>
				</div>
				<h3>&copy; SystemOnSilicon Corp. 2021</h3>
			</div>
		</footer>
	);
}
