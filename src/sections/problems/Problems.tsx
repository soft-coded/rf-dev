import { AnimationOnScroll as Box } from "react-animation-on-scroll";

import "./problems.scss";
import data from "../../data/problems";
import SectionHeader from "../../components/section-header/SectionHeader";
import vars from "../../variables";

export default function Problems() {
	return (
		<section className="problems" id="problems">
			<div className="inner">
				<SectionHeader>Problems Faced By Everyone Today</SectionHeader>
				<div className="boxes-container">
					{data.map(details => {
						return (
							<div key={details.id} className="box">
								{details.direction === "Right" && (
									<Box
										animateIn="animate__animated animate__fadeInUp"
										duration={vars.animationDuration}
										animatePreScroll={true}
										animateOnce={true}
									>
										<img src={details.image} alt={details.title} />
									</Box>
								)}
								<div className="box-text">
									<Box
										animateIn={
											"animate__animated animate__fadeIn" + details.direction
										}
										duration={vars.animationDuration}
										animatePreScroll={true}
										animateOnce={true}
									>
										<h3>{details.title}</h3>
										<h4>{details.subTitle}</h4>
										<p>{details.content}</p>
									</Box>
								</div>
								{details.direction === "Left" && (
									<Box
										animateIn="animate__animated animate__fadeInUp"
										duration={vars.animationDuration}
										animatePreScroll={true}
										animateOnce={true}
									>
										<img src={details.image} alt={details.title} />
									</Box>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
