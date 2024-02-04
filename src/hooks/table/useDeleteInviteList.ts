import axiosInstance from '@/src/apis/axiosInstance';
import { useAsync } from '@/src/hooks/useAsync';
import { InviteListGetResponse } from '@/src/types/table';

export const useDeleteInviteList = (
	dashboardId: number,
	invitationId: number,
) => {
	const deleteInviteList = () =>
		axiosInstance.delete<InviteListGetResponse>(
			`/dashboards/${dashboardId}/invitations/${invitationId}`,
		);
	const { execute } = useAsync(deleteInviteList);

	return { execute };
};
