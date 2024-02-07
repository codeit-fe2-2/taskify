import { useState } from 'react';

import axiosInstance from '@/src/apis/axiosInstance';
import { useAsync } from '@/src/hooks/useAsync';
import { MembersResponse } from '@/src/types/table';

// export const useDeleteMembers = () => {
// 	const deleteMembers = (memberId: string) => {
// 		const { execute } = useAsync(
// 			() => axiosInstance.delete<MembersResponse>(`/members/${memberId}`),
// 			true,
// 		);
// 		void execute();
// 	};

// 	return { deleteMembers };
// };

// export const useDeleteMembers = (memberId: string) => {
// 	return useAsync(
// 		() => axiosInstance.delete<MembersResponse>(`/members/${memberId}`),
// 		!!memberId,
// 	);
// };

export const useDeleteMembers = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<unknown>(null);
	const [data, setData] = useState(null);

	const execute = async (memberId: number) => {
		setLoading(true);
		setError(null);
		try {
			const response = await axiosInstance.delete<MembersResponse>(
				`/members/${memberId}`,
			);
			setData(response?.data ?? null);
		} catch (error: unknown) {
			setError(error);
		} finally {
			setLoading(false);
		}
	};

	return { execute, loading, error, data };
};
