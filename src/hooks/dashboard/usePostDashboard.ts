import axiosInstance from '@/src/apis/axiosInstance';
import { DashboardPostResponse } from '@/src/types/dashboard';

export const usePostDashboard = async (title: string, dashboardId: number) => {
	const requestData = {
		title: title,
		dashboardId: Number(dashboardId),
	};
	try {
		console.log(typeof dashboardId);
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
