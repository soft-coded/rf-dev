import { useState, useRef, useCallback } from "react";
import { AnimationOnScroll as Anim } from "react-animation-on-scroll";

import "./research.scss";
import data from "../../data/research";
import SectionHeader from "../../components/section-header/SectionHeader";
import vars from "../../variables";
import Modal from "../../components/modal/Modal";

export default function Research() {
	const [index, setIndex] = useState(0);
	const [showModal, setShowModal] = useState(false);
	const carousel = useRef<HTMLDivElement>(null);

	const changeIndex = useCallback(
		(change: string) => {
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
		},
		[index]
	);

	function handleModalOpen() {
		const backdrop = document.querySelector<HTMLElement>(".backdrop")!;
		setShowModal(true);
		backdrop.style.display = "block";
		backdrop.style.animation = "fade-in 0.3s ease-in-out forwards";
	}

	return (
		<section id="research" className="research">
			<div className="inner">
				<SectionHeader>Research Work</SectionHeader>
				<Anim
					animateIn="animate__animated animate__zoomIn"
					duration={vars.animationDuration}
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
							<p>{data[index].content.substring(0, 250)}...</p>
							<button onClick={handleModalOpen}>Read More</button>
						</div>
						<span className="button right" onClick={() => changeIndex("n")}>
							&gt;
						</span>
					</div>
					<Modal
						show={showModal}
						setShowModal={setShowModal}
						title={data[index].title}
						image={data[index].image}
						content={data[index].content}
					></Modal>
				</Anim>
			</div>
		</section>
	);
}
