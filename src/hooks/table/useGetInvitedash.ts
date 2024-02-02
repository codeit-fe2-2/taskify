import axiosInstance from '@/src/apis/axiosInstance';
import { useAsync } from '@/src/hooks/useAsync';
import { InvitedashGetResponse } from '@/src/types/table';

export const useGetInvitedash = () => {
	const getInvitedash = () =>
		axiosInstance.get<InvitedashGetResponse>(
			'/dashboards?navigationMethod=infiniteScroll&size=100',
		);
	const { data, execute } = useAsync(getInvitedash);

	return { InvitedashData: data, execute };
};
