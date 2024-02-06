import { useRouter } from 'next/router';

import axiosInstance from '@/src/apis/axiosInstance';
import { useAsync } from '@/src/hooks/useAsync';
import { InviteListGetResponse } from '@/src/types/table';

export const useDeleteInviteList = (invitationId: number) => {
	const router = useRouter();
	const { boardid } = router.query;

	const deleteInviteList = () =>
		axiosInstance.delete<InviteListGetResponse>(
			`/dashboards/${boardid as string}/invitations/${invitationId}`,
		);
	const { execute } = useAsync(deleteInviteList, true);

	return { execute };
};
