import axiosInstance from '@/src/apis/axiosInstance';
import { useAsync } from '@/src/hooks/useAsync';
import { InviteDashPutResponse } from '@/src/types/table';

interface UsePutInviteDashProps {
	invitationId: number;
	inviteAccepted: boolean;
}

export const usePutInviteDash = ({
	invitationId,
	inviteAccepted,
}: UsePutInviteDashProps) => {
	const putInviteDash = () => {
		return axiosInstance.put<InviteDashPutResponse>(
			`invitations/${invitationId}`,
			{ inviteAccepted: inviteAccepted },
		);
	};

	const { data, execute } = useAsync(putInviteDash);

	return { inviteDashInfo: data, execute };
};
