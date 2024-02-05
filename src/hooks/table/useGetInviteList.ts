import { useRouter } from 'next/router';

import axiosInstance from '@/src/apis/axiosInstance';
import { useAsync } from '@/src/hooks/useAsync';
import { InviteListGetResponse } from '@/src/types/table';

export const useGetInviteList = (page: number, size: number) => {
	const router = useRouter();
	const { dashboardId } = router.query;

	const getInviteList = () =>
		axiosInstance.get<InviteListGetResponse>(
			`/dashboards/${dashboardId as string}/invitations?page=${page}&size=${size}`,
		);
	const { data, execute } = useAsync(getInviteList);

	return { inviteListInfo: data, execute };
};
