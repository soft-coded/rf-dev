import { useState, useRef } from "react";
import { AnimationOnScroll as Anim } from "react-animation-on-scroll";

import "./research.scss";
import data from "../../data/research";

export default function Research() {
	const [index, setIndex] = useState(0);
	const carousel = useRef<HTMLDivElement>(null);

	function changeIndex(change: string) {
		if (change === "n") {
			carousel.current!.className =
				"research-content animate__animated animate__fadeOutLeft";
			setTimeout(() => {
				setIndex(index === 2 ? 0 : index + 1);
				carousel.current!.className =
					"research-content animate__animated animate__fadeInRight";
			}, 1000);
		} else {
			carousel.current!.className =
				"research-content animate__animated animate__fadeOutRight";
			setTimeout(() => {
				setIndex(index === 0 ? 2 : index - 1);
				carousel.current!.className =
					"research-content animate__animated animate__fadeInLeft";
			}, 1000);
		}
	}

	return (
		<section id="research" className="research">
			<div className="inner">
				<header>
					<h1>Research Work</h1>
				</header>
				<Anim
					animateIn="animate__animated animate__zoomIn"
					duration={1.5}
					animatePreScroll={true}
					animateOnce={true}
					offset={300}
				>
					<div className="carousel">
						<span className="button left" onClick={() => changeIndex("p")}>
							&lt;
						</span>
						<div className="research-content animate__animated" ref={carousel}>
							<img src={data[index].image} alt="hello" />
							<h3>{data[index].title}</h3>
							<p>{data[index].content}</p>
						</div>
						<span className="button right" onClick={() => changeIndex("n")}>
							&gt;
						</span>
					</div>
				</Anim>
			</div>
		</section>
	);
}
