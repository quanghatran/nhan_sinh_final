import axiosClient from "./axiosClient";

const signInServiceApi = {
	postSignIn: (params) => {
		const url = "/api/users/signup";
		return axiosClient.post(url, params);
	},
};

export default signInServiceApi;
