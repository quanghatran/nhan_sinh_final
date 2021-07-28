import axiosClient from "./axiosClient";

const servicesApi = {
	getListServices: (params) => {
		const url = "/api/services/";
		return axiosClient.get(url, params);
	},
	getAllServiceBought: (params) => {
		const url = "/api/user-service/get-service-user-bought";
		return axiosClient.get(url, params);
	},
	getFreeSearchUser: (params) => {
		const url = "/api/searchFree/get-freeSearch-user";
		return axiosClient.get(url, params);
	},
	getListVipSearchUser: (params) => {
		const url = "/api/searchVIP/get-vipSearch-user";
		return axiosClient.get(url, params);
	},
	postUserBuyService: (id, params) => {
		const url = `/api/users/buy-service/${id}`;
		return axiosClient.post(url, params);
	},
};

export default servicesApi;
