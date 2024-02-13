import { DashboardPostResponse } from '@/src/types/dashboard';

import axiosInstance from '../axiosInstance';

export const postCreateColumn = async (title: string, dashboardId: string) => {
	const requestData = {
		title: title,
		dashboardId: Number(dashboardId),
	};
	try {
		const response = await axiosInstance.post<DashboardPostResponse>(
			'/columns',
			requestData,
		);
		return response;
	} catch (error) {
		console.error('컬럼 생성 중 오류가 발생했습니다.', error);
		throw error;
	}
};
