import axiosInstance from '@/src/apis/axiosInstance';
import { useAsync } from '@/src/hooks/useAsync';
import { MembersResponse } from '@/src/types/table';

export const useDeleteMembers = () => {
	const deleteMembers = (memberId: string) => {
		const { execute } = useAsync(
			() => axiosInstance.delete<MembersResponse>(`/members/${memberId}`),
			true,
		);
		void execute();
	};

	return { deleteMembers };
};
