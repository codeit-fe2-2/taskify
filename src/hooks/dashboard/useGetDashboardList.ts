import axiosInstance from '@/src/apis/axiosInstance';
import { useAsync } from '@/src/hooks/useAsync';
import { DashboardListGetResponse } from '@/src/types/dashboard';

export const useGetDashboardList = () => {
	const getDashboards = () =>
		axiosInstance.get<DashboardListGetResponse>(
			'/dashboards?navigationMethod=infiniteScroll&size=100',
		);
	const { data, execute } = useAsync(getDashboards);

	return { dashboardListInfo: data, execute };
};
