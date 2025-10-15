import "./index.css";
import axios from "axios";

export const FetchMenu = async () => {
	const response = await axios
		.get("https://airbean-9pcyw.ondigitalocean.app/api/beans/")
		.then((response) => {
			return response;
		})
		.catch((error) => {
			return error;
		});

	if (response.data.success === true) {
		return response.data.menu;
	}
};
