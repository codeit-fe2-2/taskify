import { useRouter } from 'next/router';
import { useState } from 'react';

import axiosInstance from '@/src/apis/axiosInstance';
// import { useAsync } from '@/src/hooks/useAsync';
import { InviteListGetResponse } from '@/src/types/table';

export const useDeleteInviteList = () => {
	const router = useRouter();
	const { boardid } = router.query;

	// const deleteInviteList = () =>
	// 	axiosInstance.delete<InviteListGetResponse>(
	// 		`/dashboards/${boardid as string}/invitations/${invitationId}`,
	// 	);
	// const { execute } = useAsync(deleteInviteList, true);

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<unknown>(null);
	const [data, setData] = useState(null);

	const execute = async (invitationId: number) => {
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

	return { execute, loading, error, data };
};
