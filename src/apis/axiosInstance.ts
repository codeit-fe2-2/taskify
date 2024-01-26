import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://sp-taskify-api.vercel.app/2-2/',
});

export default axiosInstance;
