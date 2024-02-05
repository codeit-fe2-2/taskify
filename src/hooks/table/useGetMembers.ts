import { useRouter } from 'next/router';

import axiosInstance from '@/src/apis/axiosInstance';
import { useAsync } from '@/src/hooks/useAsync';
import { MembersResponse } from '@/src/types/table';

export const useGetMembers = (page: number, size: number) => {
	const router = useRouter();
	const { dashboardId } = router.query;

	const getMembers = () =>
		axiosInstance.get<MembersResponse>(
			`/members?page=${page}&size=${size}&dashboardId=${dashboardId as string}`,
		);
	const { data, execute } = useAsync(getMembers);

	return { membersInfo: data, execute };
};
