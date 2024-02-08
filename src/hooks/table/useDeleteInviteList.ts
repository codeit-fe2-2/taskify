import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import axiosInstance from '@/src/apis/axiosInstance';
// import { useAsync } from '@/src/hooks/useAsync';
import { InviteListGetResponse } from '@/src/types/table';

export const useDeleteInviteList = (lazyMode: boolean = true) => {
	const router = useRouter();
	const { boardid } = router.query;

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<unknown>(null);
	const [data, setData] = useState(null);

	const execute = async (invitationId: string) => {
		setLoading(true);
		setError(null);
		try {
			const response = await axiosInstance.delete<InviteListGetResponse>(
				`/dashboards/${boardid as string}/invitations/${invitationId}`,
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
