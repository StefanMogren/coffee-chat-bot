import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage.jsx";
import NoPage from "../pages/NoPage/NoPage.jsx";

export const Router = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/*' element={<NoPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};
