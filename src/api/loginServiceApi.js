import axiosClient from "./axiosClient";

const loginServiceApi = {
	// post phone and password, received a token, save in local storage
	postLogin: (params) => {
		const url = "/api/users/signin";
		return axiosClient.post(url, params);
	},

	// get full information about user from token
	// getMe = async (payload) => {
	// 	const url = '/api/users';
	// 	const response = await axiosClient.get(url, payload);
	// 	return response.data;
	//   }
};

export default loginServiceApi;
