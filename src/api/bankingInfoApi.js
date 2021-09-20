import axiosClient from './axiosClient';

const bankingInfoApi = {
  getBankingInfo: () => {
    const url = 'api/admin/banking-info';
    return axiosClient.get(url);
  },
};
export default bankingInfoApi;
