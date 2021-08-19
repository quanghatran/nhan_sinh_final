import axiosClient from "./axiosClient";

const forgotPasswordApi = {
	// post phone and password, received a token, save in local storage
	postRequestOtp: (params) => {
		const url = "/api/users/forgot-password";
		return axiosClient.post(url, params);
	},
	postRequestNewPassword: (params) => {
		const url = "/api/users/verify-otp";
		return axiosClient.post(url, params);
	},
};

export default forgotPasswordApi;
