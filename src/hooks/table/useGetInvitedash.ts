import axiosInstance from '@/src/apis/axiosInstance';
import { useAsync } from '@/src/hooks/useAsync';
import { InviteDashGetResponse } from '@/src/types/table';

export const useGetInviteDash = (title: string) => {
	const getInviteDash = () => {
		const url = title ? `invitations?title=${title}` : 'invitations';

		return axiosInstance.get<InviteDashGetResponse>(url);
	};

	const { data, execute } = useAsync(getInviteDash, true);

	return { inviteDashInfo: data, execute };
};
