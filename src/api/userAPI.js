import axiosClient from "./axiosClient";

// const accessToken = localStorage.getItem("user")
// 	? JSON.parse(localStorage.getItem("user")).token
// 	: "";
// axiosClient.interceptors.request.use(async (config) => {
// 	// TODO: handle token here
// 	config.headers.authorization = `Bearer ${accessToken}`;
// 	return config;
// });
const userAPI = {
	getUserProfile: (params) => {
		const url = "/api/users/profile";
		return axiosClient.get(url, params);
	},
	patchUserName: (params) => {
		const url = "/api/users/profile";
		return axiosClient.patch(url, params);
	},
	patchPassword: (params) => {
		const url = "/api/users/change-password";
		return axiosClient.patch(url, params);
	},
};

export default userAPI;

// import firebase from "firebase";

// const userApi = {
// 	getMe: () => {
// 		//TODO: call API to get current user
// 		return new Promise((resolve, reject) => {
// 			setTimeout(() => {
// 				const currentUser = firebase.auth().currentUser;

// 				resolve({
// 					id: currentUser.uid,
// 					name: currentUser.displayName,
// 					email: currentUser.email,
// 					photoUrl: currentUser.photoUrl,
// 				});
// 			}, 500);
// 		});
// 	},
// };

// export default userApi;
