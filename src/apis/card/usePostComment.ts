import { useRouter } from 'next/router';
import { useState } from 'react';

import axiosInstance from '@/src/apis/axiosInstance';
import { Comment } from '@/src/types/card';

export const usePostComment = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<unknown>(null);
	const [data, setData] = useState(null);

	const router = useRouter();
	const { boardid } = router.query;

	const execute = (content: string, cardId: number, columnId: number) => {
		setLoading(true);
		setError(null);
		try {
			const response = axiosInstance.put<Comment>(`comments`, {
				content: content,
				cardId: cardId,
				columnId: columnId,
				dashboardId: boardid,
			});
			setData(response?.data ?? null);
		} catch (error: unknown) {
			setError(error);
		} finally {
			setLoading(false);
		}
	};

	return { execute, loading, error, data };
};
