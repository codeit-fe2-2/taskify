import axiosInstance from '@/src/apis/axiosInstance';
import { useAsync } from '@/src/hooks/useAsync';
import { MembersResponse } from '@/src/types/table';

export const useDeleteMembers = (memberId: string) => {
	const deleteMembers = () =>
		axiosInstance.delete<MembersResponse>(`/members/${memberId}`);
	const { execute } = useAsync(deleteMembers, true);

	return { execute };
};
