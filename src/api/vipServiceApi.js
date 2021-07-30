import axiosClient from "./axiosClient";

const vipServiceApi = {
	postVipService: (params) => {
		const url = "/api/searchVIP";
		return axiosClient.post(url, params);
	},
};

export default vipServiceApi;
