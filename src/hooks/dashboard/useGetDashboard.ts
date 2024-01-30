import { useRouter } from 'next/router';

import axiosInstance from '@/src/apis/axiosInstance';
import { useAsync } from '@/src/hooks/useAsync';
import { Dashboard } from '@/src/types/dashboard';

export const useGetDashboard = () => {
	const router = useRouter();
	const { boardid } = router.query;

	const getDashboard = () =>
		axiosInstance.get<Dashboard>(`/dashboards/${boardid as string}`);

	const { data } = useAsync(getDashboard);

	return { dashboard: data };
};
