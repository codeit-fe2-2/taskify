import axiosInstance from '@/src/apis/axiosInstance';
import { useAsync } from '@/src/hooks/useAsync';
import { InviteListGetResponse } from '@/src/types/table';

export const useGetInviteList = (dashboardId: number) => {
	const getInviteList = () =>
		axiosInstance.get<InviteListGetResponse>(
			`/dashboards/${dashboardId}/invitations`,
		);
	const { data, execute } = useAsync(getInviteList);

	return { inviteListInfo: data, execute };
};
