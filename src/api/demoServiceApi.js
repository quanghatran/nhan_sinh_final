import axiosClient from "./axiosClient";

const demoServiceApi = {
	postDemoService: (params) => {
		const url = "/api/searchFree";
		return axiosClient.post(url, params);
	},

	getDemoService: (id) => {
		const url = `infoDemo/${id}`;
		return axiosClient.get(url);
	},
};

export default demoServiceApi;
