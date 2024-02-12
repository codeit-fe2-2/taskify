import axiosInstance from '@/src/apis/axiosInstance';
import { DashboardListGetResponse } from '@/src/types/dashboard';

export const getDashboardList = async (
	method: 'pagination' | 'infiniteScroll',
	cursorId: number,
	page: number,
	size: number,
) => {
	try {
		const response = await axiosInstance.get<DashboardListGetResponse>(
			`/dashboards?navigationMethod=${method}&cursorId=${cursorId}&page=${page}&size=${size}`,
		);

		return response.data;
	} catch (error) {
		console.error('대시보드 목록을 가져오는 중 오류가 발생했습니다.', error);
		throw error;
	}
};
