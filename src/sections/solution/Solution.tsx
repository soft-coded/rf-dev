import { AnimationOnScroll as Animator } from "react-animation-on-scroll";

import "./solution.scss";
import data from "../../data/solution";

export default function Solution() {
	return (
		<section id="solution" className="solution">
			<div className="inner">
				<header>
					<h1>RiteFood: The Solution</h1>
				</header>
				<div className="solutions-container">
					{data.map(details => (
						<div className="details" key={details.id}>
							{details.direction === "Right" && (
								<Animator
									animateIn="animate__animated animate__fadeInUp"
									duration={1.5}
									animatePreScroll={true}
									animateOnce={true}
								>
									<img src={details.image} alt={details.title} />
								</Animator>
							)}
							<div className="details-text">
								<Animator
									animateIn="animate__animated animate__fadeIn"
									duration={1.5}
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
												duration={1.5}
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
									duration={1.5}
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
