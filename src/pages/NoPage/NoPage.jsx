import "./noPage.css";
import { Link } from "react-router-dom";

function NoPage() {
	return (
		<main>
			<section>
				<h1>Error 404</h1>
				<p>The requested page could not be found.</p>
				<Link to={"/"}>Return to the home page here</Link>
			</section>
		</main>
	);
}

export default NoPage;
