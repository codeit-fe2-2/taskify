import { useRouter } from 'next/router';
import { useEffect } from 'react';

import axiosInstance from '@/src/apis/axiosInstance';
import { useAsync } from '@/src/hooks/useAsync';
import { InviteListGetResponse } from '@/src/types/table';

export const useGetInviteList = (page: number, size: number) => {
	const router = useRouter();
	const boardid = router.query?.boardid as string;

	const getInviteList = () =>
		axiosInstance.get<InviteListGetResponse>(
			`/dashboards/${boardid}/invitations?page=${page}&size=${size}`,
		);
	const { data, execute } = useAsync(getInviteList, true);

	useEffect(() => {
		void execute();
	}, [boardid]);

	return { inviteListInfo: data, execute };
};
