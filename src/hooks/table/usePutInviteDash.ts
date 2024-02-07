import { useState } from 'react';

import axiosInstance from '@/src/apis/axiosInstance';
// import { useAsync } from '@/src/hooks/useAsync';
import { InviteDashPutResponse } from '@/src/types/table';

export const usePutInviteDash = () => {
	// const putInviteDash = () => {
	// 	return axiosInstance.put<InviteDashPutResponse>(
	// 		`invitations/${invitationId}`,
	// 		{ inviteAccepted: inviteAccepted },
	// 	);
	// };

	// const { data, execute } = useAsync(putInviteDash, true);

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<unknown>(null);
	const [data, setData] = useState(null);

	const execute = async (invitationId: number, inviteAccepted: boolean) => {
		setLoading(true);
		setError(null);
		try {
			const response = await axiosInstance.put<InviteDashPutResponse>(
				`invitations/${invitationId}`,
				{ inviteAccepted: inviteAccepted },
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
