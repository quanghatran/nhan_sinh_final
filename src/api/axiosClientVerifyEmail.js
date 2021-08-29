import axios from "axios";
import queryString from "query-string";

// create an axios object with custom config
const axiosClientVerifyEmail = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: {
		"content-type": "application/json",
	},

	// convert params from object into a string
	paramsSerializer: (params) => queryString.stringify(params),
});

axiosClientVerifyEmail.interceptors.request.use(async (config) => {
	const token = await localStorage.getItem("userToken");
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
});

axiosClientVerifyEmail.interceptors.response.use(
	(response) => {
		if (response && response.data) {
			return response.data;
		}
		return response;
	},
	(error) => {
		// handle error here
		return error.response;
		// throw Error;
	}
);

export default axiosClientVerifyEmail;
