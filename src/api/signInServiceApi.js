import axiosClientVerifyEmail from "./axiosClientVerifyEmail";

const signInServiceApi = {
	postSignIn: (params) => {
		const url = "/api/users/signup";
		return axiosClientVerifyEmail.post(url, params);
	},
	// postVerifyEmail: (params) => {
	// 	const url = "/api/users/send-mail-verify";
	// 	return axiosClient.post(url, params);
	// },
};

export default signInServiceApi;
