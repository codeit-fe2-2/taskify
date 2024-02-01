import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://sp-taskify-api.vercel.app/2-2/',
});

axiosInstance.interceptors.request.use((config) => {
	if (typeof window !== 'undefined') {
		const token = localStorage.getItem('accessToken');
		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`;
		}
	}
	return config;
});

export default axiosInstance;
