import axiosClient from "./axiosClient";

const lookUpApi = {
	getResultLookup: (id, params) => {
		const url = `/api/searchFree/${id}`;
		return axiosClient.get(url, params);
	},
};

export default lookUpApi;
