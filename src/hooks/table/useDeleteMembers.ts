import { useEffect, useState } from 'react';

import axiosInstance from '@/src/apis/axiosInstance';
import { MembersResponse } from '@/src/types/table';

// export const useDeleteMembers = (memberId: string) => {
// 	return useAsync(
// 		() => axiosInstance.delete<MembersResponse>(`/members/${memberId}`),
// 		!!memberId,
// 	);
// };

export const useDeleteMembers = (lazyMode: boolean = true) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<unknown>(null);
	const [data, setData] = useState<MembersResponse | null>(null);

	const execute = async (memberId: string) => {
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

	useEffect(() => {
		if (!lazyMode) {
			void execute('');
		}
	}, [lazyMode]);

	return { execute, loading, error, data };
};
