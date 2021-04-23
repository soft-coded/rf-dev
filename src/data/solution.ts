import analyticsSvg from "../images/analytics.svg";
import conversationSvg from "../images/conversation.svg";

// eslint-disable-next-line
export default [
	{
		id: 1,
		direction: "Left",
		image: analyticsSvg,
		title: "Personalized Recommendations",
		content:
			"Get recommendations regarding what to eat and what to avoid based on the genomic and AI analysis.",
		features: ["Artificial Intelligence", "Genomics", "Personalized Diet Plan "]
	},
	{
		id: 2,
		direction: "Right",
		image: "https://image.flaticon.com/icons/svg/1184/1184394.svg",
		title: "Expert Connect",
		content: "Get help from experts in diet and nutrition.",
		features: [
			"Experienced Nutritionists/Dietitians",
			"Real-time Recommendation"
		]
	},
	{
		id: 3,
		direction: "Left",
		image: conversationSvg,
		title: "Wellness Forum",
		content:
			"Educate yourself on food and nutrition while sharing your knowledge.",
		features: ["Learn", "Share", "Grow"]
	},
	{
		id: 4,
		direction: "Right",
		image: "https://image.flaticon.com/icons/svg/1186/1186994.svg",
		title: "Organic/Natural Aggregator",
		content:
			"Get easy access to the best quality organic food sold by verified vendors",
		features: ["Easy Shopping", "High-Quality Food", "Variety"]
	}
];
