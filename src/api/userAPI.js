import axiosClient from "./axiosClient";

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
	patchAddIdLauncher: (params) => {
		const url = "/api/users/add-referrer-code";
		return axiosClient.patch(url, params);
	},
	getListMemberShip: (params) => {
		const url = "/api/users/get-references";
		return axiosClient.get(url, params);
	},
	postAddingSlotVip: (params, idMember) => {
		const url = `/api/users/add-VIP-for-reference/${idMember}`;
		return axiosClient.post(url, params);
	},
	postDepositMoney: (params, idMember) => {
		const url = `/api/users/add-money-for-reference/${idMember}`;
		return axiosClient.post(url, params);
	},
	postCreatCoachingService: (params) => {
		const url = "/api/users/tao-lich-gap-truc-tiep";
		return axiosClient.post(url, params);
	},
	getListCoacher: (params) => {
		const url = "/api/admin/get-all-coacher";
		return axiosClient.get(url, params);
	},
	getListCoacherBooked: (idCoacher, params) => {
		const url = `/api/users/get-lich-truc-tiep/${idCoacher}`;
		return axiosClient.get(url, params);
	},
	postBookingCoaching: (params) => {
		const url = "/api/users/tao-lich-gap-truc-tiep";
		return axiosClient.post(url, params);
	},
	getListUserBooked: (params) => {
		const url = "/api/users/get-lich-truc-tiep-cua-user";
		return axiosClient.get(url, params);
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
