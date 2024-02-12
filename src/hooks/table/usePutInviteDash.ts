import { useEffect, useState } from 'react';

import axiosInstance from '@/src/apis/axiosInstance';
// import { useAsync } from '@/src/hooks/useAsync';
import { InviteDashPutResponse } from '@/src/types/table';

export const usePutInviteDash = (lazyMode: boolean = true) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<unknown>(null);
	const [data, setData] = useState<InviteDashPutResponse | null>(null);

	const execute = async (
		invitationId: string,
		inviteAccepted: boolean = true,
	) => {
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

	useEffect(() => {
		if (!lazyMode) {
			void execute('');
		}
	}, [lazyMode]);

	return { execute, loading, error, data };
};
