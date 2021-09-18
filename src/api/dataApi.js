import axiosClient from "./axiosClient";

const dataApi = {
  getData: () => {
    const url = "/api/admin/get-landing-page";
    return axiosClient.get(url);
  },
};

export default dataApi;
