import axiosClient from './axiosClient';

const blogApi = {
  getAllBlog: (params) => {
    const url = '/api/admin/blog';
    return axiosClient.get(url, { params });
  },
  getBlogById: (id) => {
    const url = `/api/admin/blog/${id}`;
    return axiosClient.get(url);
  },
};

export default blogApi;
