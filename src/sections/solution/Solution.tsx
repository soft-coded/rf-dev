import { AnimationOnScroll as Animator } from "react-animation-on-scroll";

import "./solution.scss";
import data from "../../data/solution";
import SectionHeader from "../../components/section-header/SectionHeader";
import vars from "../../variables";

export default function Solution() {
	return (
		<section id="solution" className="solution">
			<div className="inner">
				<SectionHeader>RiteFood: The Solution</SectionHeader>
				<div className="solutions-container">
					{data.map(details => (
						<div className="details" key={details.id}>
							{details.direction === "Right" && (
								<Animator
									animateIn="animate__animated animate__fadeInUp"
									duration={vars.animationDuration}
									animatePreScroll={true}
									animateOnce={true}
								>
									<img src={details.image} alt={details.title} />
								</Animator>
							)}
							<div className="details-text">
								<Animator
									animateIn="animate__animated animate__fadeIn"
									duration={vars.animationDuration}
									animatePreScroll={true}
									animateOnce={true}
								>
									<h1>{details.title}</h1>
									<p>{details.content}</p>
									<ul>
										{details.features.map((feature, i) => (
											<Animator
												animateIn={
													"animate__animated animate__fadeIn" +
													details.direction
												}
												delay={i * 200}
												duration={vars.animationDuration}
												animatePreScroll={true}
												animateOnce={true}
												key={i}
											>
												<li>{feature}</li>
											</Animator>
										))}
									</ul>
								</Animator>
							</div>
							{details.direction === "Left" && (
								<Animator
									duration={vars.animationDuration}
									animateIn="animate__animated animate__fadeInUp"
									animatePreScroll={true}
									animateOnce={true}
								>
									<img src={details.image} alt={details.title} />
								</Animator>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
