import { FaVideo, FaPlus } from "react-icons/fa";

import "./landing.scss";

export default function Landing() {
	return (
		<section className="landing" id="top">
			<div className="inner">
				<div className="landing-container">
					<h1 className="landing-header">
						Say hello to <span className="landing-header-span">.</span>
					</h1>
					<h3>Your healthy life begins here.</h3>
					<div className="button-container">
						<a href="https://www.youtube.com/watch?v=jlK_bl6fPWI">
							<span>
								<FaVideo /> Watch Video
							</span>
						</a>
						<a href="#problems" className="learn-more">
							<span>
								<FaPlus />
								Learn More
							</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
