import "animate.css/animate.min.css";

import Navbar from "./components/navbar/Navbar";
import Landing from "./sections/landing/Landing";
import Problems from "./sections/problems/Problems";
import Solution from "./sections/solution/Solution";
import Research from "./sections/research/Research";
import Footer from "./sections/footer/Footer";

export default function App() {
	return (
		<>
			<Navbar />
			<main>
				<Landing />
				<Problems />
				<Solution />
				<Research />
				<Footer />
			</main>
		</>
	);
}
