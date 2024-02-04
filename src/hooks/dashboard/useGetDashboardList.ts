import axiosInstance from '@/src/apis/axiosInstance';
import { useAsync } from '@/src/hooks/useAsync';
import { DashboardListGetResponse } from '@/src/types/dashboard';

export const useGetDashboardList = (
	method: 'pagination' | 'infiniteScroll',
	cursorId: number,
	page: number,
	size: number,
	lazy: boolean,
) => {
	const getDashboards = () =>
		axiosInstance.get<DashboardListGetResponse>(
			`/dashboards?navigationMethod=${method}&cursorId=${cursorId}&page=${page}&size=${size}`,
		);
	const { data, execute } = useAsync(getDashboards, lazy);

	return { dashboardListInfo: data, execute };
};
