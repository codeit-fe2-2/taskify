import axiosInstance from '@/src/apis/axiosInstance';
import { useAsync } from '@/src/hooks/useAsync';
import { MembersResponse } from '@/src/types/table';

export const useGetMembers = (dashboardId: number) => {
	const getMembers = () =>
		axiosInstance.get<MembersResponse>(
			`/members?page=1&size=20&dashboardId=${dashboardId}`,
		);
	const { data, execute } = useAsync(getMembers);

	return { membersInfo: data, execute };
};
