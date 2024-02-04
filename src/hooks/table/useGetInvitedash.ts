import axiosInstance from '@/src/apis/axiosInstance';
import { useAsync } from '@/src/hooks/useAsync';
import { InviteDashGetResponse } from '@/src/types/table';

export const useGetInviteDash = (title: string) => {
	const getInviteDash = () => {
		// title 값이 있으면 해당 쿼리 파라미터를 포함한 URL을 생성
		const url = title ? `invitations?title=${title}` : 'invitations';

		return axiosInstance.get<InviteDashGetResponse>(url);
	};

	const { data, execute } = useAsync(getInviteDash);

	return { inviteDashInfo: data, execute };
};
